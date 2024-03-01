import { useTodo } from '../context/TaskContext'
import Check from '../images/cheque1.png'
import FilterTask from './FilterTask'
import { IconDelete } from './Icons'
function TodoList() {
  const { filterTasks, removeTask, toggleTask } = useTodo()
  return (
    <article className='flex flex-col justify-start items-center w-full rounded-md bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlue relative min-h-80 max-h-96 transition-colors duration-500 ease-in-out'>
      <img src="" alt="" />
      <ul className='w-[300px] md:w-[420px] lg:w-[500px] rounded-t-md overflow-y-auto overflow-x-hidden relative pb-2 text-VeryDarkGrayishBlue dark:text-DarkGrayishBlue transition-colors duration-500 ease-in-out'>
        {filterTasks.map((task) => (
          <li
            key={task.id}
            className='flex justify-between items-center w-full h-12 lg:h-16 p-4 font-medium border-b-[0.05rem] dark:border-b-VeryDarkGrayishBlue dark:hover:border-none dark:hover:shadow-md dark:hover:shadow-DarkGrayishBlue rounded-t-md hover:shadow-lg transition-all'>
            <div className='flex items-center gap-x-5'>
              <button onClick={() => {
                toggleTask(task.id)
              }} className='size-5 rounded-full border border-VeryDarkGrayishBlue ' >
                {task.completed && <img className='size-5 w-full' src={Check} alt="Check" />}
              </button>
              <span>{task.task}</span>
            </div>
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
