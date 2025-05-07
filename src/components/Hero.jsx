import { motion } from 'framer-motion'

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" }
    })
  }

  return (
    <div className="relative h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0 z-0 opacity-10 bg-gradient-to-br from-primary via-tertiary to-secondary"></div>
      
      <div className="container-section z-10 text-center">
        <motion.h1 
          className="heading-1 mb-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          KA – מובילים בניהול, חדשנות ובינה מלאכותית
        </motion.h1>
        
        <motion.p 
          className="paragraph max-w-2xl mx-auto mb-12"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          העתיד כבר כאן. אנחנו כאן כדי להוביל אתכם אליו.
        </motion.p>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a 
            href="#diagnosis" 
            className="cta-button"
          >
            הכירו את התהליך שלנו
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero 