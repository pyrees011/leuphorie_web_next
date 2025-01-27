import { useState } from "react"
import { 
  Link as LinkIcon, 
  AtSign, 
  Send,
  Sparkles,
  Code,
  Calculator,
  BookOpen,
  Search,
} from "lucide-react"

// shadcn Components
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// layout
import ChatLayout from "@/layout/chatLayout"

export default function Chat() {
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    console.log('message', message)
    setMessage("")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <ChatLayout>
        <main className="mx-auto w-full flex flex-col justify-between px-6 py-8 bg-gray-100 rounded-tl-3xl flex-1">
            <div>
          {/* Welcome Card */}
            <Card className="bg-gradient-to-r from-emerald-800/10 to-emerald-600/10 border-none p-8 mb-8">
                <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-emerald-600/20 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">AI Chat Assistant</h2>
                    <p className="text-gray-600">
                    Your intelligent companion for research, coding, and problem-solving.
                    </p>
                </div>
                </div>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                    <Search className="w-5 h-5 text-emerald-500" />
                    <h3 className="font-medium">Smart Search</h3>
                </div>
                <p className="text-gray-600 text-sm">
                    Intelligent web searches with source citations
                </p>
                </Card>

                <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                    <Code className="w-5 h-5 text-emerald-500" />
                    <h3 className="font-medium">Code Assistant</h3>
                </div>
                <p className="text-gray-600 text-sm">
                    Help with coding, debugging, and best practices
                </p>
                </Card>

                <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                    <BookOpen className="w-5 h-5 text-emerald-500" />
                    <h3 className="font-medium">Learning Guide</h3>
                </div>
                <p className="text-gray-600 text-sm">
                    Explanations and tutorials on any topic
                </p>
                </Card>
            </div>

            {/* Tools Section */}
            <div className="flex gap-2 mb-8">
                <Button
                variant="outline"
                className="border-emerald-200 bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                >
                <Code className="w-4 h-4 mr-2" />
                Python Runner
                </Button>
                <Button
                variant="outline"
                className="border-emerald-200 bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                >
                <Calculator className="w-4 h-4 mr-2" />
                Calculator
                </Button>
            </div>
          </div>

            {/* Input Section */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex gap-2">
                <LinkIcon className="w-5 h-5 text-gray-400" />
                <AtSign className="w-5 h-5 text-gray-400" />
              </div>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pl-16 pr-12 py-6 bg-white border-gray-200 text-gray-800"
                placeholder="Write a message here..."
                onKeyDown={handleKeyDown}
              />
              <Button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700"
                size="icon"
                onClick={handleSendMessage}
              >
                <Send className="w-4 h-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
        </main>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500 border-t">
          <p>AI responses may contain inaccuracies. Please verify important information.</p>
        </footer>
    </ChatLayout>
  )
}

