import {createBrowserRouter, /*createRoutesFromElements,Route,*/ RouterProvider} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

//This is a old way to create routes
// const routeDefinitions = createRoutesFromElements([
//   <Route>
//   <Route path="/" element={<HomePage />} />,
//   <Route path="/products" element={<ProductsPage />} />,
//   </Route>
// ]);

// const router = createBrowserRouter({
//   routeDefinitions
// });

//newest way to create routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index:true , element: <HomePage />}, /*path: '' alternative way to do it*/
      { path: 'products', element: <ProductsPage />},
      { path:'products/:productId',element:<ProductDetailPage/>}
    ]
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
