// components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// interface
import { ITask } from './interface/ITask';

import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [taskList, set] = useState<ITask[]>([]);

  return (
    <div>
      <Header/>
      <main className={ styles.main }>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar tarefa'/>  
        </div>
        <div>
          <h2>Lista de Tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
