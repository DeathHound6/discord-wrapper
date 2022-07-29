import { Bitfield } from "./BitField";

export class Permissions extends Bitfield {
    static Flags = {
        "CREATE_INVITE": 1<<0,
        "KICK_MEMBERS": 1<<1,
        "BAN_MEMBERS": 1<<2,
        "ADMINISTRATOR": 1<<3,
        "MANAGE_CHANNELS": 1<<4,
        "MANAGE_GUILD": 1<<5,
        "ADD_REACTIONS": 1<<6,
        "VIEW_AUDIT_LOG": 1<<7,
        "VOICE_PRIORITY_SPEAKER": 1<<8,
        "VOICE_STREAM": 1<<9,
        "VIEW_CHANNEL": 1<<10,
        "SEND_MESSAGES": 1<<11,
        "SEND_TTS_MESSAGES": 1<<12,
        "MANAGE_MESSAGES": 1<<13,
        "EMBED_LINKS": 1<<14,
        "ATTACH_FILES": 1<<15,
        "READ_MESSAGE_HISTORY": 1<<16,
        "MENTION_EVERYONE": 1<<17,
        "USE_EXTERNAL_EMOJIS": 1<<18,
        "VIEW_GUILD_INSIGHTS": 1<<19,
        "VOICE_CONNECT": 1<<20,
        "VOICE_SPEAK": 1<<21,
        "VOICE_MUTE_MEMBERS": 1<<22,
        "VOICE_DEAFEN_MEMBERS": 1<<23,
        "VOICE_MOVE_MEMBERS": 1<<24,
        "VOICE_ACTIVITY_DETECTION": 1<<25,
        "CHANGE_NICKNAME": 1<<26,
        "MANAGE_NICKNAMES": 1<<27,
        "MANAGE_ROLES": 1<<28,
        "MANAGE_WEBHOOKS": 1<<29,
        "MANAGE_EMOJIS_AND_STICKERS": 1<<30,
        "USE_APPLICATION_COMMANDS": 1<<31,
        "VOICE_REQUEST_TO_SPEAK": 1<<32,
        "MANAGE_EVENTS": 1<<33,
        "MANAGE_THREADS": 1<<34,
        "CREATE_PUBLIC_THREADS": 1<<35,
        "CREATE_PRIVATE_THREADS": 1<<36,
        "USE_EXTERNAL_STICKERS": 1<<37,
        "SEND_THREAD_MESSAGES": 1<<38,
        "VOICE_EMBEDDED_ACTIVITIES": 1<<39,
        "MODERATE_MEMBERS": 1<<40
    };
    constructor(bitfield) {
        super(bitfield);
    }
}