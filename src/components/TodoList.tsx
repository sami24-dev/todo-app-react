import FilterTask from './FilterTask'
import Task from './Task'

function TodoList() {
  return (
    <article className='flex flex-col justify-start items-center w-full rounded-md bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlue relative min-h-80 max-h-96 transition-colors duration-500 ease-in-out'>
      <ul className='w-[300px] md:w-[420px] lg:w-[500px] rounded-t-md overflow-y-auto overflow-x-hidden relative pb-2 text-VeryDarkGrayishBlue dark:text-DarkGrayishBlue transition-colors duration-500 ease-in-out'>
        <Task />
      </ul>
      <FilterTask />
    </article>
  )
}
export default TodoList
