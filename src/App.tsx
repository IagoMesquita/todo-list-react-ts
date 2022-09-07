// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// interface
import { useState } from "react";

import styles from "./App.module.css";

// interface
import { ITask } from "./interface/ITask";
import Modal from "./components/Model/indext";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    const newTask = taskList.filter((task) => task.id !== id);
    setTaskList(newTask);
  }

  return (
    <div>
      <Modal children={ <TaskForm  btnText="Editar Tarefa" taskList={taskList}/> }/>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Lista de Tarefas:</h2>
          <TaskList 
            taskList={taskList}
            deleteTask={deleteTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
