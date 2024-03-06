import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { Task, TodoContextType } from '../model/Model'

const TaskContext = createContext<TodoContextType | undefined>(undefined)

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filterTasks, setFilterTasks] = useState<Task[]>([])
  const taskStorage: Task[] = JSON.parse(localStorage.getItem('listTask') || '[]')

  useEffect(() => {
    setTasks(taskStorage)
  }, [])

  useEffect(() => {
    localStorage.setItem('listTask', JSON.stringify(tasks))
    setFilterTasks(tasks)
  }, [tasks])

  const addTask = (task: Task) => {
    setTasks([...tasks, task])
  }
  const toggleTask = (id: number): void => {
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
  const allTask = () => {
    const updatedTasks = tasks.filter((task) => task)
    setFilterTasks(updatedTasks)
  }
  const stateTask = (state: boolean) => {
    const updatedTasks = tasks.filter((task) => task.completed === state)
    setFilterTasks(updatedTasks)
  }
  const clearTask = () => {
    const updatedTasks = tasks.filter((task) => task.completed !== true)
    setTasks(updatedTasks)
    setFilterTasks(updatedTasks)
  }
  return (
    <TaskContext.Provider value={{ tasks, filterTasks, addTask, toggleTask, removeTask, allTask, stateTask, clearTask }}>
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
