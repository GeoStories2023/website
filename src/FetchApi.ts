const BASE_URL = "http://thiering.org:3000/api/v1";

export class FetchApi {
  /**
   * @param xhr - the XMLHttpRequest object
   * @param body - the body of the request (optional)
   * @returns {Promise<any>} the response
   */
  static async send(xhr: XMLHttpRequest, body?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send(body ? JSON.stringify(body) : undefined);
    });
  }

  /**
   * @param url - the url to send the request to
   * @param authorization - the access token
   * @param body - the body of the request
   * @returns {Promise<any>} the response
   */
  static async post(
    url: string,
    authorization: string,
    body: any
  ): Promise<any> {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", `${BASE_URL}${url}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", `Bearer ${authorization}`);

    return FetchApi.send(xhr, body);
  }

  /**
   * @param url - the url to send the request to
   * @param authorization - the access token
   * @returns {Promise<any>} the response
   */
  static async get(url: string, authorization: string): Promise<any> {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${BASE_URL}${url}`, true);
    xhr.setRequestHeader("Authorization", `Bearer ${authorization}`);

    return FetchApi.send(xhr);
  }
}