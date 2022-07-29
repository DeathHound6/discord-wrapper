/**
 * Convert a Discord Snowflake into a timestamp number
 * @param {Snowflake} snowflake The Discord Snowflake
 * @returns {Number}
 */
export function snowflakeToTimestamp(snowflake) {
    return Number((BigInt(Number(snowflake)) >> 22n) + 1420070400000n);
}