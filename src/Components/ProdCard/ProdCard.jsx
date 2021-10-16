import { Card, Button } from "react-bootstrap"

export const ProdCard = ({name, price}) => {
    return (
        <Card style={{ minWidth: "18rem", maxWidth: "18rem", marginInline: "1rem" }} className="mb-3" >
            <Card.Img variant="top" src="https://rukminim1.flixcart.com/image/880/1056/kjuby4w0/t-shirt/s/x/z/m-fc4058-fastcolors-original-imafzbj546kdvbh8.jpeg?q=50" />
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