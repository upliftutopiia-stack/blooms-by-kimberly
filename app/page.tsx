
"use client";

import { useState, type FormEvent } from "react";

const PHONE = "12817395847";
const PHONE_DISPLAY = "(281) 739-5847";
const INSTAGRAM = "https://www.instagram.com/bloomsbykimberlyy/";

const navigation = [
  { label: "Our Story", href: "#story" },
  { label: "The Collection", href: "#collection" },
  { label: "How to Order", href: "#process" },
  { label: "Enquire", href: "#enquire" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function RoseArt({
  variant = "hero",
}: {
  variant?: "hero" | "pink" | "wine" | "cream";
}) {
  return (
    <div
      className={`rose-art rose-${variant}`}
      role="img"
      aria-label="Original illustrated arrangement of roses"
    >
      <div className="rose-art-halo" />
      <div className="rose-art-halo halo-inner" />

      <div className="rose-stem stem-one" />
      <div className="rose-stem stem-two" />
      <div className="rose-stem stem-three" />
      <div className="rose-stem stem-four" />
      <div className="rose-stem stem-five" />

      <div className="rose-leaf leaf-one" />
      <div className="rose-leaf leaf-two" />
      <div className="rose-leaf leaf-three" />
      <div className="rose-leaf leaf-four" />

      {[
        "bloom-one",
        "bloom-two",
        "bloom-three",
        "bloom-four",
        "bloom-five",
      ].map((bloom) => (
        <div className={`rose-bloom ${bloom}`} key={bloom}>
          <span className="rose-petal petal-one" />
          <span className="rose-petal petal-two" />
          <span className="rose-petal petal-three" />
          <span className="rose-petal petal-four" />
          <span className="rose-petal petal-five" />
          <span className="rose-petal petal-six" />
          <span className="rose-center" />
        </div>
      ))}

      <div className="rose-wrap wrap-left" />
      <div className="rose-wrap wrap-right" />
      <div className="rose-ribbon" />
      <div className="rose-art-ground" />
      <span className="rose-spark spark-one">✧</span>
      <span className="rose-spark spark-two">✳</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [fulfillment, setFulfillment] = useState("");
  const [details, setDetails] = useState("");
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);

  const message = [
    "Hi Kimberly! I'd like to enquire about a bouquet.",
    "",
    `Name: ${name || "Not provided"}`,
    `Occasion: ${occasion || "Not specified"}`,
    `Preferred date: ${date || "Flexible"}`,
    `Budget: ${budget || "To discuss"}`,
    `Delivery or pickup: ${fulfillment || "To discuss"}`,
    `Bouquet details: ${details || "To discuss"}`,
    "",
    "Could you please confirm availability, pricing, and ordering details?",
  ].join("\n");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPrepared(true);
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <div className="concept-banner">
        INDEPENDENT WEBSITE CONCEPT · NOT THE OFFICIAL BUSINESS WEBSITE
      </div>

      <header className="site-header" id="top">
        <a
          className="brand"
          href="#top"
          aria-label="BloomsByKimberly home"
        >
          <span className="brand-symbol" aria-hidden="true">✿</span>
          <span className="brand-text">
            <strong>blooms</strong>
            <small>BY KIMBERLY</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#enquire">
          ORDER ENQUIRY <Arrow />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 5L19 19M19 5L5 19" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M3 6H21M3 12H21M3 18H21" />
            </svg>
          )}
        </button>
      </header>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        {navigation.map((item) => (
          <a
            href={item.href}
            key={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label} <Arrow />
          </a>
        ))}

        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          INSTAGRAM <Arrow />
        </a>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-topline">
              <span>HOUSTON, TEXAS</span>
              <span>FLORAL BOUTIQUE CONCEPT</span>
            </div>

            <div className="hero-content">
              <span className="eyebrow">
                ✳ A BEAUTIFUL WAY TO SAY IT
              </span>

              <h1>
                Flowers
                <br />
                speak <em>love.</em>
              </h1>

              <p>
                For the moments you want to remember and
                the people you never want to forget.
                Discover bouquet inspiration and connect
                with BloomsByKimberly about your special order.
              </p>

              <div className="hero-actions">
                <a className="button button-dark" href="#enquire">
                  ENQUIRE ABOUT A BOUQUET <Arrow />
                </a>

                <a className="text-link" href="#collection">
                  EXPLORE THE COLLECTION <Arrow />
                </a>
              </div>
            </div>

            <div className="hero-bottomline">
              <span>MADE FOR MEANINGFUL MOMENTS</span>
              <span>SCROLL TO EXPLORE ↓</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-top">
              <span>THE ART OF GIVING FLOWERS</span>
              <span>✳</span>
            </div>

            <RoseArt />

            <div className="visual-seal">
              <span>FLOWERS</span>
              <strong>with love</strong>
              <span>✿ ✿ ✿</span>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div>
            FLOWERS FOR EVERY FEELING <span>✿</span>
            LITTLE GESTURES, BIG LOVE <span>✿</span>
            MADE TO MAKE SOMEONE SMILE <span>✿</span>
            FLOWERS FOR EVERY FEELING <span>✿</span>
          </div>
        </div>

        <section className="story section-pad" id="story">
          <div className="section-index">
            <span>01</span>
            <span>THE STORY</span>
          </div>

          <div className="story-layout">
            <div>
              <span className="eyebrow">MORE THAN A BOUQUET</span>
              <h2>
                Some feelings
                <br />
                are better
                <br />
                <em>said in flowers.</em>
              </h2>
            </div>

            <div className="story-copy">
              <p>
                A birthday surprise. A thoughtful thank-you.
                A romantic gesture. Or flowers for no reason
                other than making someone&apos;s day.
              </p>

              <p>
                Every meaningful moment deserves a beautiful
                expression. This independent website concept
                brings floral inspiration and an easy way
                to enquire together in one place.
              </p>

              <a className="underlined-link" href="#enquire">
                START YOUR BOUQUET ENQUIRY <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="collection section-pad" id="collection">
          <div className="collection-heading">
            <div>
              <div className="section-index">
                <span>02</span>
                <span>THE COLLECTION</span>
              </div>

              <h2>
                A bouquet for
                <br />
                <em>every feeling.</em>
              </h2>
            </div>

            <p>
              Explore a few visual ideas for your bouquet.
              These are illustrative concepts, not a verified
              catalogue of Kimberly&apos;s available arrangements.
            </p>
          </div>

          <div className="collection-grid">
            <article className="collection-card">
              <div className="collection-art collection-pink">
                <RoseArt variant="pink" />
                <span>01 / INSPIRATION</span>
              </div>

              <div className="collection-details">
                <div>
                  <h3>The Sweet Gesture</h3>
                  <p>Soft colors for tender moments.</p>
                </div>
                <a
                  href="#enquire"
                  aria-label="Enquire about soft bouquet inspiration"
                >
                  <Arrow />
                </a>
              </div>
            </article>

            <article className="collection-card collection-offset">
              <div className="collection-art collection-wine">
                <RoseArt variant="wine" />
                <span>02 / INSPIRATION</span>
              </div>

              <div className="collection-details">
                <div>
                  <h3>The Romantic Edit</h3>
                  <p>For love worth celebrating.</p>
                </div>
                <a
                  href="#enquire"
                  aria-label="Enquire about romantic bouquet inspiration"
                >
                  <Arrow />
                </a>
              </div>
            </article>

            <article className="collection-card collection-wide">
              <div className="collection-art collection-cream">
                <RoseArt variant="cream" />
                <span>03 / INSPIRATION</span>
              </div>

              <div className="collection-details">
                <div>
                  <h3>The Just Because Bouquet</h3>
                  <p>A beautiful surprise for an ordinary day.</p>
                </div>
                <a
                  href="#enquire"
                  aria-label="Enquire about custom bouquet inspiration"
                >
                  <Arrow />
                </a>
              </div>
            </article>
          </div>

          <p className="collection-disclaimer">
            ORIGINAL CSS ILLUSTRATIONS FOR DEMONSTRATION ONLY.
            ACTUAL FLOWERS, ARRANGEMENTS, PRICES, AVAILABILITY
            AND DELIVERY OPTIONS MUST BE CONFIRMED WITH THE BUSINESS.
          </p>
        </section>

        <section className="quote-section">
          <span className="quote-symbol">✿</span>

          <h2>
            It&apos;s not just what
            <br />
            you give.
            <br />
            <em>It&apos;s how you make them feel.</em>
          </h2>

          <span className="quote-note">
            ORIGINAL DESIGN SENTIMENT · NOT A CUSTOMER TESTIMONIAL
          </span>
        </section>

        <section className="process section-pad" id="process">
          <div className="section-index">
            <span>03</span>
            <span>HOW TO ORDER</span>
          </div>

          <div className="process-heading">
            <h2>
              Beautiful flowers.
              <br />
              <em>Simple beginnings.</em>
            </h2>

            <p>
              Start by sharing your vision, then connect
              directly with BloomsByKimberly to discuss
              availability, pricing, and order details.
            </p>
          </div>

          <div className="process-list">
            <article className="process-row">
              <span className="process-number">01</span>
              <h3>Find your inspiration.</h3>
              <p>
                Think about the occasion, colors,
                style, and the feeling you want to create.
              </p>
              <span className="process-icon">✿</span>
            </article>

            <article className="process-row">
              <span className="process-number">02</span>
              <h3>Share the details.</h3>
              <p>
                Prepare an enquiry with your preferred
                date, budget, and bouquet ideas.
              </p>
              <span className="process-icon">✎</span>
            </article>

            <article className="process-row">
              <span className="process-number">03</span>
              <h3>Connect with Kimberly.</h3>
              <p>
                Send your enquiry by text or Instagram
                to confirm the next steps directly.
              </p>
              <span className="process-icon">↗</span>
            </article>
          </div>
        </section>

        <section className="enquiry section-pad" id="enquire">
          <div className="section-index">
            <span>04</span>
            <span>LET&apos;S TALK FLOWERS</span>
          </div>

          <div className="enquiry-layout">
            <div className="enquiry-copy">
              <span className="eyebrow">YOUR BOUQUET BEGINS HERE</span>

              <h2>
                Let&apos;s make
                <br />
                something
                <br />
                <em>beautiful.</em>
              </h2>

              <p>
                Tell Kimberly what you have in mind.
                Prepare your enquiry, then send it directly
                through text message or Instagram.
              </p>

              <div className="contact-method">
                <span>TEXT / CALL</span>
                <a href={`sms:+${PHONE}`}>
                  {PHONE_DISPLAY} <Arrow />
                </a>
              </div>

              <div className="contact-method">
                <span>INSTAGRAM</span>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @bloomsbykimberlyy <Arrow />
                </a>
              </div>

              <p className="location-note">
                Houston, Texas. Please confirm delivery
                coverage, pickup arrangements, availability,
                and final pricing directly.
              </p>
            </div>

            <div className="form-card">
              <div className="form-header">
                <span>START YOUR BOUQUET ENQUIRY</span>
                <span>✿</span>
              </div>

              <form onSubmit={handleSubmit}>
                <label>
                  YOUR NAME
                  <input
                    required
                    maxLength={100}
                    placeholder="Your full name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </label>

                <label>
                  WHAT&apos;S THE OCCASION?
                  <select
                    required
                    value={occasion}
                    onChange={(event) => setOccasion(event.target.value)}
                  >
                    <option value="">Select an occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Romantic surprise</option>
                    <option>Congratulations</option>
                    <option>Just because</option>
                    <option>Something else</option>
                  </select>
                </label>

                <div className="form-row">
                  <label>
                    PREFERRED DATE
                    <input
                      type="date"
                      value={date}
                      onChange={(event) => setDate(event.target.value)}
                    />
                  </label>

                  <label>
                    BUDGET (OPTIONAL)
                    <input
                      maxLength={60}
                      placeholder="Your budget"
                      value={budget}
                      onChange={(event) => setBudget(event.target.value)}
                    />
                  </label>
                </div>

                <label>
                  DELIVERY OR PICKUP?
                  <select
                    value={fulfillment}
                    onChange={(event) => setFulfillment(event.target.value)}
                  >
                    <option value="">Please advise</option>
                    <option>Ask about delivery</option>
                    <option>Ask about pickup</option>
                  </select>
                </label>

                <label>
                  TELL US YOUR BOUQUET VISION
                  <textarea
                    required
                    rows={5}
                    maxLength={1200}
                    placeholder="Colors, flowers, size, inspiration, and any special details..."
                    value={details}
                    onChange={(event) => setDetails(event.target.value)}
                  />
                </label>

                <button
                  className="button button-dark form-submit"
                  type="submit"
                >
                  PREPARE MY ENQUIRY <Arrow />
                </button>

                <p className="form-note">
                  This website concept does not collect,
                  store, or send your details to a server.
                  You will review and send the enquiry yourself.
                </p>
              </form>

              {prepared && (
                <div className="prepared-enquiry" role="status">
                  <h3>Your message is ready!</h3>
                  <p>
                    Copy your enquiry or open your SMS app.
                    Instagram messages must be pasted manually.
                  </p>

                  <textarea
                    value={message}
                    readOnly
                    rows={11}
                    aria-label="Prepared bouquet enquiry"
                  />

                  <div className="prepared-actions">
                    <button type="button" onClick={copyMessage}>
                      {copied ? "✓ COPIED" : "COPY MESSAGE"}
                    </button>

                    <a
                      href={`sms:+${PHONE}?body=${encodeURIComponent(message)}`}
                    >
                      OPEN TEXT APP ↗
                    </a>

                    <a
                      href={INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      INSTAGRAM ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="closing">
          <span>BLOOMSBYKIMBERLY · HOUSTON, TEXAS</span>

          <h2>
            A little love,
            <br />
            <em>beautifully wrapped.</em>
          </h2>

          <a className="button button-light" href="#enquire">
            START YOUR ENQUIRY <Arrow />
          </a>

          <span className="closing-flower" aria-hidden="true">✿</span>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <span>✿</span>
            <strong>blooms</strong>
            <small>BY KIMBERLY</small>
          </div>

          <div className="footer-links">
            <a href="#story">OUR STORY</a>
            <a href="#collection">THE COLLECTION</a>
            <a href="#process">HOW TO ORDER</a>
            <a href="#enquire">ENQUIRE</a>
          </div>

          <div className="footer-contact">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM ↗
            </a>
            <a href={`sms:+${PHONE}`}>
              TEXT {PHONE_DISPLAY} ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BLOOMSBYKIMBERLY · WEBSITE CONCEPT</span>
          <span>INDEPENDENT DEMO · NOT AFFILIATED WITH THE BUSINESS</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>

      <a className="mobile-cta" href="#enquire">
        ENQUIRE ABOUT A BOUQUET <Arrow />
      </a>
    </>
  );
}
