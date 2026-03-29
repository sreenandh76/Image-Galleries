import React from "react";
import "./style.css";
import Gallery from "./components/Gallery";

function App(){

  const [menuOpen, setMenuOpen] = React.useState(false)
  const [popup, setPopup] = React.useState(null)

  const images = [
  {src: require("./images/p2.webp"), title: "Silent Samurai"},
  {src: require("./images/p3.jpeg"), title: "Tokyo Nights"},
  {src: require("./images/p4.webp"), title: "Moonlight Warrior"},
  {src: require("./images/p5.jpg"), title: "Lost in World"},
  {src: require("./images/pic1.webp"), title: "Blade of Destiny"},
  {src: require("./images/p7.webp"), title: "Dragon Awakening"},
  {src: require("./images/p8.webp"), title: "Dark Hero Rising"},
  {src: require("./images/p9.jpg"), title: "Cyber Ninja"},
  {src: require("./images/p10.jpg"), title: "Crimson Warrior"},
{src: require("./images/p11.jpg"), title: "Shadow Shinobi"},
{src: require("./images/p12.webp"), title: "Skybreaker"},
{src: require("./images/p6.avif"), title: "Final Battle Mode"}
]

  function scrollTo(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"})
    setMenuOpen(false)
  }

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Image Gallery</h2>

        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li onClick={()=>scrollTo("gallery")}>Gallery</li>
          <li onClick={()=>scrollTo("about")}>Our Story</li>
          <li onClick={()=>scrollTo("contact")}>Connect</li>
        </ul>
      </nav>

      {/* GALLERY */}
      <section id="gallery" className="section">
        <h1>Explore Gallery</h1>

        <Gallery images={images} setPopup={setPopup}/>
      </section>

      {/* ABOUT */}
   <section id="about" className="section">
  <div className="info-box">
    <h2>Our Story</h2>
    <p>
      This platform was created to deliver a smooth and visually engaging image browsing experience.  
      It focuses on clean design, fast performance, and responsive layouts across all devices.  
      Every image is presented in a structured grid to maintain clarity and balance.  
      The goal is to make exploring visuals simple, modern, and distraction-free.  
      Built with attention to detail, it continues to evolve with better design and usability.
    </p>
  </div>
</section>

      {/* CONTACT */}
<section id="contact" className="section">
  <div className="info-box">
    <h2>Connect</h2>

    <p>
      Get updates when new images are added or your requested images are ready.</p>
      <p>Stay connected and never miss new content.
    </p>

    <div className="subscribe-box">
      <input 
        type="email" 
        placeholder="Enter your email..." 
      />

      <button onClick={() => alert("Subscribed successfully!")}>
        Subscribe
      </button>
    </div>
  </div>
</section>
      {/* POPUP */}
      {popup && (
        <div className="popup" onClick={()=>setPopup(null)}>
          <img src={popup} alt="pop up image" />
        </div>
      )}
<footer className="footer">
  <div className="footer-container">

    {/* Left - Brand */}
    <div className="footer-section">
      <h2>Image Gallery</h2>
      <p>Explore stunning anime visuals and immerse yourself in creativity.</p>
    </div>

    {/* Quick Links */}
    <div className="footer-section">
      <h3>Quick Links</h3>
<p onClick={() => scrollTo("gallery")}>Gallery</p>
<p onClick={() => scrollTo("about")}>Our Story</p>
<p onClick={() => scrollTo("contact")}>Connect</p>
    </div>

    {/* Contact */}
    <div className="footer-section">
<h3>Contact</h3>
      <p>+91 98765 43210</p>
  <p>Chennai, India</p>
    </div>

    {/* Social */}
    <div className="footer-section">
      <h3>Follow Us</h3>
      <div className="social-icons">
      <i className="fab fa-instagram"></i>
  <i className="fab fa-twitter"></i>
      <i className="fab fa-facebook"></i>
        <i className="fab fa-whatsapp"></i>
      </div>
    </div>

  </div>

  <p className="footer-bottom">
    © 2026 Image Gallery. All rights reserved.
  </p>
</footer>
    </div>
  );
}

export default App;