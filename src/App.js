// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.js
import React from 'react';
import BillDetails from './components/BillDetails';
import ItemList from './components/ItemList';
import TotalAmount from './components/TotalAmount';
import GeneratePDF from './components/GeneratePDF'; 
import './App.css';


function App() {
    const [items, setItems] = React.useState([]);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const calculateTotalAmount = () => {
        return items.reduce(
            (total, item) =>
                total +
                item.quantity *
                item.price, 0);
    };

    return (
        <div className="App">
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
    );
}

export default App;