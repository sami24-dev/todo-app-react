import { useTodo } from '../context/TaskContext'
import Check from '../images/cheque1.png'
import { Task } from '../model/Model'
import { IconDelete } from './Icons'

function ItemTask({ task }: { task: Task }) {
  const { removeTask, toggleTask } = useTodo()
  return (
    <li
      key={task.id}
      className='task'>
      <div className='flex items-center gap-x-5 text-base md:text-xl capitalize'>
        <button onClick={() => toggleTask(task.id)} className='check' >
          {task.completed && <img className='size-5 w-full' src={Check} alt="Check" />}
        </button>
        <span className={task.completed ? 'opacity-70 line-through' : ''}>{task.task}</span>
      </div>
      <button onClick={() => removeTask(task.id)}>
        <IconDelete />
      </button>
    </li>
  )
}
export default ItemTask
