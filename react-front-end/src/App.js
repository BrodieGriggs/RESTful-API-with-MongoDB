import $ from "jquery";
import React from "react";
import './App.css';
import CustomersDisplay from "./components/CustomersDisplay";
import CustomerCount from "./components/CustomerCount";
import ControlPanel from "./components/ControlPanel";


const App = () => {

    const [customerList, setCustomerList] = React.useState([]);

    const getCustomerList = () => {
        $.ajax({
            url: "http://localhost:8080/customers/get-all",
            type: "GET",
            crossDomain: true,
            crossOrigin: true,
            error: (xhr, status, errorThrown) => {
                alert(status, errorThrown);
                console.log("xhr: " + xhr);
                console.log("status: " + status);
                console.log("errorThrown: " + errorThrown);
            }
        }).then( data => {
            setCustomerList(data);
        })
    }
    
    React.useEffect(() => {
        if(customerList.length === 0) { getCustomerList(); } 
    })

    return (
        <div id="app">
            <ControlPanel updateCustomerList={getCustomerList}/>
            <CustomerCount numOfCustomers={customerList.length} />
            <CustomersDisplay customerList={customerList} />
        </div>
    )
}

export default App;