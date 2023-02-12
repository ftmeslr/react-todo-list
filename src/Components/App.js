import Header from "./Header";
import Todo from "./Todo";
import FormAddTodo from "./FormAddTodo";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), done: false, text }]);
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
                      <a
                        href="google.com"
                        className="nav-item nav-link active font-weight-bold"
                        id="nav-home-tab"
                      >
                        undone <span className="badge badge-secondary">9</span>
                      </a>
                      <a
                        href="google.com"
                        className="nav-item nav-link font-weight-bold"
                        id="nav-profile-tab"
                      >
                        done <span className="badge badge-success">9</span>
                      </a>
                    </div>
                  </nav>
                  {todos.length === 0 ? (
                    <p>there is no Todo</p>
                  ) : (
                    todos.map((item) => {
                      return <Todo key={item.id} text={item.text} />;
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
