import SimpleBar from 'simplebar-react'
import { useTodos } from '@/providers/TodoProvider';
import type { Todo } from '@/providers/TodoProvider';

// icons
import Sun from '../assets/icon-sun.svg';
import Moon from '../assets/icon-moon.svg';

type MainContainerProps = {
  isDarkMode: boolean;
  toggleTheme: () => void
  todos: Todo[]
  handleRemoveTodo: (id: string) => void
  handleSubmitTodo: () => void
  handleInputChange: (event:string) => void
}

const MainContainer = ({ isDarkMode, toggleTheme, todos = [], handleRemoveTodo, handleSubmitTodo, handleInputChange }: MainContainerProps) => {

  const { todoContext } = useTodos();
  const Icon = isDarkMode ? Sun : Moon;

  console.log("rerendered")
  return (
    <div className="w-[90%] md:max-w-[550px] mx-auto absolute top-[3rem]">

      {/* **** Header ***** */}
      <div className="flex items-center justify-between">
        <h2 className={`font-semibold text-4xl text-background tracking-wider`}>TODO</h2>
        <img onClick={toggleTheme} className="cursor-pointer w-7 h-7" src={Icon} alt="" />
      </div>

      {/******** Add todo input ****** */}
      <div className={`h-12 mt-7 pl-4 flex relative gap-3 items-center rounded-md`}>
        <div className={`h-6 w-6 rounded-full absolute z-20 border ${isDarkMode ? 'border-backgroundAccent' : 'border-foregroundAccent'}`}></div>
        <input onChange={(event)=>handleInputChange(event.target.value)} onKeyDown={(event) => {
          if (event.key === "Enter")
            handleSubmitTodo();
        }} placeholder='Enter new todo. . .' className={`absolute font-sans tracking-wide text-sm font-medium outline-none rounded-md left-0 h-full w-full pl-12 pr-4 z-10 top-0 ${isDarkMode ? 'bg-foregroundAccent text-white outline-[1px]' : 'bg-backgroundAccent text-foreground'}`} type="text" />
      </div>

      { }
      <SimpleBar className="border rounded-md border-black w-full md:max-h-[550px] h-[350px] mt-7">
        {
          todos.map((content) => {
            return <p className="relative py-2 border-b">{content.todoTitle}
              <span onClick={()=>handleRemoveTodo(content.id)} className="absolute cursor-pointer right-2">x</span></p>
          })
        }
      </SimpleBar>
    </div>
  )
}

export default MainContainer