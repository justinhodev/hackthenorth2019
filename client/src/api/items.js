import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_URL + "/items";

export async function getAllItems() {
  let response = await axios.get(apiUrl);
  //localStorage.setItem("receipts", response);
  return response;
}