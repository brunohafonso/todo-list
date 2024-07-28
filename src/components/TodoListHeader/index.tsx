import { ITodo } from '../../interfaces';
import styles from './TodoListHeader.module.css';

interface ITodoListHeaderProps {
  todos: ITodo[];
}

export const TodoListHeader = ({ todos }: ITodoListHeaderProps) => {
  const hasTodos = !!todos.length
  const quantityOfTodos = todos.length;
  const quantityOfTodosThatIsDone = todos.filter(todo => todo.isDone).length;

  
  return (
    <header className={!hasTodos ? styles.todoListHeader : styles.todoListHeaderWithoutBorder}>
    <div className={styles.label}>
      <p>Tarefas Criadas</p>
      <span>{quantityOfTodos}</span>
    </div>
    <div className={styles.label}>
      <p>Concluídas</p>
      <span>{hasTodos ? `${quantityOfTodosThatIsDone} de ${quantityOfTodos}` : 0}</span>
    </div>
  </header>
  )
}