// Generates the values for the admin dashboard environment variables.
// Usage: node scripts/hash-password.mjs "your-password"
import { randomBytes, scryptSync } from "node:crypto";

const password = process.argv[2];
if (!password || password.length < 12) {
  console.error('Usage: node scripts/hash-password.mjs "<password of 12+ characters>"');
  process.exit(1);
}

const salt = randomBytes(16);
const hash = scryptSync(password, salt, 64);

console.log(`ADMIN_PASSWORD_HASH=${salt.toString("hex")}:${hash.toString("hex")}`);
console.log(`SESSION_SECRET=${randomBytes(32).toString("base64url")}`);
console.log(`ADMIN_PATH=admin-${randomBytes(12).toString("base64url").replace(/[-_]/g, "x")}`);
