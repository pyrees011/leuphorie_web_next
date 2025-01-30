import React, { useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useTasks } from '@/hooks/useTasks';
import { Search, Kanban } from 'lucide-react';

// shadcn
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

// components
import TaskCard from "@/components/taskCard";

// layout
import AuthenticatedLayout from "@/layout/authenticatedLayout";

// context
import { useUser } from '@/contexts/UserContext';

const KanbanBoard = () => {
  const { tasks, categories, isLoading, updateTask } = useTasks();
  const { user } = useUser();

  console.log("categories", categories);
  console.log("tasks", tasks);

  const handleDragEnd = useCallback((result) => {
    if (!result.destination) return;

    const { draggableId, destination } = result;

    // Find the task being dragged
    const task = Object.values(tasks).flat().find(t => String(t._id) === draggableId);
    if (!task) {
      console.error("❌ Task not found!", draggableId);
      return;
    }

    // Find category of the task
    const category = categories.find(c => c.tasks.some(t => String(t._id) === draggableId));
    if (!category) {
      console.error("❌ Category not found for task!", draggableId);
      return;
    }

    updateTask({
      categoryId: category._id,
      taskId: draggableId,
      status: destination.droppableId
    });
  }, [tasks, categories, updateTask]);

  if (isLoading) {
    return (
      <AuthenticatedLayout>
        <div className="flex items-center justify-center h-screen">
          <div className="text-lg">Loading tasks...</div>
        </div>
      </AuthenticatedLayout>
    );
  }

  if (!user) {
    return (
      <AuthenticatedLayout>
        <div className="flex items-center justify-center h-screen">
          <div className="text-lg">Please log in to view tasks</div>
        </div>
      </AuthenticatedLayout>
    );
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
    reviewing: {
      title: "Need Review",
      count: tasks.reviewing.length,
      color: "bg-yellow-500",
      tasks: tasks.reviewing
    },
    done: {
      title: "Done",
      count: tasks.done.length,
      color: "bg-green-500",
      tasks: tasks.done
    }
  };

  return (
    <AuthenticatedLayout>
      <div className="">
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
          <Card className="bg-gradient-to-r from-emerald-800/10 to-emerald-600/10 border-none p-8 mb-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Project Tasks</h1>
              <Input type="text" placeholder="Search tasks..." className="w-64" />
            </div>
          </Card>

          <DragDropContext key={Object.keys(tasks).join("-")} onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-4 gap-6">
              {Object.entries(columns).map(([columnId, column]) => (
                <TaskCard key={columnId} columnId={columnId} column={column} />
              ))}
            </div>
          </DragDropContext>

        </main>
      </div>
    </AuthenticatedLayout>
  );
};

export default KanbanBoard;
