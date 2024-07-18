export const GET_TODOS_QUERY = `
      query {
          todolist {
              data {
                todolist {
                  id
                  title
                  completed
                }
              }
              status
              message
          }
      }
    `;

export const CREATE_TODO_QUERY = `
      mutation CreateTodoList($input: CreateTodoListInput!) {
        createTodoList(createTodoListInput: $input) {
          status
          data {
            todolist {
              id
              title
              completed
            }
          }
          message
        }
      }
    `;

export const DELETE_TODO_QUERY = `
      mutation deleteTodoList($input: DeleteTodolist!) {
        deletedTodolist(deleteTodolist: $input) {
          status
          data {
            todolist {
              id
              title
              completed
            }
          }
          message
        }
      }
    `;

export const CHECK_TODO_QUERY = `
      mutation updateTodolistCompleted($input: UpdateTodolistCompletedInput!) {
        updateTodolistCompleted(updateTodolistCompletedInput: $input) {
          status
          data {
            todolist {
              id
              title
              completed
            }
          }
          message
        }
      }
    `;

export const UPDATE_TODO_QUERY = `
    mutation updateTodolistTitle($input: UpdateTodolistTitleInput!) {
      updateTodolistTitle(updateTodolistTitleInput: $input) {
        status
        data {
          todolist {
            id
            title
            completed
          }
        }
        message
      }
    }
  `;
