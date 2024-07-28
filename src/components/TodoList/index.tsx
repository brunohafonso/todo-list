import { TodoListEmptyState } from '../TodoListEmptyState';
import styles from './TodoList.module.css';
import { ITodo } from '../../interfaces';
import { Todo } from '../Todo';
import { TodoListHeader } from '../TodoListHeader';

interface ITodoListProps {
  todos: ITodo[];
  toggleTodoAsDone: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoList = ({ todos, deleteTodo, toggleTodoAsDone }: ITodoListProps) => {
  return (
    <div className={styles.todoList}>
      <TodoListHeader todos={todos} />
      {!todos.length  && <TodoListEmptyState />}
      <div className={styles.todosWrapper}>
        {todos.map(todo => {
          return (
            <Todo toggleTodoAsDone={toggleTodoAsDone} deleteTodo={deleteTodo} key={todo.id} todo={todo} />
          )
        })}
      </div>
    </div>
  )
}