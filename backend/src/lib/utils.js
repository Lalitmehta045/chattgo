import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
  const { JWT_SECRET } = ENV;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  const cookieOptions = {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks: cross-site scripting
    secure: true, // Always true for production (HTTPS required)
    path: '/', // Ensure cookie is sent with all requests
    sameSite: "none", // Required for cross-site cookies (Vercel → Render)
  };

  res.cookie("jwt", token, cookieOptions);

  return token;
};

// http://localhost
// https://dsmakmk.com
