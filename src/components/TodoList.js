import PropTypes from 'prop-types';

const TodosList = ({ todosProps }) => (
  <ul>
    {todosProps.map((todo) => (
      <li key={todo.id}>{todo.title}</li>
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
};
export default TodosList;
