import { EventEmitter } from "events";
import { RestManager } from "../../managers/Rest";
import { WebSocketManager } from "../../managers/WebSocket";
import { User } from "../User";

export class Client extends EventEmitter {
    constructor(options) {
        this.ws = new WebSocketManager(this);
        this.rest = new RestManager(options.rest);
    }

    get user() {

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