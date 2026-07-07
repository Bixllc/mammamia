export default function Footer() {
  return (
    <footer className="bg-forest-dark">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <img
            src="/img/wordmark-cream.png"
            alt="Mamma Mia"
            className="h-10 w-auto sm:h-12"
          />

          <div>
            <h2 className="font-display text-lg font-bold text-cream">Get in touch</h2>
            <p className="mt-3">
              <a
                href="mailto:mammamiaicytreats@gmail.com"
                className="text-cream/90 underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
              >
                mammamiaicytreats@gmail.com
              </a>
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-cream/10 pt-6 text-xs text-cream/60">
          © 2026 Mamma Mia Artisan Pops. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
