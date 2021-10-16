import { Container, Row, Col, Form, Button, CardGroup } from "react-bootstrap";
import { ProdCard } from "../../Components";
import { products } from "../../Assets/ProdData";


export const Products = () => {

    return (
        <>
            <Container fluid="sm" className="mt-3">
                <Row>
                    <Col sm={3} style={{ border: "1px solid black", textAlign: "left" }} className="p-2">
                        <Form>
                            <h3>Size</h3>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="S" />
                                <Form.Check type="checkbox" label="M" />
                                <Form.Check type="checkbox" label="L" />
                                <Form.Check type="checkbox" label="XL" />
                            </Form.Group>
                            <h3>Brands</h3>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Adidas" />
                                <Form.Check type="checkbox" label="Nike" />
                                <Form.Check type="checkbox" label="Supreme" />
                                <Form.Check type="checkbox" label="Champion" />
                                <Form.Check type="checkbox" label="Levis" />
                                <Form.Check type="checkbox" label="h & m" />
                            </Form.Group>
                            <h3>For</h3>
                            <Form.Group className="mb-3" controlId="kindOfStand">
                                <Form.Check type="radio" label="Men" />
                                <Form.Check type="radio" label="Women" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Clear
                            </Button>
                        </Form>
                    </Col>
                    <Col sm={9} style={{ border: "1px solid black", textAlign: "center" }} className="p-2">
                        <CardGroup>
                            {products.map(item => {
                                return <ProdCard name={item.name} price={item.price}/>
                            })}
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )

}