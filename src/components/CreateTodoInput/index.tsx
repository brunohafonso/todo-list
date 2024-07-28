import { PlusCircle } from "@phosphor-icons/react";
import { Button } from "../Button";
import { Input } from "../Input"
import styles from './CreateTodoInput.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface ICreateTodoInputProps {
  createTodo: (content: string) => void;
}

export const CreateTodoInput = ({ createTodo }: ICreateTodoInputProps) => {
  const [todoContent, setTodoContent] = useState('');
  const [isInputInvalid, setIsInputInvalid] = useState(false);

  const handleInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsInputInvalid(false);
    setTodoContent(event.target.value);
  }

  const handleCreateNewTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTodo(todoContent);
    setTodoContent('');
  }

  const handleTodoContentInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.preventDefault();
    setIsInputInvalid(true);
  }

  return (
    <form onSubmit={handleCreateNewTodo} className={styles.wrapper}>
      <div>
        <Input
          value={todoContent}
          type="text"
          placeholder='Adicione uma nova tarefa'
          onChange={handleInputValueChange}
          onInvalid={handleTodoContentInvalid}
          isInvalid={!isInputInvalid}
          required
        />
        {isInputInvalid && <small>Você deve informar a descrição da tarefa.</small>}
      </div>
      <Button type="submit">
        Criar
        <PlusCircle size={20} />
      </Button>
    </form>
  )
}