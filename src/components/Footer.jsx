import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-tertiary/30 py-12">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-8 md:mb-0">
            <img 
              src="https://res.cloudinary.com/dsoh3yteb/image/upload/v1742806446/Logo2025_xbrzm3.png" 
              alt="KA Logo" 
              className="h-52 mb-1"
            />
            <h3 className="text-xl font-bold text-secondary mb-2">
              KA - ניהול, חדשנות ובינה מלאכותית
            </h3>
            <p className="text-sm text-gray-700">
              הדרך המתקדמת להטמיע בינה מלאכותית בארגון שלך
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <FaPhone className="text-secondary ml-2" />
              <a href="tel:0523030009" className="text-sm hover:text-secondary transition-colors">052-303-0009</a>
            </div>
            
            <div className="flex items-center">
              <FaEnvelope className="text-secondary ml-2" />
              <a href="mailto:kochavith.arnon@gmail.com" className="text-sm hover:text-secondary transition-colors">kochavith.arnon@gmail.com</a>
            </div>
            
            <div className="flex items-center">
              <FaWhatsapp className="text-secondary ml-2" />
              <a href="https://wa.me/972523030009" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-secondary transition-colors">שלח הודעת וואטסאפ</a>
            </div>
            
            <div className="flex items-center">
              <FaLinkedin className="text-secondary ml-2" />
              <a href="https://www.linkedin.com/in/kochavith-arnon/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-secondary transition-colors">
                פרופיל לינקדאין
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} KA כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 