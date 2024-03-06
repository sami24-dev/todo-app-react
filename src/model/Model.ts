export interface Task {
  id: number 
  task: string 
  completed: boolean 
}

export interface TodoContextType {
  tasks: Task[] 
  filterTasks: Task[]
  // filterTasks: Task[]
  addTask: (task: Task) => void
  toggleTask: (id: number) => void
  removeTask: (id: number) => void
  allTask: () => void
  stateTask: (state: boolean) => void
  clearTask: () => void
}
