// components/TotalAmount.js
import React from 'react';
//import ItemList from './ItemList';

const TotalAmount = ({ total }) => {
//     const [items, setItems] = useState([]);
//      const calculateTotalAmount = () => {
//         return items.reduce(
//             (total, item) =>
//                 total +
//                 item.quantity *
//                 item.price, 0);
//     };
    return (
        <div className="total">
            <h3>
                Total Amount:
                ${total.toFixed(2)}
            </h3>
        </div>
    );
};

export default TotalAmount;