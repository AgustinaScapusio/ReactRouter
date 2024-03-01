import { Link,useNavigate } from "react-router-dom";


export default function HomePage() {
    const navigate = useNavigate();

    function navigateToProducts() {
        navigate('products');
    }
    return (
        <div>
        <h1>Home</h1>
        <p>
            Welcome to the home page! Click <Link to="products">here</Link> to view our products.
        </p>
        <p>
        <button onClick={navigateToProducts}>View Products</button>
        </p>
        </div>
    );
    }