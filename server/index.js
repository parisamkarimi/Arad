const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* -------------------------
   Config
-------------------------- */

// Where emails go (ARAD inbox)
const TO_EMAIL = process.env.TO_EMAIL || "kamran@khosravi.com";

// Sender email (must be verified in SendGrid)
const FROM_EMAIL = process.env.FROM_EMAIL || process.env.EMAIL_USER;

// Allowed origins for CORS (comma-separated in .env)
const allowedOrigins = (process.env.CORS_ORIGINS || "http://localhost:3000")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

/* -------------------------
   Middleware
-------------------------- */

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: (origin, cb) => {
      // allow same-origin, Postman, curl
      if (!origin) return cb(null, true);

      if (allowedOrigins.includes(origin)) return cb(null, true);

      return cb(new Error(`CORS blocked for origin: ${origin}`));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

/* -------------------------
   Email Transport (SendGrid)
-------------------------- */

if (!process.env.SENDGRID_API_KEY) {
  console.warn("⚠️ SENDGRID_API_KEY is missing. Emails will fail until you add it to server/.env");
}

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY,
  },
});

/* Helper: safe HTML */
const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const buildHtml = (title, fields = {}) => {
  const rows = Object.entries(fields)
    .map(
      ([k, v]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e9eef8;color:#1f2f4a;font-weight:700;width:220px;">
            ${escapeHtml(k)}
          </td>
          <td style="padding:10px 12px;border-bottom:1px solid #e9eef8;color:#2f4772;">
            ${escapeHtml(v ?? "N/A")}
          </td>
        </tr>
      `
    )
    .join("");

  return `
    <div style="font-family:Segoe UI, Tahoma, Arial, sans-serif;background:#f6f8fc;padding:24px;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e6edf7;border-radius:14px;overflow:hidden;">
        <div style="background:linear-gradient(90deg,#0f2b5e,#224c95);padding:16px 18px;color:#fff;">
          <h2 style="margin:0;font-size:18px;">${escapeHtml(title)}</h2>
          <p style="margin:6px 0 0;opacity:.9;font-size:13px;">ARAD Website Submission</p>
        </div>
        <div style="padding:14px 18px;">
          <table style="width:100%;border-collapse:collapse;">
            ${rows}
          </table>
          <p style="margin:14px 0 0;color:#6e83a3;font-size:12px;">
            This message was generated from the ARAD website forms.
          </p>
        </div>
      </div>
    </div>
  `;
};

async function sendToAradInbox({ subject, replyTo, fields }) {
  const mailOptions = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: replyTo || FROM_EMAIL,
    subject,
    text: Object.entries(fields)
      .map(([k, v]) => `${k}: ${v ?? "N/A"}`)
      .join("\n"),
    html: buildHtml(subject, fields),
  };

  return transporter.sendMail(mailOptions);
}

/* -------------------------
   Health / Root
-------------------------- */

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "ARAD server is running",
    allowedOrigins,
  });
});

app.get("/", (req, res) => {
  res.send("ARAD Server is up and running!");
});

/* -------------------------
   CONTACT FORM
   POST /api/contact
-------------------------- */

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await sendToAradInbox({
      subject: `ARAD Contact: ${subject}`,
      replyTo: email,
      fields: {
        "Name": name,
        "Email": email,
        "Subject": subject,
        "Message": message,
      },
    });

    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Contact email failed:", err?.message || err);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

/* -------------------------
   BUSINESS / PARTNERSHIP INQUIRY
   POST /api/partnership
   (ARAD real estate version)
-------------------------- */

app.post("/api/partnership", async (req, res) => {
  const {
    fullName,
    email,
    phone,
    organization,
    website,
    address,
    partnershipType,
    goals,
    message,
  } = req.body;

  if (!fullName || !email) {
    return res.status(400).json({ message: "Full name and email are required." });
  }

  try {
    await sendToAradInbox({
      subject: `ARAD Partnership Inquiry: ${organization || fullName}`,
      replyTo: email,
      fields: {
        "Full Name": fullName,
        "Email": email,
        "Phone": phone,
        "Organization": organization,
        "Website": website,
        "Address": address,
        "Partnership Type": partnershipType,
        "Goals": goals,
        "Message": message,
      },
    });

    return res.status(200).json({ success: true, message: "Inquiry submitted successfully!" });
  } catch (err) {
    console.error("Partnership email failed:", err?.message || err);
    return res.status(500).json({ success: false, message: "Failed to submit form." });
  }
});

/* -------------------------
   Local run (optional)
   Keep Vercel export too
-------------------------- */

// Run locally: node server/index.js
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`✅ ARAD server listening on http://localhost:${PORT}`));
}

// For Vercel / serverless usage
module.exports = app;
