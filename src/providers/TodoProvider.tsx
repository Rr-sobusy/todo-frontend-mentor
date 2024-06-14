import React, { Dispatch, createContext, useContext, useEffect, useReducer } from "react";

// handlers
type Actions = {
    type: "create_todo",
    payload: Todo
} | {
    type: "remove_todo",
    payload: string // todo_id
} | {
    type: "update_todo",
    payload: string //todo_id
} | {
    type: "clear_completed",
    payload?: null;
} | {
    type: "reorder",
    payload: Todo[]
}
export type Todo = {
    id: string
    todoTitle: string
    isCompleted: boolean
}

interface TodosProviderProps {
    children?: React.ReactNode
    storageKey?: string
}

interface TodoProviderState {
    todos: Todo[]
    dispatcher: Dispatch<Actions>
}

const defaultTodos: Todo[] = [{
    id: "13asrar",
    todoTitle: "Explore new things",
    isCompleted: false
}]


const reducer = (state: Todo[], action: Actions): Todo[] => {
    switch (action.type) {
        case "create_todo": // create a new todo
            return [action.payload, ...state];
        case "remove_todo": // remove todo when click on X icon
            return state.filter((todos) => todos.id !== action.payload);
        case "clear_completed":
            return state.filter((todos) => !todos.isCompleted)
        case "update_todo": // modify isCompleted state in storage when clicked the rounded toggler button  
            {
                const currentState = [...state];
                const todoIndex = currentState.findIndex((todo) => todo.id === action.payload);
                currentState[todoIndex] = {
                    ...currentState[todoIndex],
                    isCompleted: !currentState[todoIndex].isCompleted,
                }
                return currentState;
            }
        case "reorder": // handle drag and drop feature  
            return action.payload
        default:
            return state;
    }
}

const TodoProviderContext = createContext<TodoProviderState>({ todos: defaultTodos, dispatcher: () => null })

export function TodosProvider({ children, storageKey = "vite-todo" }: TodosProviderProps) {

    /**
     * Create an instance of local storage. 
     */
    const [todos, dispatcher] = useReducer(reducer, [], () => {
        const storage = localStorage.getItem(storageKey);
        return storage ? JSON.parse(storage) : defaultTodos;
    });

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(todos))
    }, [todos, storageKey])

    const value = {
        todos,
        dispatcher
    }
    return (
        <TodoProviderContext.Provider value={value}>
            {children}
        </TodoProviderContext.Provider>
    )
}

export const useTodos = () => {
    const todoContext = useContext(TodoProviderContext);

    if (todoContext === undefined)
        throw new Error("useTodos must be used within the child of TodoContextProvider");
    return { todoContext }
}




