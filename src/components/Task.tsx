import {IconDelete} from './Icons'

function Task() {
  return (
    <li className='flex justify-between items-center w-full h-12 lg:h-16 p-4 font-medium border-b-[0.05rem] dark:border-b-VeryDarkGrayishBlue dark:hover:border-none dark:hover:shadow-md dark:hover:shadow-DarkGrayishBlue rounded-t-md hover:shadow-lg transition-all'>
      <label className='flex gap-x-5'>
        <input
          className=''
          type='checkbox'
        />
        <span>Estudiar React</span>
      </label>
      <button>
        <IconDelete />
      </button>
    </li>
  )
}
export default Task
