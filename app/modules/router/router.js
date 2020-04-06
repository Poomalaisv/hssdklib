// @flow
import fetch from "cross-fetch";

/**
 * @typedef {Object<string, string>} GET_ROUTERS_PARAM
 * @type {object}
 * @property {string} household_url This is the Household url.
 * @property {string} authToken Access token
 *
 * @since 1.0.0
 */
type GET_ROUTERS_PARAM = {
  household_url: string,
  authToken: string
};

/**
 * Class is used to maintain the router details and
 * @class
 * @since 1.0.0
 */
export const Router = {
  /**
     * Get Router Details
     * @method getRouters
     * @param {GET_ROUTERS_PARAM} obj Has household url and Authorization token.
     * @returns {object} Returns API response
     */
  getRouters: (obj : GET_ROUTERS_PARAM = {}) => {
    const url = `${obj.household_url}api/v3/routers`;
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: obj.authToken
      }
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return response;
      }
    });
  },
  /**
     *
     * Ping Router
     * @method ping
     *
     * @since 1.0.0
     * @param {string} routerIp IP of the router
     * @returns {Object} Returns API response
     */
  ping: (routerIp : string) => {
    return fetch(`https://${routerIp}:8081/ping`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  },
  /**
     *
     * Activation
     * @method activate
     *
     * @since 1.0.0
     * @param {string} routerIp IP of the router
     * @returns {Object} Returns API response
     */
  activate: (routerIp : string) => {
    const url = `https://${routerIp}:8081/activation`;
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return response;
      }
    });
  }
};
