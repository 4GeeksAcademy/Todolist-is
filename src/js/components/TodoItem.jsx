
function TodoItem({ text, onDelete }) {
  return (
    <div className="todo-item">
      <span>{text}</span>
      <button onClick={onDelete} className="delete">×</button>
    </div>
  );
}

export default TodoItem;
