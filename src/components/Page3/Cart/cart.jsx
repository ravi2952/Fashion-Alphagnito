import PrivateAPI from "../../../api/PrivateApi";
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import './cart.css';

const Cart = () => {
    const [apiData, setApiData] = useState([]);
    const { productId } = useParams();

    useEffect(() => {
        const getApi = async () => {
            const { data } = await PrivateAPI.get(`/products/${productId}`);
            setApiData(data);
        };
        getApi();
    }, [
        productId
    ]);

    return (
        <div className='cart'>
            <img src={apiData?.image} alt=""/>
            <h4>{apiData?.title}</h4>
            <p>Rs. {apiData?.price}</p>
        </div>
    )
}

export default Cart