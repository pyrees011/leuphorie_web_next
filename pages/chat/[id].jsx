import { Bell, Github, Laptop, Link, AtSign, Send } from "lucide-react"

// shade Components
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Chat() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Chat with Command R+</h1>
            <p className="text-zinc-400">
              A conversational tool for web searches, citing sources, research, drafting, debugging, and more.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Laptop className="h-5 w-5" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-12">
          {/* Center Logo */}
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="w-16 h-16 bg-emerald-700/20 rounded-xl flex items-center justify-center">
              <Bell className="w-8 h-8 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-semibold">Where knowledge begins</h2>
            <p className="text-zinc-400 text-center">
              Uses multiple sources and tools to answer questions with citations.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-zinc-900/50 border-zinc-800 p-6">
              <h3 className="text-sm font-medium mb-4 uppercase tracking-wider text-zinc-400">Stay Updated</h3>
              <p className="text-zinc-300">Rental Prices in North American Cities.</p>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800 p-6">
              <h3 className="text-sm font-medium mb-4 uppercase tracking-wider text-zinc-400">Research</h3>
              <p className="text-zinc-300">Overview of the Solar Panel Industry.</p>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800 p-6">
              <h3 className="text-sm font-medium mb-4 uppercase tracking-wider text-zinc-400">Learn a Topic</h3>
              <p className="text-zinc-300">Detailed explanation of trigonometry.</p>
            </Card>
          </div>

          {/* Tools Section */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-emerald-800/50 bg-emerald-900/10 text-emerald-500 hover:bg-emerald-900/20"
            >
              <span className="text-emerald-500 mr-2">$</span>
              Python Runner
              <span className="ml-2 opacity-60">×</span>
            </Button>
            <Button
              variant="outline"
              className="border-emerald-800/50 bg-emerald-900/10 text-emerald-500 hover:bg-emerald-900/20"
            >
              <span className="text-emerald-500 mr-2">□</span>
              Calculator
              <span className="ml-2 opacity-60">×</span>
            </Button>
          </div>

          {/* Input Section */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex gap-2">
              <Link className="w-5 h-5 text-zinc-400" />
              <AtSign className="w-5 h-5 text-zinc-400" />
            </div>
            <Input
              className="pl-16 pr-12 py-6 bg-zinc-900/50 border-zinc-800 text-zinc-300"
              placeholder="Write a message here..."
            />
            <Button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700"
              size="icon"
            >
              <Send className="w-4 h-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-zinc-500">
          Supernova can make mistakes. Check important info.
        </footer>
      </div>
    </div>
  )
}

