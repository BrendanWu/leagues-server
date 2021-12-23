const rateLimit = require("express-rate-limit");
exports.registerLimiter = rateLimit({
    windowMs: 3 * 60 * 60 * 1000,
    max: 3,
    message: "Too many accounts Registered from this device, please try again in a few hours"
});
exports.loginLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    message: "Too many Login attempts from this device, please try again in an hour"
});
