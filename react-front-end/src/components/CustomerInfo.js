import React from "react";

const CustomerInfo = ({idx, customer}) => {
    return (
        <div className="customer">
            <h3>Customer {idx + 1}</h3>
            <p><strong>id:</strong> {customer.id}</p>
            <p><strong>Name:</strong> {customer.firstName + " " + customer.lastName}</p>
        </div>
    )
}

export default CustomerInfo;