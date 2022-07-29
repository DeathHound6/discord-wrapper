export class Bitfield {
    static Flags = {};
    constructor(bitfields) {
        this.bitfields = Number(bitfields);
    }

    /**
     * Check if at least one bit is present in the current bitfield
     * @param {...Number} bits The bitfields
     * @returns {Boolean} Whether at least one bit is present or not
     */
    any(...bits) {
        return bits.some(bit => this.has(bit));
    }

    /**
     * Check if all bits are present in the current bitfield
     * @param  {...Number} bits The bitfields
     * @returns {Boolean} Wether all bits are 
     */
    every(...bits) {
        return bits.every(bit => this.has(bit));
    }

    /**
     * Check if a bit is present in the current bitfield
     * @param {Number} bit The bitfield(s) number
     * @returns {Boolean} Whether the bit is present or not
     */
    has(bit) {
        return (this.bitfields & bit) == bit && bit != 0;
    }
}