import { useState, useEffect, useRef } from "react"
import { useRouter } from 'next/router';
import { useChat } from '@/hooks/useChat';

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

export default function ChatSession() {
    const router = useRouter();
    const { id } = router.query;
    const { messages, isLoading, sendMessage, isError } = useChat(id);

  console.log('messages', messages)

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;
    
    try {
      await sendMessage({ message: newMessage, sessionId: id });
      setNewMessage("");
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }

  if (isLoading) {
    return (
      <ChatLayout>
        <div>Loading...</div>
      </ChatLayout>
    );
  }

  if (isError) {
    return (
      <ChatLayout>
        <div>Error loading messages</div>
      </ChatLayout>
    );
  }

  return (
    <ChatLayout>
      <div className="flex flex-col h-full flex-grow">
        {/* Messages list */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages?.map((msg) => (
            <div key={msg.id} className={`mb-4 ${!msg.is_bot ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-3 rounded-lg ${
                !msg.is_bot ? 'bg-emerald-500 text-white' : 'bg-gray-100'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="p-4 mt-auto bg-gray-100">
          <div className="relative">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="pr-12"
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              className="absolute right-0 top-1/2 -translate-y-1/2"
              size="icon"
              onClick={handleSendMessage}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </ChatLayout>
  );
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

