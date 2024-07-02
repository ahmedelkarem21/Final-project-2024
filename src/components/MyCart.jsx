import React, { useState, useEffect } from 'react';
import { Container, Row, Spinner, Button, Card } from "react-bootstrap"
import ProductCard from "../components/ProductCard";
import { useTranslation } from "react-i18next"
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'

export default function myCart() {

  const [items, setItems] = useState([]);

  let { t } = useTranslation();

  const countState = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  // Fetching data from the API
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products/')
  //     .then(res => res.json())
  //     .then(res => setItems(res))
  // }, []);

  //   useEffect(() => {
  //   fetch('http://localhost:3000/love_products/')
  //     .then(res => res.json())
  //     .then(res => setItems(res))
  // }, []);


  let getCart = () => {
    fetch("http://localhost:3000/love_products/")
      .then(res => res.json())
      .then(res => setItems(res))
  }

  useEffect(() => {
    getCart()
  }, [])



  let myArray = items.map((item) => item.price);

  const sum = myArray.reduce((a, b) => a + b, 0);

  console.log(Math.floor(sum));
 
 

  // Adding data
  const addItem = () => {
    fetch('https://fakestoreapi.com/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: 'new item', price: '58' })
    })
      .then(response => response.json())
      .then(data => {
        setItems(items => [...items, data]);
      })
  };

  const addHandler = () => {
    const requestOptions = {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'new item', price: '58' })
    };
    fetch('https://fakestoreapi.com/products', requestOptions)
      .then(response => response.json())
      .then(item => {
        setItems(items => [...items, item]);
      })
  }

  // Deleting data
  const deleteItem = (itemId) => {
    fetch(`http://localhost:3000/love_products/` + itemId, {
      method: 'DELETE',
    })
      .then(() => {
        // setItems(items => items.filter(item => item.id !== itemId));
        fetch('http://localhost:3000/love_products/' + itemId, { method: 'DELETE' })
          .then(() => getCart())
      })

      dispatch({
        type: "DECREMENT"
    })
  };

  const handleDeletex = (id) => {
    Swal.fire({
      icon: "error",
      title: "Are your sure ",
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`
    }).then((result) => {
      if (result.isConfirmed) {
        fetch('http://localhost:3000/love_products/' + id, { method: 'DELETE' })
          .then(() => getCart()).then(() => Swal.fire("Deleted !", "", "success"))
      }
    });
  }

  //   const handleDeleteMe = (id) => {
  //     Swal.fire({
  //         icon: "error",
  //         title: "Are your sure ",
  //         showCancelButton: true,
  //         confirmButtonText: "Delete",
  //         denyButtonText: `Cancel`
  //     }).then((result) => {
  //         if (result.isConfirmed) {
  //             fetch('http://localhost:3000/love_products/' + id, { method: 'DELETE' }).then(() => getCart()).then(() => Swal.fire("Deleted !", "", "success"))
  //         }
  //     });
  // }

  const handleDeleteMe = (id) => {
    fetch('http://localhost:3000/love_products/' + id, { method: 'DELETE' })
      .then(() => console.log('deleted'))
  }

  return (
    <div className="mainBackground py-2 ltr">
      <Container className='text-center'>
        <h3 className="px-3 fw-bold grayText my-4"> {t('My_Cart')}</h3>
        {
          items.length > 0
            ?
            <Row className="   g-4 row-cols-1 text-center">
              {items.map(product =>
                <div key={product.id}>
                  {/* <ProductCard product={product} /> */}
                  <Card className='w-75 mx-auto '>
                    <Card.Img variant="top" src={product.image} className='w-25 mx-auto p-4' />
                    <Card.Body>
                      <Card.Text>
                        {product.title}
                        <span className='text-primary fw-bold mx-2'>({product.price} $)</span>
                        <Button variant="danger" onClick={() => deleteItem(product.id) } className=' btn-sm my-2 mx-2 px-3 '>Delete</Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  {/* <Button variant="dark" className='m-2 btn-sm' onClick={() => addHandler()}>Add New Item</Button> */}

                </div>
              )}

            </Row>
            :
            <div className="d-flex justify-content-center">
              <Spinner animation="grow" />
            </div>
        }
        <div className='w-75 py-4 mx-auto'>
          <div className='mx-auto'>
            <h5 className='grayText'><span>Items ({items.length}):</span> <span className='mx-5'>{Math.floor(sum)} $</span></h5>
            <h5 className='grayText'>Shipping : <span className='mx-5'>10.00 $</span></h5>
            <h4>Total : <span className='mx-5'>{Math.floor(sum + 10)} $</span></h4>
          </div>
          <Button variant="success" className='w-50 mx-3 my-2 mx-0'>Checkout ( {items.length} items )</Button>
        </div>
      </Container>
    </div>
  );
}


