import {useTodo} from '../context/TaskContext'
import FilterTask from './FilterTask'
import {IconDelete} from './Icons'
function TodoList() {
  const {tasks, removeTask} = useTodo()
  return (
    <article className='flex flex-col justify-start items-center w-full rounded-md bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlue relative min-h-80 max-h-96 transition-colors duration-500 ease-in-out'>
      <ul className='w-[300px] md:w-[420px] lg:w-[500px] rounded-t-md overflow-y-auto overflow-x-hidden relative pb-2 text-VeryDarkGrayishBlue dark:text-DarkGrayishBlue transition-colors duration-500 ease-in-out'>
        {tasks.map((task) => (
          <li
            key={task.id}
            className='flex justify-between items-center w-full h-12 lg:h-16 p-4 font-medium border-b-[0.05rem] dark:border-b-VeryDarkGrayishBlue dark:hover:border-none dark:hover:shadow-md dark:hover:shadow-DarkGrayishBlue rounded-t-md hover:shadow-lg transition-all'>
            <label className='flex gap-x-5'>
              <input
                className=''
                type='checkbox'
              />
              <span>{task.task}</span>
            </label>
            <button
              onClick={() => {
                removeTask(task.id)
              }}>
              <IconDelete />
            </button>
          </li>
        ))}
      </ul>
      <FilterTask />
    </article>
  )
}
export default TodoList
