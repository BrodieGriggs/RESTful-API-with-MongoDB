import React from "react";
import AddCustomer from "./AddCustomer";

const ControlPanel = ({updateCustomerList}) => {
    return (
        <div id="control-panel">
            <AddCustomer updateCustomerList={updateCustomerList} />
        </div>
    )
}

export default ControlPanel;