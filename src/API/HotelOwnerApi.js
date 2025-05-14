import axios from "axios";
import { toast } from "react-toastify";

// Set the API URL
const url = `${import.meta.env.VITE_BASE_API_URL}api/add_hotel_owner`;

const HotelOwnerApi = async (data, setLoading) => {
  try {
    setLoading(true);
    const response = await axios.post(url, data);
    toast.success(response?.data?.message);
  } catch (error) {
    toast.error(error?.response?.data?.message);
  } finally {
    setLoading(false);
  }
};

export default HotelOwnerApi;
