import {Link} from "react-router-dom";
const PRODUCTS = [
    { id: 'p1', title: 'A Book', price: 6 },
    { id: 'p2', title: 'A Carpet', price: 29 },
    { id: 'p3', title: 'An Online Course', price: 49 },
];
export default function ProductsPage() {
    return (
        <div>
        <h1>Products</h1>
        <ul>
            {PRODUCTS.map(product => (
                <li key={product.id}>
                <Link to={product.id}>{product.title}</Link>
                </li>
            ))}
        </ul>
        </div>
    );
}
