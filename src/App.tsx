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

  // invoked every key stroke in input element
  const handleInputChange = (inputtedString: string) => {
    setInputtedText(inputtedString);
  }

  // toggle isCompleted to !isCompleted when clicked on circled button
  const handleUpdateTodo = (todoId: string) => {
    todos.dispatcher({
      type: "update_todo",
      payload: todoId
    })
  }

  // remove current todo when clicked on x icon
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

  // clear all completed todos when clicked on Clear Completed button
  const handleClearCompleted = () => {
        todos.dispatcher({type : "clear_completed"})
  }

  // Reorder todos by drag n dropping
  const handleReorder = (newTodoListOrder: Todo[]) => {
    todos.dispatcher({ type: "reorder", payload: newTodoListOrder })
  }

  return (
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
  )
}

export default App
