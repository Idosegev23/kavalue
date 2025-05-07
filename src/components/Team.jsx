import { motion } from 'framer-motion'

const Team = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="bg-background py-16">
      <div className="container-section">
        <h2 className="heading-2 text-center mb-12">הצוות המוביל</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* כוכבית ארנון */}
          <motion.div 
            className="bg-white shadow-md rounded-lg overflow-hidden"
            variants={item}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="https://res.cloudinary.com/dsoh3yteb/image/upload/v1725735896/kochavith_xrfyrg.png" 
                  alt="כוכבית ארנון"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-xl font-bold mb-2 text-secondary">כוכבית ארנון</h3>
                <p className="text-sm font-medium text-gray-600 mb-4">מייסדת ומנכ"לית</p>
                
                <ul className="text-sm space-y-2 mr-4 list-disc">
                  <li>מרצה בארגונים ובאקדמיה</li>
                  <li>חוקרת ומומחית לשילוב AI בארגונים</li>
                  <li>סמנכ"לית בכירה לשעבר בהראל</li>
                  <li>25 שנות ניסיון ניהולי</li>
                  <li>מנהלת Broadcast "AI לאנשים עסוקים"</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* עידו שגב */}
          <motion.div 
            className="bg-white shadow-md rounded-lg overflow-hidden"
            variants={item}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="https://res.cloudinary.com/dsoh3yteb/image/upload/v1725734946/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A2%D7%99%D7%93%D7%95_qwrpgz.png" 
                  alt="עידו שגב"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-xl font-bold mb-2 text-secondary">עידו שגב</h3>
                <p className="text-sm font-medium text-gray-600 mb-4">מנכ"ל חטיבת הבינה המלאכותית</p>
                <p className="text-sm italic text-gray-700">
                  "אני מאמין שבינה מלאכותית צריכה להיות כלי נגיש וישים לכל עסק, בכל גודל ובכל תחום. המטרה שלנו היא להפוך את ה-AI ממילה באזז למנוע צמיחה עסקי אמיתי."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Team 