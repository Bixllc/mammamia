import Marquee from "./Marquee";

export default function Gallery() {
  return (
    <section aria-labelledby="gallery-heading" className="bg-page py-16 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 id="gallery-heading" className="sr-only">
          Gallery
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <div className="rounded-card-lg bg-forest px-6 py-8 shadow-lift sm:px-8 sm:py-10">
              <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
                Twenty flavors &amp; counting
              </h3>
              <p className="mt-2 text-sm text-cream/80 sm:text-base">
                Real fruit, real cream, made fresh in small batches.
              </p>
              <div className="mt-6">
                <Marquee />
              </div>
            </div>
            <img
              src="/img/gallery-1.webp"
              alt="The Mamma Mia popsicle cart parked beside palm trees, side view"
              className="h-auto w-full rounded-card-lg object-contain shadow-lift"
              loading="lazy"
            />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <img
              src="/img/gallery-2.webp"
              alt="The Mamma Mia popsicle cart in a sunny parking lot, front view"
              className="h-auto w-full rounded-card-lg object-contain shadow-lift"
              loading="lazy"
            />
            <img
              src="/img/gallery-3.webp"
              alt="The Mamma Mia popsicle cart set up under trees at an event"
              className="h-auto w-full rounded-card-lg object-contain shadow-lift"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
