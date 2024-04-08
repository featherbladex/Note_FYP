import { Link } from "react-router-dom";


const Navbar = ({toggleTheme}) =>{
  
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Spectra Notes</h1>
                </Link>
                
                <div id="darkmode_toggle">
                    <h3>Light/Dark Mode</h3>
                    <label className="switch">
                        <input type="checkbox" onClick={toggleTheme}/>
                        <span className="slider"/>
                    </label>
                </div>

            </div>
            
        </header>
    )
}

export default Navbar