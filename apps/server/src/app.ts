import express, { type Express } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const app: Express = express();

// Expose client's IP address instead of internal reverse proxy,
// s.t. things like rate limiting works as intended: 
// https://expressjs.com/en/guide/behind-proxies/
app.set("trust proxy", 1);

// ============================================ //
// === Express app middleware configuration === //
// ============================================ //

// Rate limiting
app.use(rateLimit({
    windowMs: 1 * (60 * 1000), // 1min window
    limit: 100 // reqs per window
}));

// Set security HTTP response headers automatically
app.use(helmet());

// Enable parsing of incoming requests with JSON payloads
app.use(express.json());

// =============================================== //
// === Application Components & Domain Routing === //
// =============================================== //

// TODO: Add rooutes here...

export default app;