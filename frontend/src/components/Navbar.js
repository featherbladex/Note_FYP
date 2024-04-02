import { Link } from "react-router-dom";


const Navbar = ({toggleTheme}) =>{

    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Spectra Notes</h1>
                </Link>
                <button onClick={toggleTheme}>Dark Mode</button>
            </div>
            
        </header>
    )
}

export default Navbar