import config from "../config";

async function apiCall(endpoint, options) {
  console.log("Making API call to", endpoint, options);
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const url = config.API_BASE_URL + endpoint;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Response not ok", response);
  }

  return await response.json().catch((error) => console.error(error));
}

export default apiCall;
