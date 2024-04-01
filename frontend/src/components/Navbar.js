import { Link } from "react-router-dom";


const Navbar = () =>{

    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Spectra Notes</h1>
                </Link>
                <button>Dark Mode</button>
            </div>
            
        </header>
    )
}

export default Navbar