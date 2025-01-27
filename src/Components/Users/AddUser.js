import React from "react";

const AddUser = props => {
    const AddUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Add user</label>
            <input id="username" type="text"/>
            <label htmlFor="age">Age (years)</label>
            <input id="age" type="number"/>
            <button type="submit">User</button>
        </form>
    )
};

export default AddUser;