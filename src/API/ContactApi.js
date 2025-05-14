import axios from "axios";
import { toast } from "react-toastify";
// const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}api/add_investor_personal_data`;

async function ContactApi(data, setLoading) {
  const url = '/api/waitlist';
  try {
    setLoading(true);
    const response = await axios.post(url, data);
    toast.success(response?.data?.message || 'Successfully added to the waitlist!');
  } catch (error) {
    const errorMessage = error?.response?.data?.message || 'Failed to add to the waitlist. Please try again.';
    toast.error(errorMessage);
  } finally {
    setLoading(false);
  }
}
export default ContactApi;
