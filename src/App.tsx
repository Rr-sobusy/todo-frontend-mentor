import { useMediaQuery } from 'react-responsive'
import LayoutWrapper from './components/LayoutWrapper'
import MainContainer from './components/MainContainer'

import type { Todo } from './providers/TodoProvider'

// utils
import { generateRandomId } from './libs/utils'

// contexts
import { useTheme } from './providers/ThemeProvider'
import { useTodos } from './providers/TodoProvider'
import { useState } from 'react'

const randomIdlength = 7;

function App() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark"
  const isPhone = useMediaQuery({ maxWidth: 768 })

  const [inputtedText, setInputtedText] = useState<string>("")

  const { todoContext: todos } = useTodos();

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  const handleInputChange = (inputtedString: string) => {
    setInputtedText(inputtedString);
  }

  const handleUpdateTodo = (todo: string) => {
    todos.dispatcher({
      type: "update_todo",
      payload: todo
    })
  }

  const handleRemoveTodo = (todoId: string) => {
    todos.dispatcher({ type: "remove_todo", payload: todoId });
  }

  // when pressed enter in the keyboard and input != null
  const handleSubmitTodo = () => {
    if (inputtedText) {
      const payload: Todo = {
        id: generateRandomId({ length: randomIdlength }),
        todoTitle: inputtedText,
        isCompleted: false
      }
      todos.dispatcher({ type: "create_todo", payload: payload })
      setInputtedText("");
    }
  }

  const handleClearCompleted = () => {
        todos.dispatcher({type : "clear_completed"})
  }

  const handleReorder = (newTodoListOrder: Todo[]) => {
    todos.dispatcher({ type: "reorder", payload: newTodoListOrder })
  }

  return (
    <>
      <LayoutWrapper
        isPhone={isPhone}
        isDarkMode={isDarkMode}>
        <MainContainer
          handleUpdateTodo={handleUpdateTodo}
          handleClearCompleted={handleClearCompleted}
          handleReorder={handleReorder}
          inputtedText={inputtedText}
          handleInputChange={handleInputChange}
          handleSubmitTodo={handleSubmitTodo}
          handleRemoveTodo={handleRemoveTodo}
          todos={todos.todos}
          isPhone={isPhone}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme} />
      </LayoutWrapper>
    </>
  )
}

export default App
