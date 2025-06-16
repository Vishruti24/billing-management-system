import React from "react";
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
//import QRCode from 'qrcode';
import logo from '../assets/email.png';

const GeneratePDF = ({ items, calculateTotalAmount }) => {
  const handleDownloadPDF = async () => {
    const doc = new jsPDF();

      
    const imgProps = doc.getImageProperties(logo);
    const imgWidth = 30; // mm
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width; 
    doc.addImage(logo, 'PNG', 10, 10, imgWidth, imgHeight);

    // Add Company Name and Info next to logo
    doc.setFontSize(16);
    
    doc.text("Your Company Name", 50, 15);

    doc.setFontSize(10);

    doc.text("1234 Street Name,", 50, 21);

    doc.text("City, State, ZIP", 50, 26);

    doc.text("Email: contact@yourcompany.com | Phone: +1 234 567 890", 50, 31);

    doc.setFontSize(18);


    doc.text("Invoice", 14, imgHeight+22);

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
  
    doc.save("invoice_with_qr.pdf");
  };


  return <button onClick={handleDownloadPDF}>Download PDF</button>;
};

export default GeneratePDF;

