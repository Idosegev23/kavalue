import { motion } from 'framer-motion'
import { FaRobot, FaChartLine, FaUsers, FaHandshake, FaTools, FaLaptopCode } from 'react-icons/fa'

const services = [
  {
    id: 1,
    title: 'ייעוץ אסטרטגי והטמעת AI',
    description: 'ליווי וייעוץ מותאם לשילוב בינה מלאכותית בתהליכים עסקיים קיימים לייעול וחדשנות',
    icon: <FaRobot className="text-3xl text-secondary" />
  },
  {
    id: 2,
    title: 'אפיון נקודות כאב ופיתוח פתרונות',
    description: 'זיהוי אתגרים עסקיים והצעת פתרונות טכנולוגיים ממוקדים בהתאם למשאבים הקיימים',
    icon: <FaChartLine className="text-3xl text-secondary" />
  },
  {
    id: 3,
    title: 'ליווי שוטף למנהלים וצוותים',
    description: 'הטמעת טכנולוגיה וידע בצוותים להאצת תהליכים עסקיים והגדלת אפקטיביות',
    icon: <FaUsers className="text-3xl text-secondary" />
  },
  {
    id: 4,
    title: 'חיבורים לגורמים משלימים',
    description: 'יצירת קשרים עם ספקים, קהילות ומפתחים לקידום וייעול פתרונות קיימים',
    icon: <FaHandshake className="text-3xl text-secondary" />
  },
  {
    id: 5,
    title: 'פיתוח מערכות מותאמות',
    description: 'בניית פתרונות AI ייעודיים המותאמים באופן מדויק לצרכי הארגון ואתגריו',
    icon: <FaTools className="text-3xl text-secondary" />
  },
  {
    id: 6,
    title: 'הרצאות, הכשרות וסדנאות',
    description: 'הדרכות והכשרות מקצועיות להטמעת בינה מלאכותית ושיפור מיומנויות דיגיטליות',
    icon: <FaLaptopCode className="text-3xl text-secondary" />
  }
]

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <div className="bg-tertiary/10 py-16">
      <div className="container-section">
        <h2 className="heading-2 text-center mb-12">השירותים שלנו</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              variants={item}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
              <p className="text-sm text-gray-700 text-center">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Services 