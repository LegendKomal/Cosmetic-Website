
import { useContext } from 'react';
import { Box } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { Product } from '../components/Product/Product';
import { Search } from '../components/Search/Search';
import { Authpage } from '../components/Auth/Authpage';
import { ViewFinder } from '../components/ViewFinder/ViewFinder';
import { GlobalContext } from '../contexts/GlobalContextProvider';
import { Cart } from '../components/Cart/Cart';
import { Category } from '../components/Category/Category';
import { Offerspage } from '../components/Offerspage/Offerspage';
import { NotFoundPage } from '../components/NotFoundPage/NotFoundPage';
import { AccountNavigator } from '../components/AccountNavigator/AccountNavigator';
import { Orders } from '../components/Orders/Orders';
import { Address } from '../components/Address/Address';
import { WishList } from '../components/WishList/WishList';

const RouteProvider = ({ ad_display }) => {

    let { isLoginPage } = useContext(GlobalContext);

    return (
        <Box
            mt={isLoginPage ? ["0px", "0px", "0px", "0px"] : ad_display === "none" ? ["55px", "55px", "80px", "135px"] : ["85px", "85px", "110px", "165px"]}
            minH="80vh"
        >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/collections/:product' element={<Product />} />
                <Route path='/search' element={<Search />} />
                <Route path='/account' element={ <Authpage /> } />
                <Route path='/collections/:category/:id' element={<ViewFinder />} />
                <Route path='/account/orders' element={ <AccountNavigator> <Orders /> </AccountNavigator> } />
                <Route path='/account/addresses' element={ <AccountNavigator> <Address /> </AccountNavigator>} />
                <Route path='/account/wishlist' element={ <AccountNavigator> <WishList /> </AccountNavigator> } />
                <Route path='/account/whatsapp' element={ <AccountNavigator> <WishList /> </AccountNavigator> } />
                <Route path='/account/refer' element={ <AccountNavigator> <WishList /> </AccountNavigator> } />
                <Route path='/account/rewards' element={ <AccountNavigator> <WishList /> </AccountNavigator> } />
                <Route path='/cart' element={ <Cart /> } />
                <Route path='/offers' element={<Offerspage />} />
                <Route path='/categories' element={<Category />} />
                <Route path='/*' element={<NotFoundPage />} />
            </Routes>
        </Box>

    )
}

export default RouteProvider;
