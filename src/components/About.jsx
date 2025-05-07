import { motion } from 'framer-motion'

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <div className="bg-background/60 py-16">
      <div className="container-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <h2 className="heading-2 text-center mb-8">אודות KA</h2>
          
          <p className="paragraph text-right mb-6">
            KA מתמחה בליווי אסטרטגי של ארגונים בתהליכי חדשנות, שירות, פיתוח עסקי והטמעת פתרונות טכנולוגיים.
          </p>
          
          <p className="paragraph text-right mb-6">
            חטיבת הבינה המלאכותית שלנו נועדה להנגיש את ה-AI לעסקים בצורה פרקטית, מהירה וממוקדת תוצאה.
          </p>
          
          <div className="mt-10 flex justify-center">
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About 