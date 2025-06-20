import React,{useState} from 'react';
import Login from './components/Login';
import BillDetails from './components/BillDetails';
import ItemList from './components/ItemList';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TotalAmount from './components/TotalAmount';
import GeneratePDF from './components/GeneratePDF'; 
import Footer from './components/Footer';
import './App.css';
// import './components/Login.css'
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

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
        alert('Deleted Successfully');
    };

    const calculateTotalAmount = () => {
        return items.reduce(
            (total, item) =>
                total +
                item.quantity *
                item.price, 0);
    };
    
//      if (!isLoggedIn) {
//     return <Login onLogin={() => setIsLoggedIn(true)} />; //  correctly pass function
//   }

    return (
       <Router>
        <div className="App">
         <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
         <Routes>
           <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> 
         
          <Route
                        path="/bill-generator"
                        element={
                            isLoggedIn ? (
                                <div>
                                    <h1>Bill Generator</h1>
                                    <BillDetails onAddItem={handleAddItem} />
                                    <ItemList items={items} onDeleteItem={handleDeleteItem} />
                                    {/* <TotalAmount total={calculateTotalAmount()} />
                                    <GeneratePDF
                                        items={items}
                                        calculateTotalAmount={calculateTotalAmount}
                                    /> */}
                                </div>
                            ) : (
                                <Navigate to="/" replace />
                            )
                        }
                    />
          {/* <div>
            
            <Home/>

            <h1>Bill/Invoice Generator</h1>
   
            <BillDetails onAddItem={handleAddItem} />
            
           
            <ItemList items={items}
                onDeleteItem={handleDeleteItem} />
            <TotalAmount
                total={calculateTotalAmount()} />
            <GeneratePDF items={items} calculateTotalAmount={calculateTotalAmount}/>
            
            </div> */}
       
       </Routes>
       <Footer/>
        </div>
        </Router>
    );
}

export default App;