/* eslint-disable jsx-a11y/alt-text */

import "../footer/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Facebook, Instagram, Youtube } from 'react-bootstrap-icons';


export function Footer() {
  return (
    <footer className="footer-info">
      <Row>
        <Col md={12} className="text-center">
          <h3>Permaneça conectado</h3>
          <p>Siga-nos em nossas contas de mídias social <br />
             para obter um conteudo ainda mais saboroso.</p>
        </Col>
        <Col xs={6} md={4} className="mx-auto">
          <div className="icons-footer">
          <Facebook /> <Instagram /> <Youtube />
          </div>
        </Col>
      </Row>
    </footer>
  );
}