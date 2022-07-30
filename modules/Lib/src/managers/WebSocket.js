import { Client } from "../client";

export class WebSocketManager {
    /**
     * @param {Client} client
     */
    constructor(client) {
        this.client = client;
    }

    get token() {
        return this.token;
    }
    set token(token) {
        this.token = token;
    }
}