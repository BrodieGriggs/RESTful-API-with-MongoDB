import React from "react";
import CustomerInfo from "./CustomerInfo";

const CustomersDisplay = ({ customerList }) => {
    return (
        <div id="customer-display">
            {customerList.map((customer, idx) => {
                if(customer === undefined) { return; }
                return (
                    <CustomerInfo key={idx} idx={idx} customer={customer} />
                )
            })}
        </div>
    )
}

export default CustomersDisplay;