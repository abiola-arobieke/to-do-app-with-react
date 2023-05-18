import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todosProps, handleCheckboxes, delTodos, setUpdate,
}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        delTodo={delTodos}
        handleCheckbox={handleCheckboxes}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);
TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  handleCheckboxes: PropTypes.func.isRequired,
  delTodos: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodosList;
