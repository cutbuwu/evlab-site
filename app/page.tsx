import Link from "next/link";

export default function Home() {
  return (
    <main className="evlab-main">
      {/* Hero */}
      <section className="evlab-hero">
        <h1>
          ADB Enablement for <span className="accent">BYD & Denza</span> Vehicles
        </h1>
        <p className="hero-sub">
          Remote assistance for BYD/Denza owners who wish to enable Android Debug Bridge (ADB) on their infotainment system. Infotainment configuration only — does not modify vehicle firmware, safety systems, or vehicle-control hardware.
        </p>
        <a href="https://shop.baolab.au/products/adb-unlocking-service" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Unlock Your BYD Now
        </a>
      </section>

      {/* Non-affiliation disclaimer */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "20px 20px 0" }}>
        <div style={{ background: "rgba(255,107,107,0.06)", border: "1px solid rgba(255,107,107,0.15)", borderRadius: 8, padding: "12px 16px" }}>
          <p style={{ color: "#888", fontSize: "0.8rem", margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: "#ff6b6b" }}>Important notice:</strong> This is an independent aftermarket infotainment configuration service. It is not affiliated with, endorsed by, authorised by, or approved by BYD, DENZA, BYD Australia, any BYD/DENZA dealer, or any authorised service centre.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="evlab-section">
        <h2>How It Works</h2>
        <ol className="steps">
          <li>Connect your car to <strong>WiFi or phone hotspot</strong></li>
          <li>On the infotainment screen, open the phone menu and dial <code>*#91532547#*</code></li>
          <li>The hidden engineering menu will appear with a <strong>QR code</strong></li>
          <li>Select <strong>Scan with WeCom</strong></li>
          <li>Take a clear photo of the QR code and send it to us</li>
          <li>We enable your ADB remotely — <span className="accent">done in under 5 minutes</span></li>
        </ol>
      </section>

      {/* Compatible Vehicles */}
      <section className="evlab-section">
        <h2>Compatible Vehicles</h2>
        <p className="section-sub">Works on all BYD and Denza models with DiLink 5.0+ systems. Any region, any country.</p>
        <div className="car-grid">
          {[
            "BYD Shark 6", "BYD Sealion 8", "BYD Seal 06", "BYD Seal Touring",
            "BYD Dolphin Surf", "BYD Dolphin Mini", "BYD Atto 2", "BYD Atto 3",
            "Denza B5", "Denza B8", "Denza D9", "Denza Z9 GT", "Denza N7",
            "BYD Seal 05", "BYD M6", "BYD Seal 5 DM-i", "All DiLink 5.0+"
          ].map((car) => (
            <div key={car} className="car-card">{car}</div>
          ))}
        </div>
      </section>

      {/* What You Can Do */}
      <section className="evlab-section">
        <h2>What You Can Do After Enabling ADB</h2>
        <div className="app-grid">
          {[
            { name: "DiPlus", desc: "Quad-view dashcam, sentry mode, loop recording" },
            { name: "Electro", desc: "Alternative dashcam app" },
            { name: "OverDrive", desc: "Open source dashcam for older DiLink" },
            { name: "Any APK", desc: "Sideload any Android app to your head unit" },
          ].map((app) => (
            <div key={app.name} className="app-card">
              <h3>{app.name}</h3>
              <p>{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="evlab-section">
        <h2>Pricing</h2>
        <div className="pricing-grid">
          <div className="price-card">
            <h3>Standard</h3>
            <div className="price">$149 <span>AUD</span></div>
            <ul>
              <li>Remote QR unlock</li>
              <li>Done in 5 minutes</li>
              <li>Email support</li>
            </ul>
            <a href="https://shop.baolab.au/products/adb-unlocking-service" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Get Started
            </a>
          </div>
          <div className="price-card featured">
            <div className="badge">Popular</div>
            <h3>Priority Scheduling</h3>
            <div className="price">$169 <span>AUD</span></div>
            <ul>
              <li>Everything in Standard</li>
              <li>Priority scheduling</li>
              <li>Usually same-day</li>
            </ul>
            <a href="https://shop.baolab.au/products/adb-unlocking-service" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get Started
            </a>
          </div>
          <div className="price-card">
            <h3>Advanced Technical Support</h3>
            <div className="price">$300 <span>AUD</span></div>
            <ul>
              <li>Everything in Priority</li>
              <li>1-on-1 technical assistance</li>
              <li>App installation guidance</li>
              <li>Ongoing support</li>
            </ul>
            <a href="https://shop.baolab.au/products/adb-unlocking-service" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="evlab-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {[
            { q: "Will this void my warranty?", a: "BYD or a dealer may treat ADB enablement as a modification. We cannot guarantee warranty safety. If concerned, uninstall third-party apps before visiting the dealer." },
            { q: "Does ADB stay on after a software update?", a: "ADB usually remains enabled through OTA updates, but we cannot guarantee this. Only a factory reset will revoke it." },
            { q: "Is this reversible?", a: "A factory reset returns the system to stock, but may not reverse all effects of installed apps." },
            { q: "Do I need to be near the car?", a: "Yes. You need access to the infotainment screen to generate the QR code, and the car must have an internet connection." },
            { q: "How long does it take?", a: "The entire process takes under 5 minutes. We process the QR code remotely in real-time." },
          ].map((faq) => (
            <div key={faq.q} className="faq-card">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="evlab-section evlab-cta">
        <h2>Ready to Enable ADB on Your BYD?</h2>
        <p className="section-sub">Trusted by customers in Australia, UK, Croatia, Turkey, Qatar, Egypt, Austria, Brazil, Thailand, and more.</p>
        <a href="https://shop.baolab.au/products/adb-unlocking-service" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Enable ADB on Your BYD
        </a>
      </section>

      {/* Footer */}
      <footer className="evlab-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>EV Lab</h3>
            <p>Remote ADB unlock for BYD & Denza vehicles worldwide.</p>
          </div>
          <div className="footer-links">
            <a href="https://baolab.au" target="_blank" rel="noopener noreferrer">BaoLab</a>
            <a href="mailto:hello@baolab.au">Contact</a>
            <a href="https://shop.baolab.au/products/adb-unlocking-service" target="_blank" rel="noopener noreferrer">Unlock Now</a>
          </div>
          <div className="footer-bottom">
            <p>© 2026 EV Lab. A BaoLab service.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
