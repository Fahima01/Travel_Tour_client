import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AllPackages from '../../pages/All_packages/AllPackages';
import Destinations from '../../pages/Home/Destination/Destinations';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import Package from '../../pages/Package/Package';
import PackageDetails from '../../pages/Package/PackageDetails';
import Post from '../../pages/Package/post';
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



        ]
    }
])

export default router;
