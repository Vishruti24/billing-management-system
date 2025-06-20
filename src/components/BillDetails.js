
import React,{useState} from 'react';
import './BillDetails.css';
import GeneratePDF from './GeneratePDF';

const BillDetails = () => {
    const [items, setItems] = useState([]); //
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleAddItem = () => {
        if (!item.trim()) {
            setErrorMessage(`Please input data in the Item section.`);
            return;
        }

        // Check if the item contains only alphabetical characters
        if (!/^[a-zA-Z]+$/.test(item)) {
            setErrorMessage(`Item should only contain 
                alphabetical characters.`);
            return;
        }
        const newItem = { item, quantity, price };
        setItems([...items,newItem])
        setItem('');
        setQuantity(1);
        setPrice(0);
        setErrorMessage('');
    };

    
  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

    // return (
    //     <div className='bill-details'>
    //         <label>Item:</label>
    //         <input type="text"
    //             value={item}
    //             onChange={
    //                 (e) =>
    //                     setItem(e.target.value)} />
    //         <label>Quantity:</label>
    //         <input type="number"
    //             value={quantity}
    //             onChange={
    //                 (e) =>
    //                     setQuantity(e.target.value)} />
    //         <label>Price:</label>
    //         <input type="number"
    //             value={price}
    //             onChange={
    //                 (e) =>
    //                     setPrice(e.target.value)} />
    //         <button
    //             onClick={handleAddItem}>
    //             Add Item
    //         </button>
    //         <p style={{ color: 'red' }}>{errorMessage}</p>

    //     </div>
    // );
    return (
    <div className="bill-generator-main">
      
      {/* Left Side - Item List */}
      <div className="item-list">
        <h2>Item List</h2>
        {items.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          items.map((item, index) => (
            <div className="item" key={index}>
              <div><strong>{item.item}</strong></div>
              <div>Quantity: {item.quantity}</div>
              <div>Price: ₹ {item.price}</div>
              <button onClick={() => handleDeleteItem(index)}>Delete</button>
            </div>
          ))
        )}
        <div className="total-amount">
          Total Amount: ₹ {calculateTotalAmount()}
        </div>

        {/* ✅ Use GeneratePDF here */}
        <GeneratePDF items={items} calculateTotalAmount={calculateTotalAmount} />
      </div>

      {/* Right Side - Bill Generator Form */}
      <div className="bill-generator-container">
        <h1>Bill Generator</h1>
        <div className="form-group">
          <label>Item Name:</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter item name"
          />

          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            placeholder="Enter quantity"
          />

          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Enter price"
          />
        </div>

        <button className="add-item-btn" onClick={handleAddItem}>Add Item</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default BillDetails;
// export default BillGenerator;