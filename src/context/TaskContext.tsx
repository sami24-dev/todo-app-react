import { ReactNode, createContext, useContext, useState } from 'react'
import { Task, TodoContextType } from '../model/Model'

const TaskContext = createContext<TodoContextType | undefined>(undefined)

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filterTasks, setFilterTasks] = useState<Task[]>([])
  //console.log(tasks, filterTasks)
  const addTask = (task: Task) => {
    setTasks([...tasks, task])
    setFilterTasks([...filterTasks, task])
  }
  const toggleTask = (id: number): void => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
    setFilterTasks(updatedTasks)
  }
  const removeTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
    setFilterTasks(updatedTasks)
  }
  const allTask = () => {
    const updatedTasks = tasks.filter((task) => task)
    setFilterTasks(updatedTasks)
    console.log(updatedTasks)
  }
  const activeTask = () => {
    const updatedTasks = tasks.filter((task) => task.completed === false)
    setFilterTasks(updatedTasks)
    console.log(updatedTasks)
  }
  const completedTask = () => {
    const updatedTasks = tasks.filter((task) => task.completed === true)
    setFilterTasks(updatedTasks)
    console.log(updatedTasks)
  }
  const clearTask = () => {
    const updatedTasks = tasks.filter((task) => task.completed !== true)
    setTasks(updatedTasks)
    setFilterTasks(updatedTasks)
  }
  return (
    <TaskContext.Provider value={{ tasks, filterTasks, addTask, toggleTask, removeTask, allTask, activeTask, completedTask, clearTask }}>
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
