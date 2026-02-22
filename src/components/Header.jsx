import { useState, useEffect, useRef } from 'react'
import './Header.css'

export default function Header() {
  const [showServices, setShowServices] = useState(false)
  const [visible, setVisible] = useState(true)
  const prevScrollPos = useRef(typeof window !== 'undefined' ? window.pageYOffset : 0)
  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const scrolledDown = currentScrollPos > prevScrollPos.current && currentScrollPos > 80
      setVisible(!scrolledDown)
      prevScrollPos.current = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Sticky phone number for mobile */}
      <a
        href="tel:+919876543210"
        className="sticky-call-mobile"
        aria-label="Call us now"
      >
        📞 +91 98765 43210
      </a>
      <header className={`header ${visible ? 'header--visible' : 'header--hidden'}`}>
        <div className="container">
          <div className="logo">
            <h1> Narasaraopet Home Appliances Repair</h1>
            <p>Professional Repair Services</p>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    </>
  )
}
