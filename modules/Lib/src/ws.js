import ws from "ws";

let erl = null;
try {
    erl = await import('erlpack')
    if (!erl.pack) erl = null;
} catch {}
const decoder = new TextDecoder();
export const encoding = erl ? "etf" : "json";
export const pack = erl ? erl.pack : JSON.stringify;

export function create(gateway, query = {}, ...args) {
    const [g, q] = gateway.split("?");
    query.encoding = encoding;
    query = new URLSearchParams(query);
    if (q) new URLSearchParams(q).forEach((v, k) => query[k] = v);
    return new ws(`${g}?${query}`, ...args);
}

export function unpack(data, type) {
    if (encoding == "json" || type == "json") {
        if (typeof data != "string")
            data = decoder.decode(data);
        return JSON.parse(data);
    }
    if (!Buffer.isBuffer(data)) data = Buffer.from(new Uint8Array(data));
    return erl.unpack(data);
}

export const CONNECTING = ws["CONNECTING"];
export const OPEN = ws["OPEN"];
export const CLOSING = ws["CLOSING"];
export const CLOSED = ws["CLOSED"];