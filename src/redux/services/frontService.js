import { appConfig, headerConfig, refineHeader } from "../config";

export const frontService = {
	getMenuList
}

function getMenuList(formData) {
  refineHeader();
  const requestOptions = {
    method: "POST",
    headers: headerConfig.headerDatas,
    mode: "cors",
    body: JSON.stringify(formData)
  };

  return fetch(`${appConfig.api.url}front/menu`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data.response;
    });
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}