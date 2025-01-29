import React, { useCallback } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useTasks } from '@/hooks/useTasks'
import { Plus, Search, Kanban } from 'lucide-react'

// shadcn
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

// components
import TaskCard from "@/components/taskCard"

// layout
import AuthenticatedLayout from "@/layout/authenticatedLayout"

const KanbanBoard = () => {
  const { tasks, categories, isLoading, updateTask } = useTasks()

  const handleDragEnd = useCallback((result) => {
    if (!result.destination) return

    const { draggableId, destination } = result
    
    updateTask({
      taskId: draggableId,
      status: destination.droppableId.charAt(0).toUpperCase() + destination.droppableId.slice(1)
    })
  }, [updateTask])

  if (isLoading) {
    return (
      <AuthenticatedLayout>
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      </AuthenticatedLayout>
    )
  }

  const columns = {
    todo: {
      title: "To Do",
      count: tasks.todo.length,
      color: "bg-red-500",
      tasks: tasks.todo
    },
    inProgress: {
      title: "In Progress",
      count: tasks.inProgress.length,
      color: "bg-emerald-500",
      tasks: tasks.inProgress
    },
    review: {
      title: "Need Review",
      count: tasks.review.length,
      color: "bg-yellow-500",
      tasks: tasks.review
    },
    done: {
      title: "Done",
      count: tasks.done.length,
      color: "bg-green-500",
      tasks: tasks.done
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
          <DragDropContext onDragEnd={handleDragEnd}>
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