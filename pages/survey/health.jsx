import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

// shadecn components
import { Button } from "@/components/ui/button"

// components
import QuestionnaireCards from "@/components/questionnaire/questionnaireCards"

// lucide icons
import { Smile, ThumbsUp, Meh, Frown, Activity, Calendar, CalendarDays, XCircle, Coffee, Zap, AlertCircle, Moon, CloudMoon, Cloud, CloudOff, Apple, Sandwich, Pizza, Cookie, Battery, BatteryMedium, BatteryLow, AlertTriangle } from "lucide-react"

// utils
import { cn } from "@/lib/utils"

// framer motion
import { motion } from "framer-motion"

export default function health() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState([
    {id: 1, answer: ""},
    {id: 2, answer: ""},
    {id: 3, answer: ""},
    {id: 4, answer: ""},
    {id: 5, answer: ""},
    {id: 6, answer: ""}
  ])
  const [currentStep, setCurrentStep] = useState(1)

  const handleQuestionCardClick = (id) => {
    setSelectedOption(prev => {
      const newState = [...prev]
      newState[currentStep - 1].answer = id
      return newState
    })
    setCurrentStep(prev => {
      if (prev < 6) {
        return prev + 1
      }
      return prev
    })
  }

  const handleContinueClick = () => {
    // TODO: send data to backend and redirect to signup page
    // router.push("/")
    if (currentStep == 6) {
      console.log("Continue")
      // TODO: send data to backend and redirect to signup page
      // router.push("/")
    } else {
      setCurrentStep(prev => prev + 1)
    }
  }

  return (
    <div className="grid md:grid-cols-5 xl:grid-cols-7 p-8 overflow-hidden min-h-screen">
      <div className="w-full md:col-span-3 xl:col-span-5 mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center gap-1 mb-8">
            <Image src="/logo.png" alt="Leuphorie" width={50} height={50} />
            <span className="font-semibold text-3xl">Leuphorie</span>
        </div>

      {/* Progress */}
      <div className="flex max-w-sm gap-3 mb-4">
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i} 
            className={cn(`h-2 rounded-full flex-1`, {
              "bg-green-900": i < currentStep - 1,
              "bg-green-500": i === currentStep - 1,
              "bg-gray-200": i > currentStep - 1,
            })}
            initial={false}
            animate={{
              backgroundColor: i < currentStep - 1 
                ? "#14532d"  // bg-green-900
                : i === currentStep - 1 
                ? "#22c55e"  // bg-green-500
                : "#e5e7eb"  // bg-gray-200
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      <motion.div 
        className="text-sm text-black font-semibold mb-8"
        key={currentStep}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {currentStep} of 6
      </motion.div>

      {/* Question */}
      <h1 className="text-7xl w-4/5 font-semibold mb-8">{ questions[currentStep - 1].question }</h1>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 bg-gray-100 p-6 rounded-xl">
        {questions[currentStep - 1].options.map((option) => {
          const isSelected = selectedOption === option.id
          return (
            <motion.div
              key={option.id}
              layout
              animate={{
                scale: isSelected ? 1.05 : 1,
                transition: { duration: 0.2 }
              }}
            >
              <QuestionnaireCards 
                option={option}
                selectedOption={selectedOption[currentStep - 1].answer}
                handleClick={handleQuestionCardClick}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-start gap-4">
      { currentStep > 1 && 
        <FooterButton className="text-black bg-white hover:text-white border-black border" text="Back" handleClick={() => {
          if (currentStep > 1) {
            setCurrentStep(prev => prev - 1)
          }
        }} />
        }
        { selectedOption[currentStep - 1].answer !== "" &&
        <FooterButton 
          className="bg-green-500 hover:bg-green-600 text-white" 
          text="Continue" 
          handleClick={handleContinueClick} 
        />
        }
      </div>
    </div>
    <div className="md:col-span-2 xl:col-span-2 ml-2">
        <Image src="/human.png" alt="Health" width={500} height={500} className="h-full" />
    </div>
    </div>
  )
}

const FooterButton = ({ text, className, handleClick }) => {
  return (
    <Button className={cn(`px-8 py-6 rounded-xl font-semibold`, className)} onClick={handleClick}>{text}</Button>
  )
}

const questions = [
  {
    id: 1,
    question: "Rate your overall physical health?",
    options: [
      { id: "excellent", label: "Excellent - I feel great", icon: Smile },
      { id: "good", label: "Good - Generally healthy", icon: ThumbsUp },
      { id: "fair", label: "Fair - Could be better", icon: Meh },
      { id: "poor", label: "Poor - Need improvement", icon: Frown }
    ]
  },
  {
    id: 2, 
    question: "How often do you exercise?",
    options: [
      { id: "daily", label: "Daily", icon: Activity },
      { id: "weekly", label: "2-3 times per week", icon: Calendar },
      { id: "monthly", label: "A few times per month", icon: CalendarDays },
      { id: "rarely", label: "Rarely or never", icon: XCircle }
    ]
  },
  {
    id: 3,
    question: "Describe your stress levels?",
    options: [
      { id: "low", label: "Low - Well managed", icon: Coffee },
      { id: "moderate", label: "Moderate - Sometimes stressed", icon: AlertCircle },
      { id: "high", label: "High - Often stressed", icon: Zap },
      { id: "severe", label: "Severe - Constantly stressed", icon: AlertTriangle }
    ]
  },
  {
    id: 4,
    question: "How well do you sleep on average?",
    options: [
      { id: "verywell", label: "Very well (7-9 hours)", icon: Moon },
      { id: "okay", label: "Okay (5-7 hours)", icon: CloudMoon },
      { id: "poor", label: "Poor (3-5 hours)", icon: Cloud },
      { id: "insomnia", label: "Difficulty sleeping", icon: CloudOff }
    ]
  },
  {
    id: 5,
    question: "How would you rate your diet?",
    options: [
      { id: "excellent", label: "Very healthy & balanced", icon: Apple },
      { id: "good", label: "Generally healthy", icon: Sandwich },
      { id: "fair", label: "Sometimes healthy", icon: Pizza },
      { id: "poor", label: "Needs improvement", icon: Cookie }
    ]
  },
  {
    id: 6,
    question: "Energy levels throughout the day?",
    options: [
      { id: "always", label: "Always energetic", icon: Zap },
      { id: "mostly", label: "Mostly energetic", icon: Battery },
      { id: "sometimes", label: "Sometimes energetic", icon: BatteryMedium },
      { id: "rarely", label: "Rarely energetic", icon: BatteryLow }
    ]
  }
]

