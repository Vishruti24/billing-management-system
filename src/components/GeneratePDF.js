import React from "react";
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
//import QRCode from 'qrcode';
import logo from '../assets/email.png';

const GeneratePDF = ({ items, calculateTotalAmount }) => {
  const handleDownloadPDF = async () => {
    const doc = new jsPDF();

        // Add logo
    const imgProps = doc.getImageProperties(logo);
    const imgWidth = 30; // width in mm
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width; // maintain aspect ratio
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
  

    // Generate QR Code
    //const qrData = Total Amount: RS ${totalAmount.toFixed(2)}; // You can put any data here like order ID, etc.
    //const qrCodeDataURL = await QRCode.toDataURL(qrData);

    // Add QR Code to PDF
    //doc.addImage(qrCodeDataURL, 'PNG', 150, 10, 40, 40); // Adjust position & size as needed

    // Save PDF
    doc.save("invoice_with_qr.pdf");
  };


  //   const totalAmount = calculateTotalAmount();
  //   doc.text(`Total Amount: Rs.${totalAmount.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);

  //       // Generate QR Code
  //   //const qrData = Total Amount: Rs ${totalAmount.toFixed(2)}; // You can put any data here like order ID, etc.
  //   const qrCodeDataURL = await QRCode.toDataURL(qrData);

  //   // Add QR Code to PDF
  //   doc.addImage(qrCodeDataURL, 'PNG', 150, 10, 40, 40); // Adjust position & size as needed
  //   doc.save("invoice.pdf");
  // };

  return <button onClick={handleDownloadPDF}>Download PDF</button>;
};

export default GeneratePDF;

