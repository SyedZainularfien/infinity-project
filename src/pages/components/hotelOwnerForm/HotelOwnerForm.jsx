import { useCallback, useEffect, useRef, useState } from "react";
import HotelOwnerApi from "../../../API/HotelOwnerApi";

const HotelOwnerForm = ({ closeModal }) => {
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    closeModal();
  };

  const handleOutsideClick = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const [hotelFormError, setHotelFormError] = useState(false);
  const [loading, setLoading] = useState(false);
  const initialState = {
    owner_name: "",
    owner_contact: "",
    company_name: "",
    seeking_tokenization: false,
    owner_legal_name: "",
    business_legal_name: "",
    own_debt: false,
    asset_worth: "",
    portfolio_worth: "",
    share_five_years_of_account: false,
    share_monthly_account: false,
  };
  const [hotelFormData, setHotelFormData] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    // For checkboxes, store boolean values (true when checked, false when not)
    const inputValue = type === "checkbox" ? checked : value;

    // Update the form data based on the input element's name and value
    setHotelFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const isFormValid = () => {
    return (
      hotelFormData.owner_name !== "" &&
      hotelFormData.owner_contact !== "" &&
      hotelFormData.company_name !== "" &&
      hotelFormData.owner_legal_name !== "" &&
      hotelFormData.business_legal_name !== "" &&
      hotelFormData.asset_worth !== "" &&
      hotelFormData.portfolio_worth !== ""
    );
  };

  const handleSubmit = async () => {
    if (!isFormValid()) {
      setHotelFormError(true);
      handleCloseModal();
      return;
    } else {
      setHotelFormError(false);
      await HotelOwnerApi(hotelFormData, setLoading);
      setHotelFormData(initialState);
      handleCloseModal();
    }
  };

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="fixed top-0 bottom-0 left-0 right-0 z-50 min-h-screen p-4"
    >
      <div className="relative flex justify-center items-center h-[100%]">
        <div
          ref={modalRef}
          className="relative w-[100%] md:w-[60%] lg:w-[45%] xl:w-[35%] h-max bg-white rounded-3xl shadow dark:bg-[#1c1c1c]"
        >
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={handleCloseModal}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="flex flex-col items-center p-6 py-8 text-center">
            <div className="flex justify-center pb-1 md:pb-0">
              <h3 className="text-xl font-extrabold lg:text-3xl text-gradient-blue-cyan">
                Hotel Owner Information
              </h3>
            </div>
            <div className=" flex md:w-[85%] py-2 w-[100%] items-center">
              <span className="w-[100%] h-[1px] opacity-30 bg-[#000] dark:bg-white"></span>
            </div>
            <div>
              <form
                className="flex flex-col items-center justify-center w-full gap-3 mt-3"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid w-full grid-flow-row gap-3 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-10 px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-c2 placeholder:text-white dark:placeholder-c3"
                    autoComplete="off"
                    name="owner_name"
                    onChange={handleInputChange}
                    inputValue={hotelFormData.owner_name}
                  ></input>
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    className="w-full h-10 px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-c2 placeholder:text-white"
                    autoComplete="off"
                    name="owner_contact"
                    onChange={handleInputChange}
                    inputValue={hotelFormData.owner_contact}
                  ></input>
                </div>
                <div className="grid w-full grid-flow-row gap-3 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full h-10 px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-c2 placeholder:text-white"
                    autoComplete="off"
                    name="company_name"
                    onChange={handleInputChange}
                    inputValue={hotelFormData.company_name}
                  ></input>
                  <input
                    type="text"
                    placeholder="Owner Legal Name"
                    className="w-full h-10 px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-c2 placeholder:text-white"
                    autoComplete="off"
                    name="owner_legal_name"
                    onChange={handleInputChange}
                    inputValue={hotelFormData.owner_legal_name}
                  ></input>
                </div>
                <div className="flex justify-start w-full gap-2 text-xs text-left">
                  <div>
                    <input
                      type="checkbox"
                      name="seeking_tokenization"
                      onChange={handleInputChange}
                      checked={hotelFormData.seeking_tokenization}
                    />
                  </div>
                  <div>
                    <label htmlFor="seeking_tokenization">
                      Are you the owner of the hotel that is seeking
                      tokenization?
                    </label>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Business Legal Name"
                  className="w-full h-10 px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-c2 placeholder:text-white"
                  autoComplete="off"
                  name="business_legal_name"
                  onChange={handleInputChange}
                  inputValue={hotelFormData.business_legal_name}
                ></input>
                <div className="flex justify-start w-full gap-2 text-xs text-left">
                  <div>
                    <input
                      type="checkbox"
                      name="own_debt"
                      onChange={handleInputChange}
                      checked={hotelFormData.own_debt}
                    />
                  </div>
                  <div>
                    <label htmlFor="own_debt">
                      Do you own any debt against this asset?
                    </label>
                  </div>
                </div>
                <div className="grid w-full grid-flow-row gap-3 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Assets Worth"
                    className="w-full h-10 px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-c2 placeholder:text-white"
                    autoComplete="off"
                    name="asset_worth"
                    onChange={handleInputChange}
                    inputValue={hotelFormData.asset_worth}
                  ></input>
                  <input
                    type="text"
                    placeholder="Portfolio Worth"
                    className="w-full h-10 px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-c2 placeholder:text-white"
                    autoComplete="off"
                    name="portfolio_worth"
                    onChange={handleInputChange}
                    inputValue={hotelFormData.portfolio_worth}
                  ></input>
                </div>
                <div className="flex flex-col items-start w-full gap-2 text-left">
                  <div className="flex justify-start w-full gap-2 text-xs">
                    <div>
                      <input
                        type="checkbox"
                        name="share_five_years_of_account"
                        onChange={handleInputChange}
                        checked={hotelFormData.share_five_years_of_account}
                      />
                    </div>
                    <div>
                      <label htmlFor="share_five_years_of_account">
                        Can you share 5 years of accounts?
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-start w-full gap-2 text-xs">
                    <div>
                      <input
                        type="checkbox"
                        name="share_monthly_account"
                        onChange={handleInputChange}
                        checked={hotelFormData.share_monthly_account}
                      />
                    </div>
                    <div>
                      <label htmlFor="share_monthly_account">
                        Are you able to share monthly accounts to our
                        due-diligence team?
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className={`w-full mt-2 h-10 rounded-md outline-none 
    bg-transparent text-white hover:bg-white hover:text-black 
    border border-white transition-colors duration-200 cursor-pointer`}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelOwnerForm;
