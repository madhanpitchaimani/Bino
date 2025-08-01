import React from "react";
import "./Bino.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Bino() {
  return (
    <div className="bino-page">

  {/* Hero Section */}
  <section className="hero-section" id="home">
    <img src="/bino-logo.jpg" alt="Bino Logo" className="logo" />
    <h1>Your Smarter WhatsApp Search Assistant</h1>
    <p>
     Bino helps you instantly search messages, services, and information on WhatsApp.
From education to restaurants, healthcare to business—just ask, and Bino finds it!
    </p>
    <a href="#try" className="hero-btn">🚀 Explore NOW</a>
  </section>

  {/* Carousel Section */}
  <section className="carousel-section" id="carousel">
    <h2>📸 What Can Bino Do?</h2>
    <div className="carousel-card">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={800}
        stopOnHover={true}
      >
        <div><img src="chat demo1.jpg" alt="Search PDFs" /></div>
        <div><img src="chat demo2.jpg" alt="Course Recommendations" /></div>
        <div><img src="chat demo3.jpg" alt="Smart Media Finder" /></div>
      </Carousel>
    </div>
  </section>

  {/* About Section */}
  <section className="about-section" id="about">
    <h2>🤖 Meet Bino</h2>
    <div className="about-content">
      <img src="/bino-logo.jpg" alt="Bino Icon" />
     <p>
  Bino helps you instantly search messages on WhatsApp and explore a wide range of services—like educational opportunities, healthcare providers, transportation options, nearby restaurants, local businesses, and professional services—without endless scrolling. Just ask, and Bino finds it!
</p>

    </div>
  </section>

  {/* Awareness Section */}
  <section className="awareness-section" id="awareness">
    <h2>❓ Why Bino?</h2>
    <ul>
      <li>🔍 <strong>Instant Search:</strong> Find documents, images, or messages shared in any chat</li>
      <li>📚 <strong>Learning Aid:</strong> To Explore Educational opportunities</li>
      <li>💬 <strong>Natural Conversations:</strong> Just message like you would a friend — no commands needed</li>
      <li>📲 <strong>No App Install:</strong> Just chat with Bino on WhatsApp — nothing to download</li>
    </ul>
  </section>

  {/* Try Section */}
  <section className="try-section" id="try">
    <h2>🎉 Start Using Bino Today</h2>
    <p>Let Bino save your time and effort. Search smarter on WhatsApp.</p>
    <a
      href="https://bino.bot"
      className="cta-btn"
      target="_blank"
      rel="noopener noreferrer"
      style={{fontStyle:"Poppins"}}
    >
      👉 Try Bino 
    </a>
  </section>

  {/* Footer */}
  <footer>
    <p>© 2025  Boni Tech Pvt. Ltd.</p>
  </footer>

</div>

  );
}

export default Bino;
