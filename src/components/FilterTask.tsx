import { useTodo } from "../context/TaskContext"

function FilterTask() {
  const { filterTasks, allTask, activeTask, completedTask, clearTask } = useTodo()
  return (
    <div className='flex justify-between p-4 md:p-5 mt-auto rounded-md bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlue text-sm text-DarkGrayishBlue w-full transition-colors duration-500 ease-in-out'>
      <h6>{filterTasks.length} items left</h6>
      <div className='flex justify-center gap-x-4 md:gap-x-2 dark:bg-VeryDarkDesaturatedBlue text-sm text-DarkGrayishBlue absolute md:static p-2 md:p-0 rounded-md md:rounded-none left-0 -bottom-12 bg-VeryLightGray w-[300px] md:w-min transition-colors duration-500 ease-in-out'>
        <button onClick={() => {
          allTask()
        }}>All</button>
        <button onClick={() => {
          activeTask()
        }}>Active</button>
        <button onClick={() => {
          completedTask()
        }}>Completed</button>
      </div>
      <button onClick={() => {
        clearTask()
      }}>Clear Completed</button>
    </div>
  )
}
export default FilterTask
