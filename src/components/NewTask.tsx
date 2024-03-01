import { ChangeEvent, useState } from 'react'
import { useTodo } from '../context/TaskContext'
import { Task } from '../model/Model'
import { IconButton } from './Icons'

function NewTask() {
  const { addTask } = useTodo()
  const [task, setTask] = useState<Task>({
    id: 0,
    task: '',
    completed: false
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { value, } = e.target
    setTask({
      ...task,
      id: Math.random(),
      task: value
    })
  }
  const handleSubmit = () => {
    if (task.task !== '' && task.task.trim()) {
      addTask(task)
      setTask({ ...task, task: '' })
    }
  }
  return (
    <article className='flex justify-between items-center w-full mb-8 lg:mb-12'>
      <div className='w-[300px] md:w-[420px] lg:w-[500px] relative'>
        <input
          className='w-full h-12 lg:h-16 pl-4 text-base dark:bg-VeryDarkDesaturatedBlue text-VeryDarkDesaturatedBlue dark:text-DarkGrayishBlue font-medium outline-none appearance-none rounded-md transition-colors duration-500 ease-in-out'
          type='text'
          value={task.task}
          onChange={handleChange}
          placeholder='Create a new todo...'
          autoFocus
        />
        <button
          onClick={handleSubmit}
          className='flex justify-center items-center absolute top-0 right-0 size-12 lg:size-16 bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlue text-VeryDarkGrayishBlue dark:text-VeryLightGray font-bold text-2xl rounded-md transition-colors duration-500 ease-in-out'>
          <IconButton />
        </button>
      </div>
    </article>
  )
}
export default NewTask
