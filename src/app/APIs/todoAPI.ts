import axios from "axios";
import { GRAPHQL_ENDPOINT } from "./endPoint";
import {
  GET_TODOS_QUERY,
  CREATE_TODO_QUERY,
  DELETE_TODO_QUERY,
  CHECK_TODO_QUERY,
  UPDATE_TODO_QUERY,
} from "./todoQuery";
import { Todo } from "../todolist/page";

let accessToken: string | null = null;

if (typeof window !== "undefined") {
  accessToken = localStorage.getItem("accessToken");
}

export const fetchGetTodos = async (): Promise<Todo[]> => {
  try {
    const response = await axios.post(
      GRAPHQL_ENDPOINT,
      {
        query: GET_TODOS_QUERY,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const fetchedTodos = response.data.data.todolist.data.todolist;
    if (fetchedTodos !== null) return fetchedTodos;
    else return [];
  } catch (error) {
    console.error("graphql: ", error);
    return [];
  }
};

export const fetchCreateTodo = async (title: string) => {
  try {
    const response = await axios.post(
      GRAPHQL_ENDPOINT,
      {
        query: CREATE_TODO_QUERY,
        variables: {
          input: {
            title: title,
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const fetchedCreatedTodo = response.data.data.createTodoList.data.todolist;
    // console.log(fetchedCreatedTodo);
    return fetchedCreatedTodo;
  } catch (error) {
    console.error("graphql: ", error);
  }
};

export const fetchDeleteTodo = async (id: string) => {
  try {
    const response = await axios.post(
      GRAPHQL_ENDPOINT,
      {
        query: DELETE_TODO_QUERY,
        variables: {
          input: {
            id: id,
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const fetchedDeletedTodo =
      response.data.data.deletedTodolist.data.todolist.id;
    // console.log(fetchedDeletedTodo);
    return fetchedDeletedTodo;
  } catch (error) {
    console.error("graphql: ", error);
  }
};

export const fetchCheckTodo = async (id: string, completed: boolean) => {
  try {
    const response = await axios.post(
      GRAPHQL_ENDPOINT,
      {
        query: CHECK_TODO_QUERY,
        variables: {
          input: {
            id: id,
            completed: completed,
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const fetchedCheckedTodo =
      response.data.data.updateTodolistCompleted.data.todolist;
    return fetchedCheckedTodo;
  } catch (error) {
    console.error("graphql: ", error);
  }
};

export const fetchUpdateTodo = async (id: string, title: string) => {
  try {
    const response = await axios.post(
      GRAPHQL_ENDPOINT,
      {
        query: UPDATE_TODO_QUERY,
        variables: {
          input: {
            id: id,
            title: title,
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const fetchedUpdatedTodo =
      response.data.data.updateTodolistTitle.data.todolist;
    return fetchedUpdatedTodo;
  } catch (error) {
    console.error("graphql: ", error);
  }
};
