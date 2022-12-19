import React, {useState} from 'react';

import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './AddUser.module.css'

const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState(0);
    
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUserName, enteredAge);
    }

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }    

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="username" type="number" onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;