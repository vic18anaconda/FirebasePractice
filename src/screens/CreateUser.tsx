import React, { useState } from 'react';
import '../css/Create-User.css';
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import {db} from '../firebase';
import { useParams } from "react-router-dom";
import { User } from '../resources/Users.ts';
import useForm from '../hooks/useForm.ts';
import { addUser } from '../resources/UsersFirebase.ts';
import { Alert, Button, TextField } from '@mui/material';

const emptyUser : User = {
  id: 0,
  name: '',
  email: '',
  password: "",
  emailChecked: false,
};

function CreateUser() {

    const { id } = useParams();
    const user = emptyUser;
    const [formUser, handleChange] = useForm(user || emptyUser);
    const [ error, setError ] = useState('');
    const [ success, setSuccess ] = useState('');

    const { name, email, password } = formUser; 

    const save = async () => {
        const result = await addUser(formUser);
        result ? setSuccess("User added") : setError("User not added");
    }

    return (
        <div>
            <h1>Create User</h1>
            { success && <Alert severity="success">{success}</Alert>}
            { error && <Alert severity="error">{error}</Alert>}
            <TextField type="text" name="name" value={name} onChange={handleChange} fullWidth={true} label="Name" variant="outlined" />
            <br/><br/>
            <TextField type="email" name="email" value={email} onChange={handleChange} fullWidth={true} label="Email" variant="outlined" />
            <br/><br/>
            <TextField type="password" name="password" value={password} onChange={handleChange} fullWidth={true} label="Password" variant="outlined" />
            <br/><br/>
            <Button variant="outlined" onClick={save} >save</Button>
        </div>
    )
}

export default  CreateUser; 