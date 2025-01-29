import React from 'react'

// shadcn
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// framer
import { Draggable } from "react-beautiful-dnd"


export default function TaskCard({ column, provided }) {
    console.log("column", column)
  return (
    <Card
        ref={provided.innerRef}
        {...provided.droppableProps}
        className="bg-gray-50 p-4"
    >
        <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${column.color}`} />
            <h3 className="font-medium">{column.title}</h3>
            <span className="text-gray-500">{column.count}</span>
        </div>
        <Button variant="ghost" size="icon">⋮</Button>
        </div>

        <div className="space-y-4">
        {column.tasks?.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided) => (
                <Card
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="p-4 hover:shadow-md transition-shadow"
                >
                <div className="flex justify-between items-start mb-2">
                    <span className={`px-2 py-1 rounded-md text-xs ${task.tagColor}`}>
                    {task.tag}
                    </span>
                    <Button variant="ghost" size="icon">⋮</Button>
                </div>
                <h4 className="font-medium mb-2">{task.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{task.description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-500 text-sm">
                    <span>{task.views} 👁️</span>
                    <span>{task.comments} 💬</span>
                    <span>{task.attachments} 📎</span>
                    </div>
                </div>
                </Card>
            )}
            </Draggable>
        ))}
        {provided.placeholder}
        </div>

        <Button
        variant="ghost"
        className="w-full mt-4 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
        >
        + Add New Task
        </Button>
    </Card>
  )
}
