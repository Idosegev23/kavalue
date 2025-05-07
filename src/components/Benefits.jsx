import { motion } from 'framer-motion'
import { FaAward, FaLightbulb, FaChartLine, FaRocket } from 'react-icons/fa'

const benefits = [
  {
    id: 1,
    title: 'ניסיון מצטבר מעל 25 שנה',
    description: 'צוות מומחים עם ניסיון עשיר בניהול, ייעוץ אסטרטגי וטכנולוגיה מתקדמת',
    icon: <FaAward className="text-3xl text-secondary" />
  },
  {
    id: 2,
    title: 'מקצועיות, חדשנות ויישום מדויק',
    description: 'מומחיות בהתאמת פתרונות טכנולוגיים לצרכי הארגון תוך שמירה על מיקוד עסקי',
    icon: <FaLightbulb className="text-3xl text-secondary" />
  },
  {
    id: 3,
    title: 'תהליך אסטרטגי ולא רק טכנולוגי',
    description: 'ראייה הוליסטית המשלבת תהליכים עסקיים, אנשים וטכנולוגיה לקבלת תוצאות מיטביות',
    icon: <FaChartLine className="text-3xl text-secondary" />
  },
  {
    id: 4,
    title: 'פתרונות מדידים עם ערך מיידי',
    description: 'מתודולוגיה משולבת המאפשרת לראות תוצאות והחזר השקעה בטווח קצר',
    icon: <FaRocket className="text-3xl text-secondary" />
  }
]

const Benefits = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="bg-primary/10 py-16">
      <div className="container-section">
        <h2 className="heading-2 text-center mb-4">למה לבחור ב-KA?</h2>
        <p className="paragraph text-center mb-12 max-w-2xl mx-auto">
          השילוב המושלם בין ניסיון ניהולי עשיר לחדשנות טכנולוגית
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
              variants={item}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{benefit.title}</h3>
              <p className="text-sm text-gray-700 text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#contact" className="cta-button text-lg">צרו קשר עוד היום</a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Benefits 