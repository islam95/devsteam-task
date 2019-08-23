import axios from "axios";
import { baseURL, apiBaseURL } from "../constants/apiKeys";

// Create an instance for axios with headers for authorization
const createInstance = token => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

// get access_token from baseUrl
const getToken = async () => {
  try {
    const response = await axios.get(baseURL);
    const { data } = response;
    return data.access_token;
  } catch (error) {
    console.error(error);
  }
};

// Fetch regions using access_token
export const getRegions = async () => {
  const accessToken = await getToken();
  const instance = createInstance(accessToken);
  const data = await instance.get(`${apiBaseURL}/get/regions/json`);
  return data;
};

// const data = await instance.get(`${apiBaseURL}/get/cnaps/1/json`);
// const data = await instance.get(`${apiBaseURL}/get/cnap/detail/1/json`);

export const getCadastralData = async () => {
  const accessToken = await getToken();
  const instance = createInstance(accessToken);
  const params = {
    requestType: 12,
    transmit_as: 2,
    documentOwnerType: "",
    cadNum: "5123755800:01:003:1437",
    cnap: "243",
    region: "1",
    type_user_choice: "",
    type_user: {
      email: "dsf@sdfd.com",
      fname: "sdf",
      lname: "dsf",
      address: "sdfsd",
      accept: "",
      document: {
        series: "sd",
        number: "gfdsaf",
        dateIssue: "22-08-2019"
      }
    }
  };
  const data = await instance.post(`${apiBaseURL}/excerpt/json`, params);
  console.log("API data", data);
  return data;
};
