import { chromium } from "playwright";

const URL = process.env.SITE_URL || "http://localhost:5174";
const outDir = "/tmp/mammamia-screens";

const browser = await chromium.launch();

async function shot(viewport, name) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForSelector("text=Grazie", { state: "hidden" }).catch(() => {});
  await page.screenshot({ path: `${outDir}/${name}.png`, fullPage: true });

  console.log(`--- ${name} (${viewport.width}x${viewport.height}) ---`);
  console.log("console errors:", errors.length ? errors : "none");

  return page;
}

const desktopPage = await shot({ width: 1440, height: 900 }, "desktop");

// Exercise the booking form on desktop, then screenshot the thank-you state
await desktopPage.fill("#name", "Maria Rossi");
await desktopPage.fill("#phone", "3055551234");
await desktopPage.fill("#eventDate", "2026-08-15");
await desktopPage.selectOption("#eventType", "Wedding");
await desktopPage.fill("#notes", "Around 80 guests, outdoor reception.");
await desktopPage.click('button:has-text("Request booking")');
await desktopPage.waitForSelector("text=Grazie");
await desktopPage.screenshot({ path: `${outDir}/desktop-thankyou.png`, fullPage: false });
console.log("Booking form thank-you state rendered OK");

// Check the flavor flyer link opens correctly (target=_blank -> new page)
const [flyerPage] = await Promise.all([
  desktopPage.context().waitForEvent("page"),
  desktopPage.click('a[href="/img/flyer.webp"] >> nth=0'),
]);
await flyerPage.waitForLoadState();
console.log("Flyer link opened:", flyerPage.url());

await shot({ width: 390, height: 844 }, "mobile");

await browser.close();
console.log("DONE");
