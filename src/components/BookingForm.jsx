import { useState } from "react";
import { eventTypes } from "../data/flavors";

const initialForm = {
  name: "",
  phone: "",
  eventDate: "",
  eventType: eventTypes[0],
  notes: "",
};

// FormSubmit.co forwards this POST straight to the cart's inbox — no backend
// or account needed. IMPORTANT: the first submission triggers a one-time
// confirmation email to mammamiaicytreats@gmail.com that must be clicked to
// activate delivery; until then submissions are silently dropped.
const BOOKING_EMAIL = "mammamiaicytreats@gmail.com";
const BOOKING_ENDPOINT = `https://formsubmit.co/ajax/${BOOKING_EMAIL}`;

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | sent
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus("submitting");

    try {
      const res = await fetch(BOOKING_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Mamma Mia booking request — ${form.eventType}`,
          Name: form.name,
          Phone: form.phone,
          "Event date": form.eventDate,
          "Event type": form.eventType,
          Notes: form.notes,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch (err) {
      setError(
        `Something went wrong sending your request. Please try again or email us directly at ${BOOKING_EMAIL}.`
      );
      setStatus("idle");
    }
  }

  function handleReset() {
    setForm(initialForm);
    setStatus("idle");
    setError("");
  }

  if (status === "sent") {
    return (
      <div
        className="rounded-card-lg bg-cream p-6 text-center shadow-lift sm:p-8"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-4xl font-semibold text-forest">Grazie! 🍦</p>
        <p className="mt-3 text-ink">
          Thanks, {form.name.split(" ")[0] || "friend"}! We've got your request and will
          reach out shortly to confirm details for your event.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-6 inline-flex items-center rounded-full border-2 border-forest px-6 py-2.5 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-cream"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card-lg bg-cream p-6 shadow-lift sm:p-8"
      noValidate
    >
      <h2 className="font-display text-2xl font-semibold text-forest sm:text-3xl">
        Request your booking
      </h2>
      <p className="mt-1 text-sm text-muted">
        Tell us a bit about your event and we'll follow up with availability.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
            className="mt-1.5 block w-full rounded-lg border border-cream-dark bg-white px-3.5 py-2.5 text-ink shadow-sm focus:border-green-mid focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="mt-1.5 block w-full rounded-lg border border-cream-dark bg-white px-3.5 py-2.5 text-ink shadow-sm focus:border-green-mid focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-ink">
            Event date
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            required
            value={form.eventDate}
            onChange={handleChange}
            className="mt-1.5 block w-full rounded-lg border border-cream-dark bg-white px-3.5 py-2.5 text-ink shadow-sm focus:border-green-mid focus:outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="eventType" className="block text-sm font-medium text-ink">
            Event type
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            value={form.eventType}
            onChange={handleChange}
            className="mt-1.5 block w-full rounded-lg border border-cream-dark bg-white px-3.5 py-2.5 text-ink shadow-sm focus:border-green-mid focus:outline-none"
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="notes" className="block text-sm font-medium text-ink">
            Notes <span className="font-normal text-muted">(guest count, location, etc.)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={form.notes}
            onChange={handleChange}
            className="mt-1.5 block w-full resize-y rounded-lg border border-cream-dark bg-white px-3.5 py-2.5 text-ink shadow-sm focus:border-green-mid focus:outline-none"
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm font-medium text-tomato-hover">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-tomato px-6 py-3 text-base font-semibold text-cream shadow-soft transition-colors hover:bg-tomato-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request booking"}
      </button>
    </form>
  );
}
