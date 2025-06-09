// import React ,{useState} from 'react'
// //import BillDetails from './BillDetails';
// //import ItemList from './ItemList';
// //import TotalAmount from './TotalAmount';
// import { jsPDF } from 'jspdf';
// import autoTable from 'jspdf-autotable'


// function GeneratePDF({item,calculateTotalAmount}) {
//     const [items, setItems] = useState([]);
    
//     const handleDownloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text('Invoice', 14, 20);

//     const tableData = items.map((item, index) => [
//         index + 1,
//         item.item,
//         item.quantity,
//         `$${item.price}`,
//         `$${item.quantity * item.price}`,
//     ]);

//     autoTable(doc, {
//         startY: 30,
//         head: [['#', 'Item', 'Quantity', 'Price', 'Total']],
//         body: tableData,
//     });

//     const totalAmount = calculateTotalAmount();
//     doc.text(`Total Amount: $${totalAmount.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);

//     doc.save('invoice.pdf');
//  };


//   return (
//     <div>
//       <button
//                 onClick={handleDownloadPDF}>Download PDF</button>
//     </div>
//   )
// }

// export default GeneratePDF
import React from "react";
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable'

const GeneratePDF = ({ items, calculateTotalAmount }) => {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Invoice", 14, 22);

    const tableColumn = ["#", "Item", "Quantity", "Price", "Total"];
    const tableRows = [];

    items.forEach((item, index) => {
      const itemData = [
        index + 1,
        item.item,
        item.quantity,
        `$${item.price}`,
        `$${item.quantity * item.price}`
      ];
      tableRows.push(itemData);
    });

    autoTable(doc,{
      startY: 30,
      head: [tableColumn],
      body: tableRows,
    });

    const totalAmount = calculateTotalAmount();
    doc.text(`Total Amount: $${totalAmount.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);

    doc.save("invoice.pdf");
  };

  return <button onClick={handleDownloadPDF}>Download PDF</button>;
};

export default GeneratePDF;

