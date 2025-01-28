import React from 'react'
import Image from 'next/image'
import { Kanban, Plus, Search, Settings } from 'lucide-react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// shadcn
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

// components
import TaskCard from "@/components/taskCard"

// layout
import AuthenticatedLayout from "@/layout/authenticatedLayout"

const KanbanBoard = () => {
  const columns = {
    todo: {
      title: "To Do",
      count: 3,
      color: "bg-red-500",
      tasks: [
        {
          id: "1",
          title: "Wireframing",
          tag: "UX stages",
          tagColor: "bg-purple-100 text-purple-600",
          description: "Create low-fidelity designs that outline the basic structure...",
          progress: "0/8",
          views: 2,
          comments: 0,
          attachments: 0,
        },
      ]
    },
    inProgress: {
      title: "In Progress",
      count: 2,
      color: "bg-emerald-500",
      tasks: [
        {
          id: "2",
          title: "Customer Journey Mapping",
          tag: "UX stages",
          tagColor: "bg-emerald-100 text-emerald-600",
          description: "Identify the key touchpoints and pain points...",
          progress: "3/10",
          views: 6,
          comments: 11,
          attachments: 7,
        },
      ]
    },
    review: {
      title: "Need Review",
      count: 1,
      color: "bg-yellow-500",
      tasks: []
    },
    done: {
      title: "Done",
      count: 2,
      color: "bg-green-500",
      tasks: []
    }
  }

  return (
    <AuthenticatedLayout>
      <div className="">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white py-4">
          <div className="mx-auto px-4">
            <div className="flex items-center h-16">
              <div className="flex items-center space-x-2">
                <Kanban className="w-6 h-6 text-emerald-600" />
                <h1 className="text-xl font-semibold">Kanban Board</h1>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto px-6 py-8 rounded-3xl bg-gray-100">
          {/* Hero Section */}
          <Card className="bg-gradient-to-r from-emerald-800/10 to-emerald-600/10 border-none p-8 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Kanban className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">Project Tasks</h1>
                  {/* <Progress value={33} className="w-32 h-1.5 mt-2" /> */}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Input
                  type="text"
                  placeholder="Search tasks..."
                  className="w-64"
                  prefix={<Search className="w-4 h-4 text-gray-400" />}
                />
                {/* <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </Button> */}
              </div>
            </div>
          </Card>

          {/* Kanban Board */}
          <DragDropContext onDragEnd={() => {}}>
            <div className="grid grid-cols-4 gap-6">
              {Object.entries(columns).map(([columnId, column]) => (
                <Droppable key={columnId} droppableId={columnId}>
                  {(provided) => (
                    <TaskCard column={column} provided={provided} />
                  )}
                </Droppable>
              ))}
            </div>
          </DragDropContext>
        </main>
      </div>
    </AuthenticatedLayout>
  )
}

export default KanbanBoard 