import { Button } from 'react-bootstrap';
import React from 'react';

function Footer() {
  return (
    <div className="py-4 mx-4 align-items-end">
      <p className=" fst-italic">Contact Info: Lopeare@gmail.com</p>
      <Button variant="success" size="sm">
        <i className="bi bi-whatsapp">Whatsapp</i>
      </Button>
      <Button variant="primary" size="sm">
        <i className="bi bi-facebook">Facebook</i>
      </Button>
      <Button variant="info" size="sm">
        <i className="bi bi-telegram">Telegram</i>
      </Button>
    </div>
  );
}
export default Footer;
