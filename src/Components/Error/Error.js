
import {Breadcrumb, Container, Image, Row } from 'react-bootstrap';


export default function Error() {
  return (
    <Container fluid >
            <Row className="nav-container">
                <Container style={{ width: "80%" }} className="nav-content">
                    <Navigation />
                </Container>
            </Row>
    <h1>Error</h1>
    

  <Image src="image/Error/Frame.png"></Image>


    </Container>
    
  );
}

function Navigation() {
  return (
      <Breadcrumb className="nav-menu">
          <Breadcrumb.Item href="#" className="nav-name">Homepage</Breadcrumb.Item>
      </Breadcrumb>
  );
}