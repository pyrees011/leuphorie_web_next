import { useQuery, useMutation, useQueryClient } from 'react-query'
import { taskService } from '@/services/taskService'
import { useAxiosInstance } from '@/axios/axios'

export const useTasks = () => {
  const queryClient = useQueryClient()
  const axiosInstance = useAxiosInstance()

  const { data: categories, isLoading } = useQuery('tasks', () => 
    taskService.getTasks(axiosInstance)
  )

  const updateTaskMutation = useMutation(
    ({ taskId, status }) => taskService.updateTaskStatus(axiosInstance, { taskId, status }), 
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks')
      },
    }
  )

  const createTaskMutation = useMutation(
    (task) => taskService.createTask(task, axiosInstance), 
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks')
      },
    }
  )

  const deleteTaskMutation = useMutation(
    (taskId) => taskService.deleteTask(taskId, axiosInstance), 
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks')
      },
    }
  )

  const allTasks = categories?.reduce((acc, category) => {
    return [...acc, ...category.tasks]
  }, []) || []

  const organizedTasks = {
    todo: allTasks.filter(task => task.status.toLowerCase() === 'todo') || [],
    inProgress: allTasks.filter(task => task.status.toLowerCase() === 'inprogress') || [],
    review: allTasks.filter(task => task.status.toLowerCase() === 'review') || [],
    done: allTasks.filter(task => task.status.toLowerCase() === 'done') || []
  }

  return {
    tasks: organizedTasks,
    categories,
    isLoading,
    updateTask: updateTaskMutation.mutate,
    createTask: createTaskMutation.mutate,
    deleteTask: deleteTaskMutation.mutate,
  }
}