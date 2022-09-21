import { useState } from "react";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

// interface
import { ITask } from "./interface/ITask";

import styles from "./App.module.css";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    const newTask = taskList.filter((task) => task.id !== id);
    setTaskList(newTask);
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask) => {
    hideOrShowModal(true);
    setToUpdate(task);
  };

  return (
    <div>
      <Modal
        children={
          <TaskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
            taskToUpdate={taskToUpdate}
          />
        }
      />
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
            editTask={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
