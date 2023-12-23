import { useState } from 'react'
import { Button,Card } from "react-bootstrap"
import { } from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarComponent from "../../ui/navbar/Navbar"
import AdvertisementCarousel from "../../ui/carousel/Carousel";
import CreateCategoryForm from "../../ui/create-category-form/CreateCategoryForm";
import axios from "axios"


function Home() {
    return (
        <div>
            <div>
                <NavbarComponent/>
            </div>
            <div>
                <AdvertisementCarousel/>
            </div>
            <div>
                <AdvertisementCarousel/>
            </div>
        </div>
    )
}

export default Home