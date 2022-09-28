import React from 'react';

const CustomerCount = ({ numOfCustomers }) => {
    return (
        <div id="customer-count">
            <p>{numOfCustomers} Customers</p>
        </div>
    )
}

export default CustomerCount;