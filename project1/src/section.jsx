import { Container, Row,Col } from "react-bootstrap"

function Section(){

    return(
        <>
        <Container>
           <Row>
            <Col lg={'6'} >
        <div className="para ">
       <p>Woman’s Fashion</p>   
       <p>Men’s Fashion</p>   
       <p>Home & Lifestyle</p>   
       <p>Electronics</p>   
       <p>Sports & Outdoor</p>
       <p>Baby’s & Toys</p>
       <p>Groceries & Pets</p>
       <p>Health & Beauty</p>
       </div>
       </Col>

       <Col md={'6'} lg={'6'}>
       <div className="div1">
       <img className="img" src="https://s3-alpha.figma.com/hub/file/2314930869/d1e6799e-a62e-4e45-a219-758d98be2024-cover.png"alt="" />
       
       </div>
       </Col>
       </Row>
       </Container>
        </>
    )
}
export default Section