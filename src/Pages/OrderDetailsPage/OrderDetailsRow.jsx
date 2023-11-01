const OrderDetailsRow = ({ order }) => {
    const { fname, email, phone, img } = order;
    return (
        <div>
            {/* row 1 */}
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    
                        <div className="avatar">
                            <div className="rounded w-24 h-24">
                                {
                                    img && <img src={img} alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                    
                   
                </td>
                <td>
                    {fname }

                </td>
                <td>{email}</td>
                <td>{phone}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </div>
    );
};

export default OrderDetailsRow;