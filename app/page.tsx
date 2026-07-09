export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "80px 20px 60px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
          ADB Unlock for <span style={{ color: "#f97316" }}>BYD & Denza</span> Vehicles
        </h1>
        <p style={{ fontSize: "1.15rem", color: "#aaa", maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.6 }}>
          Remote QR code authentication for DiLink 5.0+ systems. Unlock ADB in under 5 minutes — no dealer visit, no firmware risk.
        </p>
        <a href="https://shop.baolab.au/products/adb-unlocking-service" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-block", background: "#f97316", color: "#fff", padding: "14px 36px", borderRadius: 8, fontWeight: 600, fontSize: "1.05rem", textDecoration: "none", transition: "background 0.2s" }}>
          Unlock Your BYD Now
        </a>
      </section>

      {/* How It Works */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 24, textAlign: "center" }}>How ADB Unlock Works</h2>
        <ol style={{ lineHeight: 2, fontSize: "1.05rem", color: "#ccc", paddingLeft: 20 }}>
          <li>Connect your car to <strong style={{ color: "#fff" }}>WiFi or phone hotspot</strong></li>
          <li>On the infotainment screen, open the phone menu and dial <code style={{ background: "#1a1a1a", padding: "2px 8px", borderRadius: 4, color: "#f97316" }}>*#91532547#*</code></li>
          <li>The hidden engineering menu will appear with a <strong style={{ color: "#fff" }}>QR code</strong></li>
          <li>Select <strong style={{ color: "#fff" }}>Scan with WeCom</strong></li>
          <li>Take a clear photo of the QR code and send it to us</li>
          <li>We authenticate remotely — your ADB is <strong style={{ color: "#f97316" }}>unlocked in under 5 minutes</strong></li>
        </ol>
      </section>

      {/* Compatible Vehicles */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 24, textAlign: "center" }}>Compatible Vehicles</h2>
        <p style={{ color: "#aaa", textAlign: "center", marginBottom: 24 }}>
          Works on all BYD and Denza models with DiLink 5.0+ systems. Any region, any country.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {[
            "BYD Shark 6", "BYD Sealion 8", "BYD Seal 06", "BYD Seal Touring",
            "BYD Dolphin Surf", "BYD Dolphin Mini", "BYD Atto 2", "BYD Atto 3",
            "Denza B5", "Denza B8", "Denza D9", "Denza Z9 GT", "Denza N7",
            "BYD Seal 05", "BYD M6", "BYD Seal 5 DM-i", "All DiLink 5.0+"
          ].map((car) => (
            <div key={car} style={{ background: "#111", border: "1px solid #222", borderRadius: 8, padding: "12px 16px", fontSize: "0.95rem", color: "#ccc" }}>
              {car}
            </div>
          ))}
        </div>
      </section>

      {/* What You Can Do */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 24, textAlign: "center" }}>What You Can Do After Unlocking</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {[
            { name: "DiPlus", desc: "Quad-view dashcam, sentry mode, loop recording" },
            { name: "Electro", desc: "Alternative dashcam app" },
            { name: "OverDrive", desc: "Open source dashcam for older DiLink" },
            { name: "Any APK", desc: "Sideload any Android app to your head unit" },
          ].map((app) => (
            <div key={app.name} style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: 20 }}>
              <h3 style={{ color: "#f97316", fontSize: "1.1rem", marginBottom: 8 }}>{app.name}</h3>
              <p style={{ color: "#888", fontSize: "0.9rem", margin: 0, lineHeight: 1.5 }}>{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 24, textAlign: "center" }}>Frequently Asked Questions</h2>
        <div style={{ display: "grid", gap: 16 }}>
          {[
            { q: "Will this void my warranty?", a: "Dealers cannot detect ADB unlock during normal service. If concerned, uninstall third-party apps before visiting the dealer." },
            { q: "Does ADB stay on after a software update?", a: "Yes. ADB remains enabled through OTA updates. Only a factory reset will revoke it." },
            { q: "Is this reversible?", a: "Yes. A factory reset returns the system to stock." },
            { q: "Do I need to be near the car?", a: "Yes. You need access to the infotainment screen to generate the QR code, and the car must have an internet connection." },
            { q: "How long does it take?", a: "The entire process takes under 5 minutes. We authenticate the QR code remotely in real-time." },
          ].map((faq) => (
            <div key={faq.q} style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: 20 }}>
              <h3 style={{ color: "#fff", fontSize: "1rem", marginBottom: 8 }}>{faq.q}</h3>
              <p style={{ color: "#888", fontSize: "0.9rem", margin: 0, lineHeight: 1.5 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 16 }}>Ready to Unlock Your BYD?</h2>
        <p style={{ color: "#aaa", marginBottom: 32 }}>
          Trusted by customers in Australia, UK, Croatia, Turkey, Ukraine, Qatar, Egypt, Austria, Brazil, Thailand, and more.
        </p>
        <a href="https://shop.baolab.au/products/adb-unlocking-service" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-block", background: "#f97316", color: "#fff", padding: "14px 36px", borderRadius: 8, fontWeight: 600, fontSize: "1.05rem", textDecoration: "none" }}>
          Unlock Your BYD Now
        </a>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "24px 20px", textAlign: "center", color: "#555", fontSize: "0.8rem" }}>
        <p>© 2026 EV Lab. A BaoLab service. All rights reserved.</p>
        <p style={{ marginTop: 8 }}>
          <a href="mailto:hello@baolab.au" style={{ color: "#666", textDecoration: "none" }}>hello@baolab.au</a>
          {" · "}
          <a href="https://baolab.au" style={{ color: "#666", textDecoration: "none" }}>baolab.au</a>
        </p>
      </footer>
    </main>
  );
}
