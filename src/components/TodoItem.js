import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({
  itemProp, handleCheckbox, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className="item">
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleCheckbox(itemProp.id)}
        />
        <span className={itemProp.completed ? 'completedStyle' : ''}>
          {itemProp.title}
        </span>
        <button type="button" onClick={handleEditing}>
          Edit
        </button>
        <button type="button" onClick={() => delTodo(itemProp.id)}>
          Delete
        </button>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className="textInput"
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.instanceOf(Object).isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodoItem;
