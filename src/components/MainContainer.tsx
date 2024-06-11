import React from 'react'
import SimpleBar from 'simplebar-react'
import { useTodos } from '@/providers/TodoProvider';

// icons
import Sun from '../assets/icon-sun.svg';
import Moon from '../assets/icon-moon.svg';

type MainContainerProps = {
  isDarkMode: boolean;
  toggleTheme: () => void
}

const MainContainer = ({ isDarkMode, toggleTheme }: MainContainerProps) => {
  const { todoContext } = useTodos();
  const Icon = isDarkMode ? Sun : Moon;
  return (
    <div className="w-[90%] md:max-w-[550px] mx-auto absolute top-[3rem]">

      {/* **** Header ***** */}
      <div className="flex justify-between items-center">
        <h2 className={`font-semibold text-4xl text-background tracking-wider`}>TODO</h2>
        <img onClick={toggleTheme} className="w-7 h-7 cursor-pointer" src={Icon} alt="" />
      </div>

      {/******** Add todo input ****** */}
      <div className={`h-12 mt-7 pl-4 flex relative gap-3 items-center rounded-md`}>
        <div className={`h-6 w-6 rounded-full absolute z-20 border ${isDarkMode ? 'border-backgroundAccent' : 'border-foregroundAccent'}`}></div>
        <input placeholder='Enter new todo. . .' className={`absolute font-sans tracking-wide text-sm font-medium outline-none rounded-md left-0 h-full w-full pl-12 pr-4 z-10 top-0 ${isDarkMode ? 'bg-foregroundAccent text-white outline-[1px]' : 'bg-backgroundAccent text-foreground'}`} type="text" />
      </div>

      {/* ****** Todo Container ******/}
      <SimpleBar className="border rounded-md border-black w-full md:h-[550px] h-[350px] mt-7">
        <h2 onClick={() => console.log(todoContext.todos)} className="text-4xl font-bold">rex</h2>
        <h2 onClick={() => {
          todoContext.dispatcher({
            type: "create_todo", payload: {
              id: 1,
              todoTitle: "my name is rex",
              isCompleted: false
            }
          })
        }} className="text-4xl font-bold">rex</h2>
        <h2 className="text-4xl font-bold">rex</h2>
      </SimpleBar>
    </div>
  )
}

export default MainContainer