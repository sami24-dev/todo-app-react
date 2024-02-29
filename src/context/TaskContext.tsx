import { ReactNode, createContext, useContext, useState } from 'react'
import { Task, TodoContextType } from '../model/Model'

const TaskContext = createContext<TodoContextType | undefined>(undefined)

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Task) => {
    setTasks([...tasks, task])
  }
  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }
  const removeTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }
  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTodo = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTodo debe ser utilizado dentro de un TodoProvider')
  }
  return context
}
