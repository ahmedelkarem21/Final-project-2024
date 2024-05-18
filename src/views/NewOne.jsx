import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import { Container, Row, Spinner } from "react-bootstrap"
import ProductCard from "../components/ProductCard";

export default function NewOne() {
    const [products, setProducts] = useState([])
    let { t } = useTranslation();

    let getProducts = () => {
        fetch("http://localhost:3000/love_products/")
            .then(res => res.json())
            .then(res => setProducts(res))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="mainBackground">
            <Container>
                <h4 className="p-3 fw-bold"> {t('products_desc')}</h4>
                {
                    products.length > 0
                        ?
                        <Row className=" row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-sm-2  g-4 row-cols-1">
                            {products.map(product => <ProductCard
                                product={product}
                                products={products} 
                                key={product.id}
                                getProducts={getProducts}
                            />)}
                        </Row>
                        :
                        <div className="d-flex justify-content-center">
                            <Spinner animation="grow" />
                        </div>
                }
            </Container>
        </div>
    )
}