import { useTranslation } from "react-i18next"
import {Container} from 'react-bootstrap';
import Products from "./Products";
import Electronics from "../components/Electronics";
import Deals from "../components/Deals";
import {Gadgets, HomeOutdoor} from "../components/specialOffers";
import Subscribe from "../components/Subscribe";
import SendRequests from "../components/SendRequests";
import ExtraService from "../components/ExtraService";
import FlagsSection from "../components/FlagsSection";




export default function Home() {
    return (
        <div className="mainBackground home">
            <Container>
                <Electronics />
                <Deals />
                <HomeOutdoor />
                <Gadgets />
                <SendRequests />
                <Products />
                <ExtraService />
                <FlagsSection />
            </Container>
            <Subscribe />
        </div>
    )
}