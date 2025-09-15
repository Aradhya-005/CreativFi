import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // Get token from Authorization header, format: "Bearer <token>"
  const authHeader = req.headers.authorization;
  console.log("Authorization header:", authHeader);

  if (!authHeader) {
    console.log("Authorization header missing");
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];
  console.log("Token extracted:", token);

  if (!token) {
    console.log("Token missing");
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    console.log("JWT_SECRET from env:", process.env.JWT_SECRET ? "*****" : "missing");
    // Verify token with secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token payload:", decoded);
    req.userId = decoded.id;  
    next();                   // token valid, proceed to next middleware/route handler
  } catch (err) {
    console.error("JWT verification error:", err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authMiddleware;
