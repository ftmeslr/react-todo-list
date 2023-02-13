const Todo = ({ item, remove }) => {
  console.log(item);
  const { id, text } = item;
  const handleDelete = () => {
    // e.preventDefau0  lt();
    remove(id);
    console.log(id)
  };
  return (
    <div className="col-6 mb-2">
      <div className="d-flex justify-content-between align-items-center border rounded p-3">
        <div>{text}</div>
        <div>
          <button type="button" className="btn btn-info btn-sm">
            edit
          </button>
          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-danger btn-sm ml-1"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
