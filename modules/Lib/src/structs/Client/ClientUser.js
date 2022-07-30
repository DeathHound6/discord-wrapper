import { User } from "../User";
import { Flags } from "../Flags";

export class ClientUser extends User {
    /**
     * Represents the currently logged in user on Discord
     * @param {RawUserData} data 
     */
    constructor(client, data) {
        super(client, data);
        this.bio = data.bio;
        this.email = this.bot ? undefined : data.email || null;
        this.flags = Flags(data.flags);
    }
}