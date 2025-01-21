import { useState } from "react"
import Image from "next/image"

// shadecn components
import { Button } from "@/components/ui/button"

// components
import QuestionnaireCards from "@/components/questionnaire/questionnaireCards"

// lucide icons
import { Briefcase, Palette, Code, LineChart } from "lucide-react"

// utils
import { cn } from "@/lib/utils"

// framer motion
import { motion } from "framer-motion"

export default function health() {
  const [selectedOption, setSelectedOption] = useState("design")
  const [currentStep, setCurrentStep] = useState(2)

  const handleClick = (id) => {
    setSelectedOption(id)
  }

  return (
    <div className="grid md:grid-cols-5 xl:grid-cols-7 p-8 overflow-hidden">
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
      <h1 className="text-7xl w-4/5 font-semibold mb-8">What kind of work do you do?</h1>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 bg-gray-100 p-6 rounded-xl">
        {options.map((option) => {
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
                selectedOption={selectedOption}
                handleClick={handleClick}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-start gap-4">
        <FooterButton className="text-black bg-white hover:text-white border-black border" text="Back" handleClick={() => {
          if (currentStep > 1) {
            setCurrentStep(prev => prev - 1)
          }
        }} />
        <FooterButton 
          className="bg-green-500 hover:bg-green-600 text-white" 
          text="Continue" 
          handleClick={() => {
            if (currentStep < 6) {
              setCurrentStep(prev => prev + 1)
            }
          }} 
        />
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

const options = [
    { id: "business", label: "Business management", icon: Briefcase },
    { id: "design", label: "Design", icon: Palette },
    { id: "development", label: "Development", icon: Code },
    { id: "marketing", label: "Marketing", icon: LineChart },
  ]

