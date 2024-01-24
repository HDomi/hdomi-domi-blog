import axiosInstance from "axios";
// import { localStorage.getItem, setLocalItem } from "@/utils/localStorage";
// import { refreshmentToken } from "@/pages/login/service/InitialService";

const get = async (
  authorization: any,
  url: any,
  params = {},
  config: any = {}
) => {
  // 쿼리 파라미터 처리
  const queryString = Object.entries(params)
    .filter(([key, value]) => value !== null && value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const newUrl = queryString ? `${url}?${queryString}` : url;

  if (authorization) {
    const token = localStorage.getItem("TOKEN");
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  try {
    const response = await axiosInstance.get(newUrl, config);
    return await errorCheck(response);
  } catch (error) {
    return errorHandler(error);
  }
};

const post = async (
  authorization: any,
  url: any,
  data = {},
  config: any = {}
) => {
  if (authorization) {
    const token = localStorage.getItem("TOKEN");
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  try {
    const response = await axiosInstance.post(url, data, config);
    return await errorCheck(response);
  } catch (error) {
    return errorHandler(error);
  }
};

const put = async (
  authorization: any,
  url: any,
  data = {},
  config: any = {}
) => {
  if (authorization) {
    const token = localStorage.getItem("TOKEN");
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  try {
    const response = await axiosInstance.put(url, data, config);
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

//TODO:  ADMIN API 나오면 추가
const errorHandler = (error: any) => {
  let errorcode = "";
  let errormessage = "";
  if (error.error_code) {
    errorcode = error.error_code;
    errormessage = error.error_message;
  } else {
    errorcode = error.response.data.error_code;
    errormessage = error.response.data.error_message;
  }
  let koErrMsg = "";
  console.error("errormessage : ", errormessage);

  const result = koErrMsg === "" ? errormessage : koErrMsg;
  return Promise.reject(result);
};

const errorCheck = async (response: any) => {
  if (response.status >= 400 && response.status <= 500) {
    console.log("error status : ", response.status);
  } else if (response.data.error) {
    return errorHandler(response.data);
  } else {
    return response;
  }
};

const navigate = (url: any) => {
  window.location.href = url;
};

export { get, post, put };
