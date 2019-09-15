import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_URL + "/receipts";

export async function getAllReceipts() {
  console.log(apiUrl);
  let response = await axios.get(apiUrl);
  //localStorage.setItem("receipts", response);
  console.log(response);
  return response;
}