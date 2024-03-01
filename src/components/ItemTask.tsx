import { Task } from '../model/Model'
import { IconDelete } from './Icons'
import Check from '../images/cheque1.png'
import { useTodo } from '../context/TaskContext'

function ItemTask({task}:{task:Task}) {
  const {  removeTask, toggleTask } = useTodo()
  return (
    <li
      key={task.id}
      className='task'>
      <div className='flex items-center gap-x-5'>
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
