const { validation } = require("../service/auth");

 function checkauth(cookieName) {
    return (req, res, next) => {
        const userToken = req.cookies[cookieName];
        
        if (!userToken) {
            return next();  
        }

        try {
            const payload = validation(userToken);  // Validate the token
            req.user = payload;  // Add user data to request object
        } catch (error) {
            console.error("Token validation failed:", error);  // Log errors if validation fails
        }

        next();  // Continue to next middleware or route handler
    };
}

module.exports = {
    checkauth,
    
};
