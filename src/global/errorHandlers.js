import Vue from "vue";


export function extractErrorMessage(error) {
  if (error.response) {
    const errorData = error.response.data;
    const errorMessage = errorData.msg || errorData.message.msg || errorData.message || "Something went wrong!";
    return errorMessage;
  }
  else if (error.request) {
    // axios request error
    return "API Request Failed!";
  }

  else {
    return error.message;
  }
}


function errorHandler(error) {
  const errorMessage = extractErrorMessage(error);
  console.log("Error caught", errorMessage)
}

Vue.config.errorHandler = errorHandler;