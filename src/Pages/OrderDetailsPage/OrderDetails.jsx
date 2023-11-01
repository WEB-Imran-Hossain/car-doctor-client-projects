import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import OrderDetailsRow from "./OrderDetailsRow";

const OrderDetails = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    const url = `http://localhost:5000/orders?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    return (
        <div>
            <h2 className="text-5xl">Your Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        orders.map(order=> <OrderDetailsRow key={order._id} order={order}></OrderDetailsRow>)
                       }
                      
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default OrderDetails;