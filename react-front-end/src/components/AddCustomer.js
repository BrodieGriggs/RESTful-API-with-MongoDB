import React from "react";
import $ from "jquery";

const AddCustomer = ({updateCustomerList}) => {

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    const handleInput = (e) => {
        switch(e.target.name) {
            case "firstName":
                setFirstName(e.target.value);
                break;
            case "lastName":
                setLastName(e.target.value);
                break;
        }
    }

    const clearFields = () => {
        setFirstName("");
        setLastName("");
    }

    const addCustomer = (firstName, lastName) => {
        const newCustomer = { "firstName": firstName, "lastName": lastName }
        const jsonString = JSON.stringify(newCustomer);

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/customers/add",
            data: jsonString,
            contentType: 'application/json',
            success: () => {
                updateCustomerList();
                clearFields();
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh on submit
        addCustomer(firstName, lastName);
    }

    return (
        <div id="add-customer">
            <h3>Add a Customer</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                id="first-name"
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={(e) => handleInput(e)}
            />
            <input
                type="text"
                id="last-name"
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => handleInput(e)}
            />
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddCustomer;