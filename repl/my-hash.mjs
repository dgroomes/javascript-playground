import crypto from "crypto"

/**
 * Hash a string using the SHA-256 algorithm and return the result in both hexadecimal and base64 encoding.
 * @param content
 * @returns {{hashHex: string, hashBase64: string}}
 */
export function multiHash(content) {
    return {
        hashHex: hashHex(content),
        hashBase64: hashBase64(content)
    };
}

/**
 * Hash a string using the SHA-256 algorithm and return the result in hexadecimal encoding.
 */
export function hashHex(content) {
    const hash = crypto.createHash("sha256");
    hash.update(content);
    return hash.digest("hex");
}

/**
 * Hash a string using the SHA-256 algorithm and return the result in base64 encoding.
 */
export function hashBase64(content) {
    const hash = crypto.createHash("sha256");
    hash.update(content);
    return hash.digest("base64");
}
