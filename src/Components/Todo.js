const Todo = ({ item, remove, doneChange }) => {
  const { id, text, done } = item;
  const handleDelete = () => {
    remove(id);
  };
  const handleDone = () => {
    doneChange(id);
  };
  return (
    <div className="col-6 mb-2">
      <div className="d-flex justify-content-between align-items-center border rounded p-3">
        <div>{text}</div>
        <div>
          <button type="button" className="btn btn-info btn-sm m-1">
            edit
          </button>
          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-danger btn-sm m-1"
          >
            delete
          </button>

          {done === true ? (
            <button
              onClick={handleDone}
              type="button"
              className="btn btn-warning btn-sm m-1"
            >
              UnDone
            </button>
          ) : (
            <button
              onClick={handleDone}
              type="button"
              className="btn btn-success btn-sm m-1"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
