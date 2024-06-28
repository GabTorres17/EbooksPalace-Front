import { userAdmin, userBan, userCustomer } from "../../redux/actions";
import From from "../Form/Form"
import { useSelector } from "react-redux";

const dashboardAdmin = ()=>{
    const user = useSelector((state) => state.user);

    console.log(user);
    if (user.role !== 'admin') {
      return <div>No tienes permiso para acceder a esta página.</div>;
    }
  
    return (
      <div>
        <h1>Panel de Administración</h1>
        <From/>
      </div>
    );
}
export default dashboardAdmin;