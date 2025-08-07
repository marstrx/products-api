require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretCode = process.env.JWT_SECRET_CODE;

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(401).json({
                success: false,
                message: "Access denied. Token missing or malformed."
            });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, secretCode);

        req.userInfo = decoded;

        next(); 
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token."
        });
    }
};

module.exports = authMiddleware;
