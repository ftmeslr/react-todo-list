import Header from "./Header";
import Todo from "./Todo";
import FormAddTodo from "./FormAddTodo";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [statusDone, setStatusDone] = useState(false);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), done: false, text }]);
  };
  const deleteTodo = (id) => {
    const filterTodos = todos.filter((item) => item.id !== id);
    setTodos(filterTodos);
  };
  const filterTodos = todos.filter((item) => item.done === statusDone);

  const doneToggle = (id) => {
    const item = todos.find((item) => item.id === id);
    item.done = !item.done ;
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos([...newTodos, item]);
  };

  return (
    <>
      <body>
        <div className="App">
          <Header />
          <main>
            <section className="jumbotron">
              <div className="container d-flex flex-column align-items-center">
                <h1 className="jumbotron-heading">Welcome!</h1>
                <p className="lead text-muted">
                  To get started, add some items to your list:
                </p>
                <div className="form-inline">
                  <FormAddTodo add={addTodo} />
                </div>
              </div>
            </section>
            <div className="todosList">
              <div className="container">
                <div className="d-flex flex-column align-items-center ">
                  <nav className="col-6 mb-3">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <div
                        className={`nav-item nav-link  font-weight-bold ${
                          !statusDone ? "active" : ""
                        }`}
                        id="nav-home-tab"
                        onClick={() => {
                          setStatusDone(false);
                        }}
                      >
                        undone{" "}
                        <span
                          className="badge badge-secondary "
                          style={{ color: "red" }}
                        >
                          {todos.filter((item) => item.done === false).length}
                        </span>
                      </div>
                      <div
                        className={`nav-item nav-link font-weight-bold ${
                          statusDone ? "active" : ""
                        }`}
                        id="nav-profile-tab"
                        onClick={() => {
                          setStatusDone(true);
                        }}
                      >
                        done
                        <span
                          className="badge badge-success"
                          style={{ color: "red" }}
                        >
                          {todos.filter((item) => item.done === true).length}
                        </span>
                      </div>
                    </div>
                  </nav>
                  {filterTodos.length === 0 ? (
                    <p>there is no Todo</p>
                  ) : (
                    filterTodos.map((item) => {
                      return (
                        <Todo
                          key={item.id}
                          item={item}
                          remove={deleteTodo}
                          doneChange={doneToggle}
                        />
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </>
  );
}

export default App;
