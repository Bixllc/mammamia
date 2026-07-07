import { allFlavors } from "../data/flavors";

export default function Marquee() {
  // Duplicate the flavor list so the strip can loop seamlessly at -50%.
  const track = [...allFlavors, ...allFlavors];

  return (
    <div
      className="group overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <ul
        className="flex w-max items-end gap-4 py-2 animate-marquee group-hover:[animation-play-state:paused]"
        aria-hidden="false"
      >
        {track.map((flavor, i) => (
          <li
            key={`${flavor.slug}-${i}`}
            className="flex w-20 shrink-0 flex-col items-center gap-2"
            aria-hidden={i >= allFlavors.length ? "true" : undefined}
          >
            <img
              src={`/img/pops/${flavor.slug}-t.png`}
              alt={i < allFlavors.length ? `${flavor.name} popsicle` : ""}
              className="h-28 w-auto drop-shadow-lg sm:h-32"
              loading="lazy"
            />
            <span className="text-center text-[11px] font-medium leading-tight text-cream/90">
              {flavor.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
