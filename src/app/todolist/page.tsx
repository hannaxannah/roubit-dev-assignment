import ToDoTitle from "../components/todolist/ToDoTitle";
import ToDoAdd from "../components/todolist/ToDoAdd";
import ToDoItems from "../components/todolist/ToDoItems";
import ToDoProgress from "../components/todolist/ToDoPrgress";

export default function ToDoList() {
  return (
    <>
      <ToDoTitle /> {/* 타이틀 컴포넌트 */}
      <ToDoAdd /> {/* ToDo 추가 컴포넌트 */}
      <ToDoItems /> {/* ToDo 목록 컴포넌트 */}
      <ToDoProgress /> {/* ToDo 진행률 컴포넌트 */}
    </>
  );
}
