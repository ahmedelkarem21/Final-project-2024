/* eslint-disable react/prop-types */
import { Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import { FaStar, FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function ProductCard({ product, getProducts, products }) {

    const [type, setType] = useState("primary")
    var [data, setData] = useState([])

    const countState = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    let checkCart = (id) => {
        if (type === 'primary') setType('danger')
        else setType('primary')

        fetch("http://localhost:3000/love_products")
            .then(res => res.json())
            .then(res => setData(res))

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...products[id - 1] })
        };
        fetch('http://localhost:3000/love_products', requestOptions);

        dispatch({
            type: "INCREMENT"
        })
    }
    // const sum = product.reduce((a, b) => a + b, 0);

    const handleDelete = (id) => {
        Swal.fire({
            icon: "error",
            title: "Are your sure ",
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Cancel`
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:3000/love_products/' + id, { method: 'DELETE' }).then(() => getProducts()).then(() => Swal.fire("Deleted !", "", "success"))
            }
        });
    }

    // console.log(product.map(item => [item.price]));

    return (
        <Col>
            <Card className="h-100 p-1">
                <Card.Img variant="top" src={product.image} height={200} className="p-4" />
                <Card.Body>
                    <Card.Title className="text-center ">
                        {/* <h6>{product.title}</h6> */}
                        <h6>{product.price} <span className="text-danger">$</span></h6>
                    </Card.Title>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Link className="btn btn-light text-" to={`/products/${product.id}`}> Show More </Link>
                    <FaRegHeart onClick={() => checkCart(product.id)} className={'myBorder p-2 myHeart mx-2 box text-' + type} />
                    {/* <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button> */}
                </Card.Footer>
            </Card>
        </Col>
    )
}
