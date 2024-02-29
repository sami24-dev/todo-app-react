import {ChangeEvent, useId, useState} from 'react'
import {Task} from '../model/Model'
import {IconButton} from './Icons'

function NewTask() {
  const uid = useId()
  const [newTask, setNewTask] = useState<Task>({
    id: uid,
    task: '',
    completed: false
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.target
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }))
  }
  return (
    <article className='flex justify-between items-center w-full mb-12'>
      <div className='w-[300px] md:w-[420px] lg:w-[500px] relative'>
        <input
          className='w-full h-12 lg:h-16 pl-4 text-base dark:bg-VeryDarkDesaturatedBlue text-VeryDarkDesaturatedBlue dark:text-DarkGrayishBlue font-medium outline-none appearance-none rounded-md transition-colors duration-500 ease-in-out'
          type='text'
          name='task'
          value={newTask.task}
          onChange={handleChange}
          placeholder='Create a new todo...'
          autoFocus
        />
        <button className='flex justify-center items-center absolute top-0 right-0 size-12 lg:size-16 bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlue text-VeryDarkGrayishBlue dark:text-VeryLightGray font-bold text-2xl rounded-md transition-colors duration-500 ease-in-out'>
          <IconButton />
        </button>
      </div>
    </article>
  )
}
export default NewTask
