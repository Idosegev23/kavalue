import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Services from './components/Services'
import DiagnosisPackage from './components/DiagnosisPackage'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import { FaArrowUp, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const menuItems = [
    { href: "#about", label: "אודות" },
    { href: "#team", label: "צוות" },
    { href: "#services", label: "שירותים" },
    { href: "#diagnosis", label: "חבילת אבחון" },
    { href: "#benefits", label: "יתרונות" },
    { href: "#contact", label: "צור קשר" }
  ]

  return (
    <div className="app bg-background min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <img src="https://res.cloudinary.com/dsoh3yteb/image/upload/v1742806446/Logo2025_xbrzm3.png" 
               alt="KA Logo" 
               className="h-24" />
          
          {/* תפריט רגיל למסכים גדולים */}
          <nav className="hidden md:flex space-x-6 space-x-reverse">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-darkText hover:text-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* כפתור תפריט מובייל */}
          <button 
            className="md:hidden text-darkText text-2xl"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* תפריט מובייל */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md shadow-lg"
            >
              <div className="flex flex-col items-center py-4">
                {menuItems.map((item) => (
                  <a 
                    key={item.href}
                    href={item.href} 
                    className="w-full text-center py-3 text-darkText hover:bg-primary/10 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <Hero />
        <section id="about"><About /></section>
        <section id="team"><Team /></section>
        <section id="services"><Services /></section>
        <section id="diagnosis"><DiagnosisPackage /></section>
        <section id="benefits"><Benefits /></section>
      </main>

      <section id="contact">
        <Footer />
      </section>

      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 p-3 rounded-full bg-primary hover:bg-secondary text-darkText shadow-md transition-all duration-300 z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}

export default App
