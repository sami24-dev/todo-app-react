export interface Task {
  id: number
  task: string
  completed: boolean
}

export interface TodoContextType {
  tasks: Task[]
  addTask: (task: Task) => void
  toggleTask: (id: number) => void
  removeTask: (id: number) => void
}
