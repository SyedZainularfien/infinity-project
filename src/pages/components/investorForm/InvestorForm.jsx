import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import ContactApi from "../../../API/ContactApi";

const InvestorForm = ({ closeModal }) => {
  const modalRef = useRef(null);
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handleCloseModal = () => {
    closeModal();
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.addEventListener("click", handleOutsideClick);
    }, 0);

    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    return (
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.email !== "" &&
      formData.phoneNumber !== ""
    );
  };

  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  const handleSubmit = async () => {
    if (!isFormValid()) {
      setFormError(true);
      return;
    } else if (!isValidEmail(formData.email)) {
      toast.error("Invalid email address");
      setFormError(true);
      return;
    } else {
      setFormError(false);
      setLoading(true);
      await ContactApi(formData, setLoading);
      setFormData(initialState);
      toast.success("Submission successful");
      handleCloseModal(); // Close modal on successful form submission
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(true);

    return () => {
      setIsModalVisible(false);
    };
  }, []);

  return (
    <>
      {/* Modal container */}
      <div
        id="popup-modal"
        tabIndex="-1"
        className={`fixed top-0 bottom-0 left-0 right-0 z-50 min-h-screen p-4 overflow-y-auto transition-opacity duration-300 ease-in-out ${
          isModalVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative flex justify-center items-center h-[100%]">
          <div
            ref={modalRef}
            className={`relative w-[100%] md:w-[60%] lg:w-[45%] xl:w-[35%] h-auto bg-white rounded-3xl shadow dark:bg-[#1c1c1c] transition-all transform duration-500 ease-in-out ${
              isModalVisible ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
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
              <div className="pb-3">
                <img
                  src={"/assets/images/modalLogo.png"}
                  width={220}
                  height={101}
                  alt="Logo"
                />
              </div>
              <div className="pb-3 flex md:w-[85%] py-2 w-[100%] items-center mt-2">
                <span className="w-[100%] h-[1px] opacity-30 bg-[#000] dark:bg-white"></span>
              </div>
              <div>
                <div className="flex justify-center pb-5 md:pb-0">
                  <h3 className="text-xl font-extrabold lg:text-3xl text-gradient-blue-cyan">
                    Investors Information
                  </h3>
                </div>
                <form
                  className="flex flex-col items-center justify-center w-full gap-3 md:mt-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="grid w-full grid-flow-row gap-3 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-white placeholder:text-black dark:placeholder-white h-14"
                      autoComplete="off"
                      name="firstName"
                      onChange={handleInputChange}
                      value={formData.firstName}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-white placeholder:text-black dark:placeholder-white h-14"
                      autoComplete="off"
                      name="lastName"
                      onChange={handleInputChange}
                      value={formData.lastName}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-white placeholder:text-black dark:placeholder-white h-14"
                    autoComplete="off"
                    name="email"
                    onChange={handleInputChange}
                    value={formData.email}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-white placeholder:text-black dark:placeholder-white h-14"
                    autoComplete="off"
                    name="phoneNumber"
                    onChange={handleInputChange}
                    value={formData.phoneNumber}
                  />
                  <button
                    onClick={handleSubmit}
                    className={`w-full mt-2 text-white rounded-md outline-none h-14 bg-gradient-to-r from-blue-500 to-cyan-500 dark:text-black ${
                      formError || !isFormValid()
                        ? "cursor-not-allowed opacity-70"
                        : "cursor-pointer"
                    }`}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorForm;
