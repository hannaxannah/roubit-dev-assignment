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

// axios 인스턴스 생성
const api = axios.create({
  baseURL: GRAPHQL_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

// 인터셉터를 사용하여 모든 요청에 토큰 추가
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const fetchGetTodos = async (): Promise<Todo[]> => {
  try {
    const response = await api.post("", {
      query: GET_TODOS_QUERY,
    });
    const fetchedTodos = response.data.data.todolist.data.todolist;
    return fetchedTodos !== null ? fetchedTodos : [];
  } catch (error) {
    console.error("graphql: ", error);
    return [];
  }
};

export const fetchCreateTodo = async (title: string) => {
  try {
    const response = await api.post("", {
      query: CREATE_TODO_QUERY,
      variables: {
        input: {
          title: title,
        },
      },
    });
    const fetchedCreatedTodo = response.data.data.createTodoList.data.todolist;
    // console.log(fetchedCreatedTodo);
    return fetchedCreatedTodo;
  } catch (error) {
    console.error("graphql: ", error);
  }
};

export const fetchDeleteTodo = async (id: string) => {
  try {
    const response = await api.post("", {
      query: DELETE_TODO_QUERY,
      variables: {
        input: {
          id: id,
        },
      },
    });
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
    const response = await api.post("", {
      query: CHECK_TODO_QUERY,
      variables: {
        input: {
          id: id,
          completed: completed,
        },
      },
    });
    const fetchedCheckedTodo =
      response.data.data.updateTodolistCompleted.data.todolist;
    return fetchedCheckedTodo;
  } catch (error) {
    console.error("graphql: ", error);
  }
};

export const fetchUpdateTodo = async (id: string, title: string) => {
  try {
    const response = await api.post("", {
      query: UPDATE_TODO_QUERY,
      variables: {
        input: {
          id: id,
          title: title,
        },
      },
    });
    const fetchedUpdatedTodo =
      response.data.data.updateTodolistTitle.data.todolist;
    return fetchedUpdatedTodo;
  } catch (error) {
    console.error("graphql: ", error);
  }
};
