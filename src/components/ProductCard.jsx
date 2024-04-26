/* eslint-disable react/prop-types */
import { Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


export default function ProductCard({ product }) {
    return (
        <Col>
            <Card className="h-100 p-2">
                <Card.Img variant="top" src={product.image} height={180} className="p-4"/>
                <Card.Body>
                    <Card.Title className="text-center ">
                        <h6>{product.title}</h6>
                    </Card.Title>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Link className="btn btn-primary" to={`/products/${product.id}`}> Show More </Link>
                </Card.Footer>
            </Card>
        </Col>
    )
}
