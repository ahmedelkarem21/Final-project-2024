/* eslint-disable react/prop-types */
import { Col, Card } from "react-bootstrap"


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
            </Card>
        </Col>
    )
}
