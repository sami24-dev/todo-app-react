import Header from './components/Header'
import NewTask from './components/NewTask'
import TodoList from './components/TodoList'
function App() {
  return (
    <>
      <Header />
      <main className='flex flex-col justify-center items-start w-[300px] md:w-[420px] lg:w-[500px] box-border mt-5 relative'>
        <NewTask />
        <TodoList />
      </main>
      <footer className='flex flex-col items-center px-20 pt-20 pb-10 md:pt-10'>
        <span className='text-xs text-DarkGrayishBlue mb-5'>
          Drag and drop to reader list
        </span>
      </footer>
    </>
  )
}

export default App
