import React from "react";
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import logo from '../assets/email.png';
import'./BillDetails.css';

const GeneratePDF = ({ items, calculateTotalAmount }) => {
  const handleDownloadPDF = async () => {
    const doc = new jsPDF();

      
    const imgProps = doc.getImageProperties(logo);
    const imgWidth = 30; // mm
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width; 
    doc.addImage(logo, 'PNG', 14, 10, imgWidth, imgHeight);

    // Add Company Name and Info next to logo
    doc.setFontSize(16);
    
    doc.text("Your Company Name", 50, 15);

    doc.setFontSize(10);

    doc.text("xyz abc pqr,", 50, 21);

    doc.text("Anand, Gujarat, Karamsad", 50, 26);

    doc.text("Email: contact@.com | Phone: +91 9999999999", 50, 31);

    doc.setFontSize(18);
    doc.text("Bill", 14, imgHeight + 20);


    const tableColumn = ["#", "Item", "Quantity", "Price", "Total"];
    const tableRows = [];

    items.forEach((item, index) => {
      const itemData = [
        index + 1,
        item.item,
        item.quantity,
        `Rs.${item.price}`,
        `Rs.${item.quantity * item.price}`
      ];
      tableRows.push(itemData);
    });

    autoTable(doc,{
      startY: imgHeight+30,
      head: [tableColumn],
      body: tableRows,
    });

     const totalAmount = calculateTotalAmount();
     doc.text(`Total Amount: Rs.${totalAmount.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);
  
    doc.save("Bill.pdf");
  };


  return <button onClick={handleDownloadPDF}>Download PDF</button>;
};

export default GeneratePDF;
