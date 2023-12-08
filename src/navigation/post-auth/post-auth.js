import { Route, Routes } from "react-router-dom";
import AboutScreen from "../../screens/about-screen";
import ContactScreen from "../../screens/contact-screen";
import HomeScreen from "../../screens/home-screen";
import InvalidScreen from "../../screens/invalid-screen";
import MenuScreen from "../../screens/menu-screen";
import ProductDetailScreen from "../../screens/product-detail-screen";


function PostAuthNavigation () {
    return(
        <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/product/:id" element={<ProductDetailScreen />} />
        <Route path="*" element={<InvalidScreen />} />     
        </Routes>
    )
}

export default PostAuthNavigation

