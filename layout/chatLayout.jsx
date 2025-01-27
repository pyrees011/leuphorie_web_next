import React from 'react'

// layout
import AuthenticatedLayout from './authenticatedLayout'

// icons
import {  
    Github, 
    Laptop, 
    Link as LinkIcon, 
    MessageSquare
  } from "lucide-react";

// shadcn Components
import { Button } from "@/components/ui/button"

export default function ChatLayout({ children }) {
  return (
    <AuthenticatedLayout>
        <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white py-4">
          <div className="mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-emerald-600" />
                <h1 className="text-xl font-semibold">Chat Assistant</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Laptop className="h-5 w-5" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {children}   

      </div>
    </AuthenticatedLayout>
  )
}
