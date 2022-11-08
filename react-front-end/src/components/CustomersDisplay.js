import React from "react";
import CustomerInfo from "./CustomerInfo";

const CustomersDisplay = ({ customerList }) => {
    return (
        <div id="customer-display">
            {customerList.map((customer, idx) => {
                if(customer === undefined) { return; }
                return (
                    <div key={idx} className="customer-info-wrapper">
                        <CustomerInfo idx={idx} customer={customer} />
                    </div>
                )
            })}
        </div>
    )
}

export default CustomersDisplay;