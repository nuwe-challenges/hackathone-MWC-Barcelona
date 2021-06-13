import React, {useState} from "react"
import { TextField, Card, CardContent, Button, Typography } from "@material-ui/core"
import { useForm, Controller } from "react-hook-form"
import { NavLink, useHistory } from "react-router-dom"
import useStyles from "./styles"


import bg from "../../assets/fondo.png"

export default function Login() {
  const classes = useStyles()
  const history = useHistory()
  const { handleSubmit, control } = useForm()
  const [errors, setErrors] = useState("")


  const onSubmit = (data) => {
    const db = window.localStorage.getItem("users")
    const users = JSON.parse(db)

    if (!users) {
        setErrors("Revisa los datos introducidos")
    } else {
        const user = users?.find(item => item[0])?.filter(item => item.email === data.email) || users
      if (user?.length === 0) {
        setErrors("Revisa los datos introducidos")

      } else {
        if (user[0].password === data.password) {
            history.push('/')
        }
        else {
            setErrors("Revisa los datos introducidos")
        }
      }
    }
  }

  return (
    <>
    <p className={classes.pRegister}>
      Ya tienes cuenta? <NavLink to="/register">registrate</NavLink>
    </p>

  <div className={classes.container}>
      <Card className={classes.root} variant="outlined">
        <img src={bg} alt="" className={classes.img}/>
      <CardContent>
        <Typography className={classes.title}>
          Inincia sesion en nuestra plataforma
        </Typography>
        <p className={classes.p}>
          Bienvenido internauta
        </p>
        {errors ? (
            <Typography
              align="center"
              color="error"
              style={{ margin: "1rem 0rem" }}
              variant="body2"
            >
              {errors}
            </Typography>
          ) : null}
        <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
         
          <TextField required  className={classes.input} {...field} fullWidth variant="outlined" label="Email" />
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
              label="Password"
            />
          )}
        />
        <Button type="submit" variant="contained" fullWidth color="primary" style={{padding: '10px'}} className={classes.btn}>
          Iniciar sesion
        </Button>
      </form>
      </CardContent>
    </Card>

   </div>
    </>
  )
}
