import { Bitfield } from "./BitField";

export class Flags extends Bitfield {
    static Flags = {
        "STAFF": 1<<0,
        "PARTNER": 1<<1,
        "HYPESQUAD": 1<<2,
        "BUG_HUNTER1": 1<<3,
        "HYPESQUAD_BRAVERY": 1<<6,
        "HYPESQUAD_BRILLIANCE": 1<<7,
        "HYPESQUAD_BALANCE": 1<<8,
        "EARLY_SUPPORTER": 1<<9,
        "TEAM_USER": 1<<10,
        "BUG_HUNTER2": 1<<14,
        "VERIFIED_BOT": 1<<16,
        "EARLY_VERIFIED_DEVELOPER": 1<<17,
        "CERTIFIED_MODERATOR": 1<<18,
        "BOT_HTTP_INTERACTIONS": 1<<19
    };
    constructor(bitfield) {
        super(bitfield);
    }
}