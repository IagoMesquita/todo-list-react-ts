import style from './TaskList.module.css';

import { ITask } from "../../interface/ITask";

type Props = {
  taskList: ITask[];
};

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={ style.task }>
            <div className={ style.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade:{task.difficulty}</p>
            </div>
            <div className={ style.actions }>
              <i className="bi bi-pencil"></i>
              <i className="bi bi-trash"></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  );
};

export default TaskList;
