import React from 'react';
import { Droppable, Draggable } from "react-beautiful-dnd";

// shadcn
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DialogTrigger } from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

// icons
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
    MoreVertical,
    Edit,
    Trash,
    Copy,
  } from "lucide-react"

// components
import { AddTaskModal } from "@/components/modals/AddTaskModal";

// hooks
import { useTasks } from "@/hooks/useTasks";

export default function TaskCard({ columnId, column }) {
  const { deleteTask } = useTasks();

  const handleDeleteTask = (categoryId, taskId) => {
    deleteTask({categoryId, taskId});
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md min-h-[300px] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${column.color}`} />
          <h3 className="font-medium">{column.title}</h3>
          <span className="text-gray-500">{column.count}</span>
        </div>
      </div>

      {/* ✅ Ensure Droppable covers entire area */}
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div 
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-4 flex-1"
          >
            {column.tasks.length === 0 && (
              <p className="text-gray-400 text-center py-2">No tasks yet</p>
            )}
            
            {column.tasks.map((task, index) => (
              <Draggable key={String(task._id)} draggableId={String(task._id)} index={index}>
                {(provided) => (
                  <Card
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="p-4 hover:shadow-md transition-shadow bg-white"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={`px-2 py-1 rounded-md text-xs text-white ${task.name === 'personal' ? 'bg-emerald-500' : 'bg-blue-500'}`}>
                        {task.name}
                      </span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-8 w-8 p-0"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[160px]">
                          <DropdownMenuLabel>Task Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="mr-2 h-4 w-4" />
                              <span>Duplicate</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteTask(task.categoryId, task._id)}>
                              <Trash className="mr-2 h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <h4 className="font-medium mb-2">{task.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{task.description}</p>
                  </Card>
                )}
              </Draggable>
            ))}
            {provided.placeholder} {/* ✅ Ensures space is allocated during drag */}
          </div>
        )}
      </Droppable>

      <AddTaskModal columnId={columnId}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="w-full mt-4 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
          >
            + Add New Task
          </Button>
        </DialogTrigger>
      </AddTaskModal>
    </div>
  );
}
