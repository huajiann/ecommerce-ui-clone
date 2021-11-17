import React, { useState } from 'react'
import vouchers from "./../data/vouchers.json"

const CouponsCard = () => {
    const [voucher, setVoucher] = useState(vouchers);
    return (
        <ul className="voucher__container">
            {voucher && voucher.map(({name, code, discount, id})=>(
                <li className="voucher" key={id}>
                    <a href="#" style={{textDecoration:"none"}}>
                    <div className="voucher__badge">
                        <div className="voucher__left">
                            <p className="voucher__name">{name}</p>
                            <p className="voucher__code">{code}</p>
                        </div>
                        <div className="voucher__right">
                            <div className="voucher__discount">
                                {discount}%
                            </div>
                            <div>OFF</div>
                        </div>
                    </div>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default CouponsCard
