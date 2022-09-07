import React, { useState, ChangeEvent, FormEvent } from "react";

import styles from './TaskForm.module.css';

interface Props {
  btnText: string;
}

function TaskForm({ btnText }: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficuty] = useState<number>();

  const addTaskHandle = () => {
    // e.preventDefault();

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
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDifficuty(Number(e.target.value))}
          // onChange={ handleChange }
          value={ difficulty }
        />
      </label>
      <input type="submit" value={btnText} />
    </form>
  );
}

export default TaskForm;
