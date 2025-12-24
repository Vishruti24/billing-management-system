import React,{useState} from 'react';
import Login from './components/Login';
import BillDetails from './components/BillDetails';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import './components/Login.css';
import { BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate
  } from 'react-router-dom';

function App() {
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const [items, setItems] = useState([]);

    const handleAddItem = (item) => {
        setItems([...items, item]);
        alert('Added successfully');
    };


    return (
       <Router>
        <div className="App">
         <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
         <Routes>
           <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> 
         
            <Route path="/bill-generator" element={isLoggedIn ? (
                <div>
                  <h1>Bill Generator</h1>
                  <BillDetails onAddItem={handleAddItem} />
                  {/* <ItemList items={items} onDeleteItem={handleDeleteItem} /> */}
                </div>
            ) : (
            <Navigate to="/" replace />
                )
            }
           />
       
       </Routes>
            <Footer/>
        </div>
        </Router>
    );
}

export default App;