import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import '../css/UsersForms.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { db } from '../firebase.ts';
import { DocumentData, doc, getDoc, updateDoc } from 'firebase/firestore';
import useForm from '../hooks/useForm.ts';

const primaryColor = createTheme({
  status: {
    danger: '#01C38D',
  },
  palette: {
    primary: {
      main: '#FFFFFF',
      darker: '#01C38D',
    },
    neutral: {
      main: '#01C38D',
      contrastText: '#fff',
    },
  },
});



const getUsuariosById = async (id) => {
  const usuario_ = await getDoc(doc(db, 'users', id));
  if (usuario_.exists()) {
    return usuario_.data();
  }
  return null;
}

const updateUsuario = async (usuarioId, data) => {
  const usuarioRef = doc(db, 'users', usuarioId);
  await updateDoc(usuarioRef, data);
}

const modifiedUser = {
  name: "",
  email: "",
  password: "",
};

function UsersDetailsScreen() {

  const { id } = useParams();
  console.log("ID del usuario que usamos\n" + id);
  const [user, setUsuario] = useState<DocumentData | null>(null);
  const [formUser, handleChange] = useForm(modifiedUser || modifiedUser);

  useEffect(() => {
    const fetchUsuario = async () => {
      const usuario_ = await getUsuariosById(id);
      setUsuario(usuario_);
    }
    fetchUsuario();
  }, []);

  if (user === null) {
    return (
      <div className="container">
        <h1>User not found </h1>
      </div>
    )
  }

  const { name, email, password } = user;

  console.log(formUser);

  return (
    <div className="userDetails">
      <h1 className='userDetails_title'>User Details</h1>
      <div className='userDetails_container'>
        <div className='userDetails_container_name'>
          <h5>Nombre de usuario : {name}</h5>
          <TextField type='text' name='name' value={formUser.name} onChange={handleChange} color='primary' variant="filled" label="Change username" focused />
        </div>
        <div className='userDetails_container_role'>
          <h5>Email: {email}</h5>
          <TextField name='email' onChange={handleChange} value={formUser.email} color='primary' variant="filled" label="Change role" focused />

        </div>
        <div className='userDetails_container_address'>
          <h5>Contraseña: {password}</h5>
          <TextField name='password' onChange={handleChange} value={formUser.password} color='primary' label="Change address" variant="filled" focused />
        </div>
        <div className='userDetails_container_buttons'>
          <ThemeProvider theme={primaryColor}>
            <Button variant="contained" onClick={() => updateUsuario(id, formUser)}>Guardar</Button>
          </ThemeProvider>
          <NavLink className='cancel_button' to={'/users'} >Cancelar</NavLink>
        </div>
      </div>
    </div>
  );
}

export default UsersDetailsScreen;