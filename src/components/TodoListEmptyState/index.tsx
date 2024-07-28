import styles from './TodoListEmptyState.module.css';
import Clipboard from '../../assets/Clipboard.svg';

export const TodoListEmptyState = () => {
  return (
    <div className={styles.TodoListEmptyState}>
      <img src={Clipboard} alt="Icone de uma prancheta com alista de tarefas" />
      <p>
        Você ainda não tem tarefas cadastradas
        <span>
          Crie tarefas e organize seus itens a fazer.
        </span>
      </p>
    </div>
  )
}