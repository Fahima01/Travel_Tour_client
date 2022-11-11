import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AllPackages from '../../pages/All_packages/AllPackages';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Destinations from '../../pages/Home/Destination/Destinations';
import Home from '../../pages/Home/Home/Home';
import Review from '../../pages/Home/Home/Shared/Review/Review';
import Login from '../../pages/Login/Login';
import PackageDetails from '../../pages/Package/PackageDetails';
import Signup from '../../pages/Singup/Signup';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/packages',
                element: <AllPackages></AllPackages>
            },
            {
                path: '/packagesDetails/:id',
                element: <PackageDetails></PackageDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/packages/${params.id}`)

            },
            {
                path: '/reviews',
                element: <Review></Review>
            },


        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default router;
