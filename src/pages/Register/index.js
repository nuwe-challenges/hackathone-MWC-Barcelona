import React, { useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"
import { TextField, Card, CardContent, Button, Typography } from "@material-ui/core"
import useStyles from "./styles"
import bg from "../../assets/fondo.png"
import { GoogleLogin } from 'react-google-login';


export default function Register() {
  const classes = useStyles()

  const history = useHistory()
  const {handleSubmit, control} = useForm()

  const onSubmit = (data) => {
    const db = window.localStorage.getItem("users")
    const users = JSON.parse(db)

    if (!users) {
      window.localStorage.setItem("users", JSON.stringify([data]))
      history.push("/register/next-step")
    } else {
      users.push(data)
      window.localStorage.setItem("users", JSON.stringify([users]))
    }
  }

  const responseGoogle = () => {
    console.log('Login')
  }

  return (
   <>
   <p className={classes.pLogin}>
     Ya tienes cuenta? <NavLink to="/login" className={classes.pLogin}>inicia sesion</NavLink>
   </p>
    <div className={classes.container}>
      <Card className={classes.root} variant="outlined">
        <img src={bg} alt="" className={classes.img}/>
      <CardContent>
        <Typography className={classes.title}>
          Registra tu cuenta individual
        </Typography>
        <p className={classes.p}>
          Para poder revisar que se trata de una cuenta real, necesitamos la siguiente informacion
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="nombre"
          control={control}
          defaultValue=""
          render={({ field }) => (
         
          <TextField required  className={classes.input} {...field} fullWidth variant="outlined" label="Nombre completo" />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
             className={classes.input}
              {...field}
              required
              fullWidth
              type="email"
              variant="outlined"
              label="Correo electronico"
            />
          )}
        />
           <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
             className={classes.input}
              {...field}
              required
              fullWidth
              type="password"
              variant="outlined"
              label="Clave"
            />
          )}
        />
        <Button type="submit" variant="contained" fullWidth color="primary" style={{padding: '10px', marginBottom : '10px'}} className={classes.btn}>
            Siguiente paso
        </Button>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Inicia sesion con google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          className={classes.googleStyle}
  />
      </form>
      </CardContent>
    </Card>
   </div>
  
   </>
  )
}
