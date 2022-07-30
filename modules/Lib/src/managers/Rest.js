import fetch from "node-fetch";
import { AuthorizationError } from "../utils/errors";
import { CDNManager } from "./CDN";

export class RestManager {
    /**
     * @param {RESTOptions} options 
     */
    constructor(options) {
        this.baseURL = `https://discord.com/api/v${options.version}`;
        this.cdn = new CDNManager();
    }

    /**
     * Make a request to Discord's HTTP API
     * @private
     * @param {String} endpoint The HTTP endpoint to make the request to
     * @param {object} headers An object containing request headers
     * @param {String} body Stringified JSON body object
     * @returns {Promise<object>}
     */
    async _request(endpoint, headers = {}, body = "{}") {
        return await (await fetch(`${this.baseURL}${endpoint}`, { headers, body })).json();
    }

    get token() {
        return this.token;
    }
    set token(token) {
        this._request("/users/@me", { "Authorization": `Bot ${token}`, "Content-Type": "application/json" })
            .then(res => { if (String(res.status).startsWith("2")) this.token = token; })
            .catch(err => { console.log(err); });
    }
}