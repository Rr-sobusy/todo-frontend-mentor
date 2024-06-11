import React, { Dispatch, createContext, useContext, useEffect, useReducer } from "react";

type Actions = {
    type: "create_todo",
    payload: Todo
} | {
    type: "remove_todo",
    payload: number
}

type Todo = {
    id: number
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
    id: 0,
    todoTitle: "Explore things",
    isCompleted: false
}]


const reducer = (state: Todo[], action: Actions): Todo[] => {
    switch (action.type) {
        case "create_todo":
            return [...state, action.payload];
        default:
            return [...state];
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

    useEffect(()=>{

    },[])

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
        throw new Error("useTodos must me used within the context");
    return { todoContext }
}



