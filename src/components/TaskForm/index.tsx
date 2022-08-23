// import { useState } from "react";

import styles from './TaskForm.module.css';

interface Props {
  btnText: string;
}

function TaskForm({ btnText }: Props) {
  // const [task, setTask] = useState('');
  // const [taskList, setTaskList] = useState([]);

  // const handleSubmit = (e:) => {
  //   e.preventDefault();

  // };

  return (
    <form className={ styles.form }>
      <label className={ styles.input_container }>
        <span>Título:</span>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          // onChange={(e) => setTask(e.target.value)}
        />
      </label>

      <label className={ styles.input_container }>
        <span>Dificuldade:</span>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          // onChange={(e) => setTask(e.target.value)}
        />
      </label>
      <input type="submit" value={btnText} />
    </form>
  );
}

export default TaskForm;
