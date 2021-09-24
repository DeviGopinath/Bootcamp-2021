

export const APIService = {
  addReview, getReview
};

function addReview(data) {
  
  const requestOptions = {
    method: "POST",
    headers: {
           "Content-type": "application/json",
          },
    body: JSON.stringify(data)  
  };
  
  return fetch(
    "http://localhost:4000/add",
    requestOptions
  ).then(handleResponse);
}

function getReview(data) {
  
  const requestOptions = {
    method: "PATCH",
    headers: {
           "Content-type": "application/json",
          },
    body: JSON.stringify(data)  
  };
  console.log(data);
  return fetch(
    "http://localhost:4000/getreview",
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {

  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    // if (!response.ok) {
    //   const error =
    //     "Oops! Something went wrong there, Please try again." ||
    //     (data && data.message) ||
    //     response.status;
    //   return Promise.reject(new Error(error));
    // }
    return data;
  });
}
