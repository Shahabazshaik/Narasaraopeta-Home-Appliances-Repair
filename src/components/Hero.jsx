
import './Hero.css'
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [waitingToShow, setWaitingToShow] = useState(false);
  const scrollTimeout = useRef(null);
  const showTimeout = useRef(null);

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    let observer;
    if (contactSection) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          setShowArrow(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(contactSection);
    }

    // Show/hide arrow based on scroll activity
    const handleScroll = () => {
      setIsScrolling(true);
      setShowArrow(false);
      setWaitingToShow(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (showTimeout.current) clearTimeout(showTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        showTimeout.current = setTimeout(() => {
          setShowArrow(true);
          setWaitingToShow(false);
        }, 5000);
      }, 100);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (showTimeout.current) clearTimeout(showTimeout.current);
    };
  }, []);

  return (
    <>
      <section id="home" className="hero">
        <div className="hero-content">
        <h2>Professional Repair Services</h2>

        <p>Expert solutions for washing machines, refrigerators, ACs, Any Electrical works and home systems. Keep your home running smoothly.</p>

        {/* House shifting/moving message, white color, clear for all viewers */}
        <div
          style={{
            fontWeight: 'bold',
            color: '#fff',
            margin: '18px auto 10px auto',
            fontSize: '1.1rem',
            maxWidth: 650,
            textAlign: 'center',
            letterSpacing: 0.1,
            lineHeight: 1.5,
          }}
        >
          Shifting to a new house? We make your move easy! We safely uninstall and reinstall ACs, fridges, fans, electrical wiring, and more—so your appliances and fittings are ready in your new home without hassle.
        </div>

        {/* Clickable repair images */}
        <div className="hero-stars" style={{ position: 'relative', marginBottom: 32, minHeight: 80 }}>
          {/* Washing Machine */}
          <button
            type="button"
            title="Call for Washing Machine Repair"
            style={{ position: 'absolute', top: '15%', left: '20%', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            onClick={() => window.open('tel:9381283935')}
          >
            <img
              src="https://png.pngtree.com/png-vector/20241210/ourlarge/pngtree-washing-machine--front-view--functional-and-sleek-png-image_14689313.png"
              alt="Washing Machine"
              style={{ width: 60, height: 60, borderRadius: '50%', boxShadow: '0 2px 8px #0002', background: '#fff', animation: 'none' }}
            />
          </button>
          {/* Fridge */}
          <button
            type="button"
            title="Call for Fridge Repair"
            style={{ position: 'absolute', top: '30%', left: '60%', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            onClick={() => window.open('tel:9381283935')}
          >
            <img
              src="https://cdn.imgbin.com/5/25/1/imgbin-refrigerator-window-samsung-srf719d-freezers-refrigerator-gR2bnPgwaKBRTp8r9ZQ1mNzhJ.jpg"
              alt="Fridge"
              style={{ width: 60, height: 60, borderRadius: '50%', boxShadow: '0 2px 8px #0002', background: '#fff', animation: 'none' }}
            />
          </button>
          {/* AC */}
          <button
            type="button"
            title="Call for AC Repair"
            style={{ position: 'absolute', top: '50%', left: '40%', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            onClick={() => window.open('tel:9381283935')}
          >
            <img
              src="https://5.imimg.com/data5/RX/HN/MY-63787322/1-5-ton-lg-split-air-conditioner-500x500.jpg"
              alt="AC"
              style={{ width: 60, height: 60, borderRadius: '50%', boxShadow: '0 2px 8px #0002', background: '#fff', animation: 'none' }}
            />
          </button>
          {/* TV */}
          <button
            type="button"
            title="Call for TV Repair"
            style={{ position: 'absolute', top: '70%', left: '80%', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            onClick={() => window.open('tel:9381283935')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/7305/7305355.png"
              alt="TV"
              style={{ width: 60, height: 60, borderRadius: '50%', boxShadow: '0 2px 8px #0002', background: '#fff', animation: 'none' }}
            />
          </button>
          {/* Geyser */}
          <button
            type="button"
            title="Call for Geyser Repair"
            style={{ position: 'absolute', top: '80%', left: '10%', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            onClick={() => window.open('tel:9381283935')}
          >
            <img
              src="https://thumbs.dreamstime.com/b/water-geyser-illustration-vector-white-background-261374114.jpg"
              alt="Geyser"
              style={{ width: 60, height: 60, borderRadius: '50%', boxShadow: '0 2px 8px #0002', background: '#fff', animation: 'none' }}
            />
          </button>
        </div>

        {/* Down arrow for mobile users, fixed to the right side until Contact Us, only when not scrolling */}
        {showArrow && !isScrolling && !waitingToShow && (
          <div className="side-down-arrow">
            <span className="down-arrow-icon">&#8595;</span>
          </div>
        )}

        {/* Move quick response badge even further down for more separation */}
        <div style={{ marginTop: 64, marginBottom: 8 }}>
          <div className="hero-cta-column">
            <span className="cta-badge">quick responce is our speacility and reasonable price</span>
          </div>
        </div>
        <button
          className="cta-button"
          type="button"
          style={{ marginTop: 64 }}
          onClick={() => window.open('https://wa.me/919381283935?text=I%20want%20to%20book%20a%20service', '_blank')}
        >
          Book a Service
        </button>
        </div>
      </section>
      {/* Floating Call Button for Mobile */}
      <a
        href="tel:9381283935"
        className="floating-call-btn"
        title="Call Now"
      >
        <span role="img" aria-label="Call" className="floating-call-icon">📞</span>
        <span className="floating-call-text">Call Now</span>
      </a>
      <style>{`
        .floating-call-btn {
          position: fixed;
          right: 16px;
          bottom: 24px;
          z-index: 9999;
          background: #25d366;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px #0003;
          animation: blink-call 1s infinite;
          color: #fff;
          border: none;
          cursor: pointer;
          font-size: 32px;
          text-decoration: none;
          transition: background 0.2s;
          overflow: hidden;
        }
        .floating-call-icon {
          font-size: 32px;
        }
        .floating-call-text {
          display: none;
          margin-left: 0;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.2px;
        }
        @media (max-width: 480px) {
          .floating-call-btn {
            width: 120px;
            border-radius: 30px;
            justify-content: flex-start;
            padding-left: 16px;
          }
          .floating-call-text {
            display: inline;
            margin-left: 10px;
          }
        }
        @media (min-width: 768px) {
          .floating-call-btn { display: none !important; }
        }
        @keyframes blink-call {
          0%, 100% { box-shadow: 0 0 0 0 #25d36688; }
          50% { box-shadow: 0 0 0 12px #25d36633; }
        }
      `}</style>
    </>
  )
}
