import { useQuery, useMutation, useQueryClient } from 'react-query'
import { taskService } from '@/services/taskService'
import { useAxiosInstance } from '@/axios/axios'
import { useUser } from '@/contexts/UserContext'

export const useTasks = () => {

  const queryClient = useQueryClient()
  const axiosInstance = useAxiosInstance("task")
  const { user, isLoading: isLoadingUser } = useUser()

  const { data: categories, isLoading: isLoadingCategories } = useQuery(
    'tasks', 
    () => taskService.getTasks(axiosInstance, user?.id),
    {
      // Only fetch when user is loaded and authenticated
      enabled: !isLoadingUser && !!user?.token,
      // Retry failed requests
      retry: 1,
    }
  )

  const updateTaskMutation = useMutation(
    ({ categoryId, taskId, status }) => {
      return taskService.updateTaskStatus(
        axiosInstance, 
        user?.id,
        { 
          categoryId, 
          taskId, 
          status: status
        }
      );
    }, 
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks')
      },
    }
  )


  const createCategoryMutation = useMutation(
    (name) => {
      return taskService.createCategory(axiosInstance, user?.id, name)
    }, 
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks')
      },
    }
  )

  const createTaskMutation = useMutation(
    ({task, categoryId}) => {
      return taskService.createTask(user?.id, task, categoryId, axiosInstance)
    }, 
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks')
      },
    }
  )

  const deleteTaskMutation = useMutation(
    ({categoryId, taskId}) => {
      console.log("categoryId hook", categoryId);
      console.log("taskId hook", taskId);
      return taskService.deleteTask(user?.id, categoryId, taskId, axiosInstance)
    }, 
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks')
      },
    }
  )

  const allTasks = categories?.reduce((acc, category) => {
    return [...acc, 
      ...category.tasks.map(task => ({
        ...task,
        categoryId: category._id,
        name: category.name,
      }))
    ]
  }, []) || []

  const organizedTasks = {
    todo: allTasks.filter(task => task.status.toLowerCase() === 'todo') || [],
    inProgress: allTasks.filter(task => task.status.toLowerCase() === 'inprogress') || [],
    reviewing: allTasks.filter(task => task.status.toLowerCase() === 'reviewing') || [],
    done: allTasks.filter(task => task.status.toLowerCase() === 'done') || []
  }

  return {
    tasks: organizedTasks,
    categories,
    isLoading: isLoadingUser || isLoadingCategories,
    updateTask: updateTaskMutation.mutate,
    createTask: createTaskMutation.mutate,
    deleteTask: deleteTaskMutation.mutate,
    createCategory: createCategoryMutation.mutate,
  }
}