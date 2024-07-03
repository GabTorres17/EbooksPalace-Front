import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const dashboardAdmin = () => {

  const user = useSelector((state) => state.user);

  if (user.role === "Administrador") {
    return <Outlet />;
  } else {

  }
  return (
    <div>
      <h1>Panel de Administración</h1>
      <div>
        <Link to="/admin/users">
          <button>Lista de Usuarios</button>
        </Link>
      </div>
      <div>
        <Link to="/admin/books">
          <button>Lista de Libros</button>
        </Link>
      </div>
    </div>
  );
}
export default dashboardAdmin;