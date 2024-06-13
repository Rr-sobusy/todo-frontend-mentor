import React from 'react';
import SimpleBar from 'simplebar-react'
import type { Todo } from '@/providers/TodoProvider';

// icons
import Sun from '../assets/icon-sun.svg';
import Moon from '../assets/icon-moon.svg';
import Close from '../assets/icon-cross.svg'
import Check from '../assets/icon-check.svg'


type MainContainerProps = {
  isDarkMode: boolean;
  toggleTheme: () => void
  todos: Todo[]
  handleRemoveTodo: (id: string) => void
  handleSubmitTodo: () => void
  handleUpdateTodo: (id: string) => void;
  handleInputChange: (event: string) => void
  inputtedText: string
}

const MainContainer = ({ isDarkMode, toggleTheme, todos = [], handleRemoveTodo, handleSubmitTodo, handleUpdateTodo, handleInputChange, inputtedText }: MainContainerProps) => {

  const Icon = isDarkMode ? Sun : Moon;

  
  return (
    <div className="w-[90%] md:max-w-[550px] mx-auto absolute top-[3rem]">

      {/* **** Header ***** */}
      <div className="flex items-center justify-between">
        <h2 className={`font-semibold text-4xl text-slate-100 tracking-wider`}>TODO</h2>
        <img onClick={toggleTheme} className="cursor-pointer w-7 h-7" src={Icon} alt="" />
      </div>

      {/******** Add todo input ****** */}
      <div className={`h-12 mt-7 pl-4 flex relative gap-3 items-center rounded-md`}>
        <div className={`h-6 w-6 rounded-full absolute z-20 border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}></div>
        <input value={inputtedText} onChange={(event) => handleInputChange(event.target.value)} onKeyDown={(event) => {
          if (event.key === "Enter")
            handleSubmitTodo();
        }} placeholder='Enter new todo. . .' className={`absolute font-sans tracking-wide text-sm font-medium outline-none rounded-md left-0 h-full w-full pl-12 pr-4 z-10 top-0 ${isDarkMode ? 'bg-foregroundAccent text-white outline-[1px]' : 'bg-backgroundAccent text-foreground'}`} type="text" />
      </div>


      <SimpleBar className={`rounded-md w-full md:h-[350px] h-[550px] mt-7 ${isDarkMode ? 'bg-foregroundAccent' : 'bg-backgroundAccent'}`}>
        {
          todos.map((todo, index) => {
            return (
              <div key={index} className={`h-10 flex gap-3 text-sm font-medium font-sans items-center border-b px-3 ${isDarkMode ? 'text-background border-slate-600' : 'text-foreground border-slate-200'}`}>
                <div onClick={() => handleUpdateTodo(todo.id)} className={`h-5 w-5 rounded-full cursor-pointer flex justify-center items-center ${isDarkMode ? 'border border-slate-700' : 'border border-slate-200'} ${todo.isCompleted && 'bg-gradient-to-b'} from-blue-300 to-indigo-500`}>
                  {
                    todo.isCompleted && <img width={9} height={9} className='object-contain' src={Check} alt="" />
                  }
                </div>
                <p>{todo.todoTitle}</p>
                <img onClick={() => handleRemoveTodo(todo.id)} width={11} height={11} className="absolute right-5 cursor-pointer" src={Close} alt="" />
              </div>
            )
          })
        }
      </SimpleBar>
    </div>
  )
}

export default MainContainer 