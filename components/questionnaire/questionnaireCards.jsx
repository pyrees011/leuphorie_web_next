import React from 'react'

// shadecn components
import { Card } from "@/components/ui/card"

// lucide icons
import { Check } from 'lucide-react';

export default function QuestionnaireCards({ option, selectedOption, handleClick }) {
    console.log(selectedOption)
    const Icon = option.icon
    return (
        <Card
            key={option.id}
            className={`p-6 h-80 flex flex-col justify-center items-center cursor-pointer transition-colors relative ${
            selectedOption === option.id ? "bg-[#1C1F1E] text-white" : "hover:bg-gray-50"
            }`}
            onClick={() => handleClick(option.id)}
        >
            {selectedOption === option.id && (
            <div className="absolute top-3 right-3 w-5 h-5 rounded-md bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-black" />
            </div>
            )}
            <Icon className="w-8 h-8 mb-6 text-green-500 font-bold" />
            <div className="text-lg text-center font-semibold">{option.label}</div>
        </Card>
    )
}