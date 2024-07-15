import ToDoTitle from "../components/todolist/ToDoTitle";
import ToDo from "../components/todolist/ToDo";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const ToDoList = () => {
  return (
    <>
      <ToDoTitle />
      <ToDo />
    </>
  );
};

export default ToDoList;
