import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { ITask } from "../../interface/ITask";

import styles from './TaskForm.module.css';

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  taskToUpdate?: ITask | null;
}

function TaskForm({ btnText, taskList, setTaskList, taskToUpdate }: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if(taskToUpdate) {
      setId(taskToUpdate.id);
      setTitle(taskToUpdate.title);
      setDifficulty(taskToUpdate.difficulty);
    }
  }, [taskToUpdate])

  const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);
    const newTasK: ITask = {
      id,
      title,
      difficulty
    };

    // ! forçar o elemento opcional a vir
    setTaskList!([...taskList, newTasK]);

    setTitle('');
    setDifficulty(0);

  };

  // outra opção é criar uma função
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.name === 'title') {
  //     setTitle(e.target.value);
  //   } else {
  //     setDifficuty(Number(e.target.value));
  //   }
  // };

  return (
    <form onSubmit={ addTaskHandle } className={ styles.form }>
      <label className={ styles.input_container }>
        <span>Título:</span>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          // onChange={ handleChange }
          value={ title }
        />
      </label>

      <label className={ styles.input_container }>
        <span>Dificuldade:</span>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDifficulty(Number(e.target.value))}
          // onChange={ handleChange }
          value={ difficulty }
        />
      </label>
      <input type="submit" value={btnText} />
    </form>
  );
}

export default TaskForm;
