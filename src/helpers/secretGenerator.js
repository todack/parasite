module.exports = Object.freeze({
    generate 
});

function generate() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
    let tokens = [];
    for(let i = 0; i < 32; i++) {
        tokens.push(chars[Math.floor(Math.random() * chars.length)]);
    }
    return tokens.join("");
}