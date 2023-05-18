import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodoList';
import InputTodo from './InputTodo';

const TodosLogic = () => {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: 'Watch football match',
      completed: true,
    },
    {
      id: 2,
      title: 'Go to the gym',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn react',
      completed: false,
    },
  ]);

  const handleCheckbox = (id) => {
    setTodo((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodo([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: Number(uuidv4()),
      title,
      completed: false,
    };
    setTodo([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodo(todos.map((todo) => {
      if (todo.id === id) {
        // eslint-disable-next-line no-param-reassign
        todo.title = updatedTitle;
      }
      return todo;
    }));
  };

  return (
    <>
      <InputTodo addTodoItem={addTodoItem} />
      <ul>
        <TodosList
          todosProps={todos}
          handleCheckboxes={handleCheckbox}
          delTodos={delTodo}
          setUpdate={setUpdate}
        />
      </ul>
    </>
  );
};
export default TodosLogic;
