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
        /**
         * @type {Flags}
         */
        this.flags = data.flags ? new Flags(data.flags) : new Flags(data.public_flags);
        /**
         * @type {String?}
         */
        this.email = this.bot ? null : data.email || null;
        /**
         * @type {String}
         */
        this.bio = data.bio || "";
        /**
         * @type {String}
         */
        this.locale = this.bot || !data.locale ? "en-US" : data.locale;
        /**
         * @type {Boolean}
         */
        this.mfaEnabled = data.mfa_enabled || false;
        /**
         * @type {String}
         */
        this.nitro = data.premium_type == 0 ? "None" : data.premium_type == 1 ? "Nitro Classic" : "Nitro";
        /**
         * @type {Boolean}
         */
        this.emailVerified = data.verified || false;
    }

    /**
     * Get the user's avatar URL
     * @param {AvatarURLOptions} options The options for the image
     * @returns {String} The user's avatar URL
     */
    avatarURL(options) {
        return this.client.rest.cdn.getUserAvatarURL(this.id, this.avatarHash, options);
    }

    /**
     * 
     */
    createDMChannel() {}

    toString() {
        return `<@${this.id}>`;
    }
}