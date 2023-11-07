/* eslint-disable jsx-a11y/alt-text */
import Button from 'react-bootstrap/Button';
import "../footer/styles/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from "next/image";
import iconFacebook from '../footer/imagens/face.png.png';
import iconInstagram from '../footer/imagens/insta.png.png';
import iconYoutube from '../footer/imagens/youtube.png.png'


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
            <Button variant="link">
              <Image src={iconFacebook.src} alt={"icon-facebook"} width={30} height={28}></Image>
            </Button> 
            <Button variant="link">
              <Image src={iconInstagram.src} alt={"icon-instagram"} width={30} height={28}></Image> 
            </Button> 
            <Button variant="link">
              <Image src={iconYoutube.src} alt={"icon-youtube"} width={35} height={35}></Image> 
            </Button>
          </div>
        </Col>
      </Row>
      <p className='p-1'>&copy; 2023 Aroma Celestial. Todos os direitos reservados.</p>
    </footer>
  );
}