export class CDNManager {
    constructor() {
        this.baseURL = "https://cdn.discordapp.com";
    }

    /**
     * Get a users avatar URL
     * @param {Snowflake} id The user's id
     * @param {String} hash The avatar hash
     * @param {AvatarURLOptions?} options The options for the URL
     * @returns {String} The user's banner URL
     */
    getAvatarURL(id, hash, options) {
        let format = options?.type || "webp"
        if (hash.substring(0, 2) == "a_")
            format = "gif";
        return `${this.baseURL}/avatars/${id}/${hash}.${format}?size=${options?.size || 512}`;
    }

    /**
     * Get a users banner URL
     * @param {Snowflake} id The user's id
     * @param {String} hash The banner hash
     * @param {AvatarURLOptions} The options for the URL
     * @returns {String} The user's banner URL
     */
    getBannerURL(id, hash, options) {
        let format = options?.type || "png";
        if (hash.substring(0, 2) == "a_")
            format = "gif";
        return `${this.baseURL}/banners/${id}/${hash}.${format}?size=${options?.size || 512}`;
    }
}