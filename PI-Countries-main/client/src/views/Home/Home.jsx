import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";



const Home = (props) => {
    return (
        <div>
            <div style={{
                backgroundColor: "grey",
                display: "flex",
                justifyContent: "space-between",
                height: "50px",
                alignItems: "center",
                borderBottom: "1px solid rgba(255, 255, 255, 0.172)",
                backgroundColor: "rgba(0, 0, 0, 0.439)",
                backdropFilter: "blur(8px)",
                position: "fixed",
                width: "100%",
                zIndex: "999",
                boxShadow: '0 10px 20px rgba(0,0,0,0.5), 0 6px 6px rgba(0,0,0,0.5)'
            }}>

                <Link to="/Create" style={{
                    marginLeft: '20px',
                    padding: '10px 15px 10px 15px',
                    backgroundColor: '#009cb9',
                    borderRadius: '5px',
                    color: 'white',
                    textDecoration: 'none'
                }}>Crear Actividades</Link>
                <SearchBar />
            </div>
            <CardsContainer />
        </div>
    )




}
export default Home;