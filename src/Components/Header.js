const Header = () => {
  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <a
            href="google.com"
            className="navbar-brand d-flex align-items-center"
          >
            <strong>Todo App</strong>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
