/**
 * Avatar URL Options
 * @typedef {Object} AvatarURLOptions
 * @property {Number} [size=512] The size of the image
 * @property {String} [type="webp"] The file type of the image
 */

/**
 * Discord Snowflake - Represents a Discord ID
 * @typedef {String} Snowflake
 */



/**
 * A raw user object from the Discord API
 * @typedef {Object} RawUserData
 * @property {Snowflake} id The user's ID
 * @property {String} username The user's username
 * @property {String?} avatar The user's avatar hash
 * @property {*?} avatar_decoration 
 * @property {String} discriminator The user's discriminator
 * @property {Number} public_flags The user's public flags
 * @property {Number} [flags] The user's flags - Only present on the current user
 * @property {Boolean} [bot] Whether the user is a bot or not - Only present on bot accounts
 * @property {String?} banner The banner's hash
 * @property {String?} banner_color The banner color
 * @property {Number?} accent_color The banner color encoded as as hex code
 * @property {String} [bio=""] The user's bio - Only present on the current user
 * @property {String} [locale="en-US"] The user's region locale - Only present on the current user
 * @property {Boolean} [mfa_enabled=false] The user's MFA status - Only present on the current user
 * @property {String?} [email] The user's email address - Only present on the current user. Null if a bot account
 * @property {Boolean} [verified] Whether the user's email is verified - Only present on the current user
 * @property {Number?} [premium_type] The type of Nitro Subscription the user has
 */