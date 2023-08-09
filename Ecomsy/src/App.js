import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Navigation from './components/Navigation'
import Example from './components/Example'
import toast, { Toaster } from 'react-hot-toast';
import {useState} from 'react'

const App = () => {

    const [content,setContent] = useState([]);
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path='/' element = {<Home setContent={setContent} />} />
                <Route path='/cart' element = {<Cart content={content}/>} />
            </Routes>
            <Toaster/>
            {/* <Example /> */}
        </div>
    )
  };
  
  export default App;