import { Routes, Route } from "react-router-dom"
import SiteNav from "./layout/SiteNav"
import Home from "./views/Home"
import Products from "./views/Products"
import SingleProduct from "./views/SingleProduct"
import ErrorPage from "./views/ErrorPage"
import { useTranslation } from "react-i18next"
import Footer from "./layout/Footer"
import HotOffers from "./views/HotOffers"
import OneProduct from "./views/OneProduct"
import MyCart from "./components/MyCart"
import anotherProduct from "./views/anotherProduct"

function App() {
  let { i18n } = useTranslation()

  return (
    <div className={i18n.language === 'ar' ? "rtl" : ""}>
      <SiteNav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products" Component={Products} />
        <Route path="/hot_offers" Component={HotOffers} />
        <Route path="/single_product" Component={SingleProduct} />
        <Route path="/one_product" Component={OneProduct} />
        <Route path="/products/:id" Component={anotherProduct} />
        <Route path="/Cart" Component={MyCart} />
        <Route path="/*" Component={ErrorPage} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
