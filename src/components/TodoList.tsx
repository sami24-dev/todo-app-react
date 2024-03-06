import { useTodo } from '../context/TaskContext'
import FilterTask from './FilterTask'
import ItemTask from './ItemTask'
function TodoList() {
  const { filterTasks } = useTodo()
  return (
    <article className='contain-task'>
      <ul className='todo-task'>
        {filterTasks.map((task) => (
          <ItemTask key={task.id} task={task} />
        ))}
      </ul>
      <FilterTask />
    </article>
  )
}
export default TodoList
