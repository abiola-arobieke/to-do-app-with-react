import TodosList from './TodoList';

const TodosLogic = () => {
  const todos = [
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
  ];

  return (
    <ul>
      <TodosList todosProps={todos} />
    </ul>
  );
};
export default TodosLogic;
