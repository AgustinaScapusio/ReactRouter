import { useParams,Link } from 'react-router-dom';

export default function ProductDetailPage() {
    const params = useParams();

    return (
        <div>
        <h1>Product Detail</h1>
        <p>This is a product detail page!</p>
        <p>Product ID: {params.productId}</p>
        <p>
            <Link to=".." relative='path'>Back</Link>
            </p>
        </div>
    );
}