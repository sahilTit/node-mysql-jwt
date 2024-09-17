const cacheUtil = require('../utils/cache.utils');
const jwtUtil = require('../utils/jwt.utils');

module.exports = async (req, res, next) => {
    let token = req.headers.authorization;

    // Check for the 'Bearer ' prefix and extract the token
    if (token && token.startsWith('Bearer ')) {
        token = token.slice(7).trim();
    } else {
        return res.status(401).json({ message: 'Authorization header is missing or malformed.' });
    }

    if (token) {
        try {
            // Check if the token is blacklisted
            const isBlackListed = await cacheUtil.get(token);
            if (isBlackListed) {
                return res.status(401).json({ message: 'Unauthorized - Token is blacklisted.' });
            }

            const decoded = await jwtUtil.verifyToken(token);
            req.user = decoded;
            req.token = token;
            next();
        } catch (error) {
            console.error('Token verification error:', error);
            return res.status(401).json({ message: 'Unauthorized - Invalid token.' });
        }
    } else {
        return res.status(401).json({ message: 'Authorization header is missing or malformed.' });
    }
};
