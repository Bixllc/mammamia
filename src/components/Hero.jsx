import BookingForm from "./BookingForm";

const stats = [
  { value: "20+", label: "artisan flavors" },
  { value: "100%", label: "real fruit, no junk" },
  { value: "V + GF", label: "options for all" },
];

export default function Hero() {
  return (
    <section id="book" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-[3px] scale-105"
        style={{ backgroundImage: "url(/img/cart-a.webp)" }}
        role="img"
        aria-label="The Mamma Mia artisan popsicle cart"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(13,61,31,0.7) 0%, rgba(13,61,31,0.5) 40%, rgba(13,61,31,0.12) 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-content grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div className="text-cream">
          <h1 className="font-display text-5xl font-light leading-[1.05] sm:text-6xl lg:text-7xl">
            Book the
            <br />
            <span className="font-display font-bold text-gold">Mamma Mia</span>
            <br />
            cart for your event
          </h1>
          <p className="mt-6 max-w-md text-lg text-cream/90 sm:text-xl">
            Delicious artisan popsicles from our Mamma Mia cart — available for any
            event.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-card border border-cream/20 bg-cream/10 px-4 py-4 backdrop-blur-sm"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-gold sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-cream/90 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
