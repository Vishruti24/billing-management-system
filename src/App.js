import React,{useState} from 'react';
import Login from './components/Login';
import BillDetails from './components/BillDetails';
import ItemList from './components/ItemList';
import TotalAmount from './components/TotalAmount';
import GeneratePDF from './components/GeneratePDF'; 

import './App.css';
import './components/Login.css'
import { BrowserRouter as Router, 
  Routes, 
  Route
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
    
     if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />; //  correctly pass function
  }

    return (
      
        <div className="App">
          {/* {!isLoggedIn ?( <Login onLoginsuccess={()=>setIsLoggedIn(true)}/>):( */}

          <div>
            <h1>Bill/Invoice Generator</h1>
   
            <BillDetails onAddItem={handleAddItem} />
            
           
            <ItemList items={items}
                onDeleteItem={handleDeleteItem} />
            <TotalAmount
                total={calculateTotalAmount()} />
            <GeneratePDF items={items} calculateTotalAmount={calculateTotalAmount}/>
            {/* <button
                onClick={handleDownloadPDF}>Download PDF</button> */}
        </div>
       {/* )} */}
        </div>
    );
}

export default App;