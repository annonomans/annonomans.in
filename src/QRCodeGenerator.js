import React from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator({ value }) {
  return (
    <a href={"https://twitter.com/annonomans"} target="_blank" rel="noreferrer" style={{margin: "auto"}}>
      <QRCode
      value="https://annonomans.github.io/annonomans.in/"
      size={100}
      fgColor="#000000"
      bgColor="#ffffff"
      level="M"
      style={{margin: "auto"}}
    />
    </a>  
  );
}

export default QRCodeGenerator;