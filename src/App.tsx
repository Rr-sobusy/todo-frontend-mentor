import { useMediaQuery } from 'react-responsive'
import LayoutWrapper from './components/LayoutWrapper'
import MainContainer from './components/MainContainer'

// utils
import { generateRandomId } from './lib/utils'

// contexts
import { useTheme } from './providers/ThemeProvider'
import { useTodos } from './providers/TodoProvider'
import { useState } from 'react'

function App() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark"
  const isPhone = useMediaQuery({ maxWidth: 640 })

  const [inputtedText, setInputtedText] = useState<string>("")

  const { todoContext: todos } = useTodos();

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  const handleInputChange = (e: string) => {
    setInputtedText(e);
  }

  const handleRemoveTodo = (id: string) => {
    todos.dispatcher({ type: "remove_todo", payload: id });
  }
  
  const handleSubmitTodo = () => {
    if (inputtedText) {
      const payload = {
        id: generateRandomId({ length: 7 }),
        todoTitle: inputtedText,
        isCompleted: false
      }
      todos.dispatcher({ type: "create_todo", payload: payload })
      setInputtedText("");
    }
  }



  return (
    <>
      <LayoutWrapper
        isPhone={isPhone}
        isDarkMode={isDarkMode}>
        <MainContainer
          inputtedText={inputtedText}
          handleInputChange={handleInputChange}
          handleSubmitTodo={handleSubmitTodo}
          handleRemoveTodo={handleRemoveTodo}
          todos={todos.todos}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme} />
      </LayoutWrapper>
    </>
  )
}

export default App
