export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80 shadow-soft">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="shrink-0">
          <img
            src="/img/wordmark-green.png"
            alt="Mamma Mia"
            className="h-9 w-auto sm:h-11"
          />
        </a>
        <a
          href="#book"
          className="inline-flex items-center rounded-full bg-tomato px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition-colors hover:bg-tomato-hover sm:px-6 sm:py-3 sm:text-base"
        >
          Book the cart
        </a>
      </div>
    </header>
  );
}
