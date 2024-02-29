function FilterTask() {
  return (
    <div className='invisible flex justify-between p-4 md:p-5 mt-auto rounded-md bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlue text-sm text-DarkGrayishBlue w-full transition-colors duration-500 ease-in-out'>
      <h6>5 items left</h6>
      <div className='flex justify-center gap-x-4 md:gap-x-2 dark:bg-VeryDarkDesaturatedBlue text-sm text-DarkGrayishBlue absolute md:static p-2 md:p-0 rounded-md md:rounded-none left-0 -bottom-12 bg-VeryLightGray w-[300px] md:w-min transition-colors duration-500 ease-in-out'>
        <h6>All</h6>
        <h6>Active</h6>
        <h6>Completed</h6>
      </div>
      <h6>Clear Completed</h6>
    </div>
  )
}
export default FilterTask
