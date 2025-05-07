import { useState } from 'react'
import { motion } from 'framer-motion'
import { Disclosure, Transition } from '@headlessui/react'
import { FaChevronDown, FaRegClipboard, FaRoute, FaLightbulb, FaCog, FaFileAlt, FaCheck } from 'react-icons/fa'

const diagnosisSteps = [
  {
    id: 1,
    title: 'אפיון עם הנהלה',
    description: 'פגישה מקיפה עם הנהלת הארגון לזיהוי יעדים, ציפיות ונקודות כאב',
    hours: '2 שעות',
    icon: <FaRegClipboard />
  },
  {
    id: 2,
    title: 'מיפוי תהליכים',
    description: 'תיעוד ומיפוי תהליכים ארגוניים מרכזיים, פגישות עם בעלי תפקיד מובילים',
    hours: '5 שעות',
    icon: <FaRoute />
  },
  {
    id: 3,
    title: 'סדנת זיהוי הזדמנויות',
    description: 'סדנה משותפת עם צוות הליבה לזיהוי הזדמנויות ונקודות התערבות אופטימליות',
    hours: '2 שעות',
    icon: <FaLightbulb />
  },
  {
    id: 4,
    title: 'עבודת עומק ואינטגרציה',
    description: 'ניתוח כלל הנתונים שנאספו וגיבוש פתרונות ייעודיים בהתאם ליעדי הארגון',
    hours: '4 שעות',
    icon: <FaCog />
  },
  {
    id: 5,
    title: 'דו"ח מסכם והצגת ממצאים',
    description: 'הצגת מסמך אבחון, מסקנות והמלצות ליישום בפני הנהלת הארגון',
    hours: '2 שעות',
    icon: <FaFileAlt />
  }
]

const DiagnosisPackage = () => {
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
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="bg-background py-16">
      <div className="container-section">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2 text-center mb-4">חבילת אבחון AI ארגוני</h2>
          <p className="paragraph text-center mb-12 max-w-2xl mx-auto">
            מסלול ממוקד לאבחון והטמעת פתרונות בינה מלאכותית בארגון שלכם
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="heading-3 text-center mb-8">מטרות התהליך</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <FaCheck className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">תמונת מצב טכנולוגית</h4>
                  <p className="text-sm text-gray-700">הבנת המערכות, היכולות והחסמים הנוכחיים</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <FaCheck className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">אבחון פוטנציאל ייעול</h4>
                  <p className="text-sm text-gray-700">זיהוי נקודות כאב וכיווני פעולה מומלצים</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <FaCheck className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">הצעת יישום ממוקד</h4>
                  <p className="text-sm text-gray-700">תכנית יישום מדורגת עם תוצאות ברורות</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <FaCheck className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">תשתית ליישום רחב</h4>
                  <p className="text-sm text-gray-700">בניית הבסיס להטמעה מדורגת וארוכת טווח</p>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="heading-3 text-center mb-6">שלבי התהליך</h3>
          
          <div className="space-y-3 mb-12">
            {diagnosisSteps.map((step) => (
              <Disclosure key={step.id}>
                {({ open }) => (
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <Disclosure.Button className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center ml-3">
                          {step.icon}
                        </div>
                        <span className="font-medium">{step.title} <span className="text-sm text-gray-500 mr-2">{step.hours}</span></span>
                      </div>
                      <FaChevronDown className={`${open ? 'transform rotate-180' : ''} text-gray-500 transition-transform duration-200`} />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-6 py-4 text-sm text-gray-700 bg-gray-50">
                        {step.description}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-center">תוצרים</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center ml-3">
                    <FaCheck className="text-sm text-secondary" />
                  </div>
                  <span>דו"ח אבחון מקצועי</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center ml-3">
                    <FaCheck className="text-sm text-secondary" />
                  </div>
                  <span>מפת דרכים</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center ml-3">
                    <FaCheck className="text-sm text-secondary" />
                  </div>
                  <span>מסמך המלצות ליישום מיידי</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-center">למי זה מתאים?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center ml-3">
                    <FaCheck className="text-sm text-secondary" />
                  </div>
                  <span>ארגונים עם מגבלה תקציבית</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center ml-3">
                    <FaCheck className="text-sm text-secondary" />
                  </div>
                  <span>עסקים שרוצים להתחיל בקטן ובצורה מדודה</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1 ml-3">
                    <FaCheck className="text-sm text-secondary" />
                  </div>
                  <div>
                    <span className="font-medium">יתרונות:</span>
                    <ul className="mr-2 mt-1 space-y-1 text-sm">
                      <li>חיסכון בעלויות עתידיות</li>
                      <li>קבלת החלטות מהירה</li>
                      <li>בהירות טכנולוגית ומוכנות ארגונית</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DiagnosisPackage 