import { Container, Row, Col } from "react-bootstrap";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://leetcode.com/Chaitanya_91/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://auth.geeksforgeeks.org/user/chaitanyachaudhari91"><img src={navIcon4} alt="Icon" /></a>
              <h6>Designed By Chaitanya Chaudhari</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}