import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/homepage';
import Navbar from './components/Navbar';
import useLocalStorage from 'use-local-storage';


function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const toggleTheme = () =>{
    const newTheme = theme === 'light' ? 'dark' :'light';
    setTheme(newTheme);
  }
  return (
    <div className="App" data-theme = {theme}>
      <BrowserRouter>
        <Navbar toggleTheme= {toggleTheme}/>
        <div className='pages'>
          <Routes>
            <Route 
              path='/'
              element = {<Home/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
