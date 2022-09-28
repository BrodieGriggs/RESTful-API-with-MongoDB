import $ from "jquery";
import React from "react";
import './App.css';

const App = () => {

    const [customerList, setCustomerList] = React.useState([undefined]);

    const getCustomerList = () => {
        $.ajax({
            url: "http://localhost:8080/customers",
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
        if(customerList[0] === undefined) { getCustomerList(); } 
    })

    return (
        <div>
            {customerList.map((customer, idx) => {
                if(customer === undefined) { return; }
                return (
                    <div id="customer" key={idx}>
                        <h3>Customer {idx + 1}</h3>
                        <p>id: {customer.id}</p>
                        <p>First Name: {customer.firstName}</p>
                        <p>Last Name: {customer.lastName}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default App;