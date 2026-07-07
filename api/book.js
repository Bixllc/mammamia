import { Resend } from "resend";

const TO_EMAIL = "mammamiaicytreats@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, eventDate, eventType, notes } = req.body ?? {};

  if (!name || !phone || !eventDate || !eventType) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: process.env.BOOKING_FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New Mamma Mia booking request — ${eventType}`,
      html: `
        <h2>New booking request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Event date:</strong> ${escapeHtml(eventDate)}</p>
        <p><strong>Event type:</strong> ${escapeHtml(eventType)}</p>
        <p><strong>Notes:</strong> ${escapeHtml(notes || "—")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Booking handler error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}
