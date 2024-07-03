
import From from "../Form/Form"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserList from "./UserList"
import BookList from './BookList';
const dashboardAdmin = ()=>{
  const user = useSelector((state) => state.user);

  if (user.role === "Administrador") {
    return <Outlet />;
  } else {
    
  }
    return (
      <div>
        <h1>Panel de Administración</h1>
        <Link to="/form"><button>Create Book</button></Link>

        <h1>Lista de Usuarios</h1>
        <UserList />


        <h1>Lista de libros</h1>
        <BookList />
      </div>

      
    );
}
export default dashboardAdmin;