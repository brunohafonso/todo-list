import { Header } from './components/Header'
import './global.css'

import styles from './App.module.css';
import { CreateTodoInput } from './components/CreateTodoInput';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';
import { generateRandomId } from './utils/generateRandomId';
import { useLocalStorage } from './hooks/UseLocalStorage';

export function App() {
  const { state: todos = [], setState: setTodos } = useLocalStorage<ITodo[]>('todos', []);

  const createNewTodo = (content: string) => {
    const newTodo: ITodo = {
      id: generateRandomId(),
      content,
      createdAt: new Date(),
      isDone: false,
    }
    
   setTodos((currentTodos) => [...currentTodos, newTodo]);
  }
  
  const deleteTodo = (id: string) => {
    setTodos((currentTodos) => currentTodos.filter(todo => todo.id !== id));
  }

  const toggleTodoAsDone = (id: string) => {
    setTodos((currentTodos) => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone
          }
        }
        
        return todo;
      })
    });
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <CreateTodoInput createTodo={createNewTodo} />
        <TodoList toggleTodoAsDone={toggleTodoAsDone} deleteTodo={deleteTodo} todos={todos} />
      </main>
    </div>
  )
}