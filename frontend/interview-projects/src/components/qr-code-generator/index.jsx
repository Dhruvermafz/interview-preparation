import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleQRCode() {
    setQrCode(input);
    setInput('');
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <Card>
        <Card.Body>
          <InputGroup className="mb-3">
            <FormControl
              onChange={(e) => setInput(e.target.value)}
              type="text"
              name="qr-code"
              placeholder="Enter your value here"
            />
            <InputGroup.Append>
              <Button
                disabled={input && input.trim() !== '' ? false : true}
                onClick={handleQRCode}
              >
                Generate
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <div>
            <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="$fff" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QRCodeGenerator;
