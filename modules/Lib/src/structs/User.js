import { snowflakeToTimestamp } from "../utils/functions";
import { Client } from "./Client/Client";
import { Flags } from "./Flags";

export class User {
    /**
     * Represents a User on Discord
     * @param {Client} client The client that instantiated this user
     * @param {RawUserData} data The API data of the user
     */
    constructor(client, data) {
        /**
         * @type {Client}
         */
        this.client = client;
        /**
         * @type {Snowflake}
         */
        this.id = data.id;
        /**
         * @type {Number}
         */
        this.createdTimestamp = snowflakeToTimestamp(this.id);
        /**
         * @type {String}
         */
        this.username = data.username;
        /**
         * @type {Number}
         */
        this.discriminator = Number(data.discriminator);
        /**
         * @type {String?}
         */
        this.avatarHash = data.avatar;
        /**
         * @type {*?}
         */
        this.avatarDeoration = data.avatar_decoration;
        /**
         * @type {String}
         */
        this.tag = `${this.username}#${this.discriminator}`;
        /**
         * @type {Flags}
         */
        this.publicFlags = new Flags(data.public_flags);
        /**
         * @type {String}
         */
        this.bannerHash = data.banner;
        /**
         * @type {String}
         */
        this.bannerColor = data.banner_color;
        /**
         * @type {Number}
         */
        this.bannerAccentColor = data.accent_color;
        /**
         * @type {Boolean}
         */
        this.bot = data.bot || false;
    }

    /**
     * Get the user's avatar URL
     * @param {AvatarURLOptions} options The options for the image
     * @returns {String} The user's avatar URL
     */
    avatarURL(options) {
        return this.client.rest.cdn.getAvatarURL(this.id, this.avatarHash, options);
    }

    /**
     * 
     */
    createDMChannel() {}

    toString() {
        return `<@${this.id}>`;
    }
}