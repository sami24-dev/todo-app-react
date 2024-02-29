import {IconGit, IconMoon, IconSun} from './Icons'

function Header() {
  return (
    <header className='flex justify-center items-center md:mt-10 lg:mt-16 w-[300px] md:w-[420px] lg:w-[500px] text-VeryLightGrayishBlue dark:text-VeryLightGray'>
      <div className='z-50 flex justify-between items-center w-full'>
        <h1 className='lg:text-5xl tracking-[0.2em] text-start font-medium'>TODO</h1>
        <div className='flex justify-center items-center'>
          <a
            href=''
            target='_blank'
            rel='nofollow noopener'>
            <IconGit />
          </a>
          <button className='flex justify-end items-center size-14 z-30'>
            <IconMoon />
            <IconSun />
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header
