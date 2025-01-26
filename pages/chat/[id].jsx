import { useState, useEffect, useRef } from "react"

// icons
import { AtSign, Send, LinkIcon, message } from "lucide-react"

// shade Components
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// layout
import ChatLayout from "@/layout/chatLayout"
import { cn } from "@/lib/utils"

export default function ChatID({ id }) {
    // TODO: clean the useState
    // TODO: possible make the global state (react query or redux)
    // TODO: connect to the backend
    // TODO: add the loading state
    // TODO: add the error state
    const [message, setMessage] = useState("")
    const [chat, setChat] = useState([
        {
            id: 1,
            message: "Hello, how are you?",
            role: "user"
        },
        {
            id: 2,
            message: "I'm fine, thank you!",
            role: "model"
        },
        {
            id: 3,
            message: "What is the weather in Tokyo?",
            role: "user"
        },
        {
            id: 4,
            message: "The weather in Tokyo is sunny and warm.",
            role: "model"
        },
        {
            id: 5,
            message: "What is the weather in Tokyo?",
            role: "user"
        },
    ])
    const chatContainerRef = useRef(null)

    const scrollToBottom = () => {
        chatContainerRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    // TODO: clean the useEffect
    useEffect(() => {
        scrollToBottom()
    }, [chat])


    const handleSendMessage = (e) => {
        e.preventDefault()
        setChat([...chat, {
            id: chat.length + 1,
            message: message,
            role: "user"
        }])
        setMessage("")
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSendMessage(e)
        }
    }

  return (
    <ChatLayout>
                <main className="mx-auto w-full flex flex-col justify-between px-6 py-8 bg-gray-100 rounded-tl-3xl flex-1">

                <div className="flex flex-col overflow-y-auto xl:h-[600px]">
                    { chat.map((messages) => (
                        <MessageComponent key={messages.id} messages={messages} />
                    )) }

                    <div ref={chatContainerRef} />
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

const MessageComponent = ({ messages }) => {
    return (
        <Card className={cn('bg-gradient-to-r from-emerald-800/10 to-emerald-600/10 border-none mb-8 w-fit', {
            'ml-auto': messages.role === "user"
        })}>
            <CardContent className="p-4 flex justify-center items-center">
                <p>{messages.message}</p>
            </CardContent>
        </Card>
    )
}

const ExmapleAvatar = () => {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

