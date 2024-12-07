import NavBar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Filter from "./Components/Filter";
import DetailsTable from "./Components/DetailsTable";
import Login from "./Components/Login";
function App() {
  return (
    <>

    <NavBar />
    <Filter />    
    <DetailsTable/>
    <DetailsTable message="test"/>
    <Login/>
    



    </>
  );
}

export default App;