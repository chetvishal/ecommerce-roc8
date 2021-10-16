import { Card, Button } from "react-bootstrap"

export const ProdCard = ({ data }) => {
    const { name, price, image } = data;
    return (
        <Card style={{ minWidth: "18rem", maxWidth: "18rem", marginInline: "1rem" }} className="mb-3" >
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Rs. {price}
                </Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    )
}