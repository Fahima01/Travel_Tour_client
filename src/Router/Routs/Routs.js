import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AddPackages from '../../pages/AddPackages/AddPackages';
import AllPackages from '../../pages/All_packages/AllPackages';
import Blog from '../../pages/Blog/Blog';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Destinations from '../../pages/Home/Destination/Destinations';
import Home from '../../pages/Home/Home/Home';
import Review from '../../pages/Home/Home/Shared/Review/Review';
import Login from '../../pages/Login/Login';
import PackageDetails from '../../pages/Package/PackageDetails';
import Signup from '../../pages/Singup/Signup';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/packagesDetails',
                element: <PrivateRoute> <PackageDetails></PackageDetails>  </PrivateRoute>
            },
            {
                path: '/addpackages',
                element: <PrivateRoute> <AddPackages></AddPackages>  </PrivateRoute>
            }


        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default router;
