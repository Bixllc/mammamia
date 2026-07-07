export default function FlavorSheet() {
  return (
    <section id="flavors" className="bg-page py-16 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="rounded-card-lg border-2 border-cream-dark bg-cream p-6 shadow-soft sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-bold text-forest sm:text-5xl">
                20+ Flavors
              </h2>
              <p className="mt-4 max-w-md text-base text-muted sm:text-lg">
                All flavors currently available.
              </p>
              <a
                href="/img/flyer.webp"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream shadow-soft transition-colors hover:bg-green-mid sm:text-base"
              >
                View full flavor sheet
                <span aria-hidden="true">↗</span>
              </a>
              <img
                src="/img/cart-d.webp"
                alt="The Mamma Mia popsicle cart"
                className="mt-8 hidden h-56 w-full max-w-md rounded-card object-cover shadow-soft lg:block"
                loading="lazy"
              />
            </div>

            <a
              href="/img/flyer.webp"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-card shadow-lift transition-transform hover:scale-[1.02] focus-visible:scale-[1.02]"
            >
              <img
                src="/img/flyer.webp"
                alt="Mamma Mia flavor flyer listing all available popsicle flavors — click to view full size"
                className="w-full object-cover"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
