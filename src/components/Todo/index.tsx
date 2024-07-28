import { Check, Trash } from '@phosphor-icons/react';
import { ITodo } from '../../interfaces';
import styles from './Todo.module.css';

interface ITodoProps {
  todo: ITodo;
  deleteTodo: (id: string) => void;
  toggleTodoAsDone: (id: string) => void;
}

export const Todo = ({ todo, deleteTodo, toggleTodoAsDone }: ITodoProps) => {
  const isTodoDone = todo.isDone;

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  }

  const handleToggleTodoAsDone = () => {
    toggleTodoAsDone(todo.id);
  }

  return (
    <div className={styles.todo}>
      <div>
        <input checked={todo.isDone} onChange={handleToggleTodoAsDone} id={todo.id} name='isDone' type='checkbox' />
        <label htmlFor={todo.id}>
          {isTodoDone && <Check size={10} />}
        </label>
      </div>
      <p className={isTodoDone ? styles['is-done'] : undefined}>{todo.content}</p>
      <button onClick={handleDeleteTodo}>
        <Trash size={16} />
      </button>
    </div>
  )
}