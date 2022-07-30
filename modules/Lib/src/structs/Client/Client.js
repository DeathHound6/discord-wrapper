import { EventEmitter } from "events";
import { RestManager } from "../../managers/Rest";
import { WebSocketManager } from "../../managers/Websocket/WebSocket";
import { User } from "../User";

export class Client extends EventEmitter {
    /**
     * 
     * @param {ClientOptions} options 
     */
    constructor(options) {
        /**
         * @type {WebSocketManager}
         */
        this.ws = new WebSocketManager(this);
        /**
         * @type {RestManager}
         */
        this.rest = new RestManager(options.rest);
    }

    get user() {
        return new User(this, await this.rest._request("/users/@me"));
    }

    /**
     * Fetch a User
     * @param {Snowflake} id The User's ID
     * @returns {Promise<User>}
     */
    async getUser(id) {
        return new User(this, await this.rest._request(`/users/${id}`));
    }

    /**
     * Login to Discord API
     * @param {String} token Your bot token
     */
    login(token) {
        this.rest.token = token;
        this.ws.token = token;
        try {
            this.ws.connect();
        } catch (err) {
            this.destroy();
            throw err;
        }
    }

    destroy() {
        this.ws.destroy();
        this.rest.token = null;
    }
}