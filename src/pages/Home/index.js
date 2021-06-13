import React  from "react"
import {  Card, CardContent, Typography } from "@material-ui/core"
import useStyles from "./styles"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import bg from "../../assets/fondo.png"
import { NavLink, useHistory } from "react-router-dom";

export default function Home() {
  const classes = useStyles()
  const  history = useHistory()
  const redirect = () => history.push('/login')

  return (
   <>
    <p className={classes.pHome}>
       Ya tienes cuenta? <NavLink to="/login">inica sesion</NavLink>
    </p>

    <div className={classes.container}>
    <Card className={classes.root} variant="outlined">
      <img src={bg} alt="" className={classes.img}/>
    <CardContent>
      <Typography className={classes.title}>
        Unete a la comunidad!
      </Typography>
      <p className={classes.p}>
        Para empezar, dinos que te gustaria abrir.
      </p>

    <Card className={classes.subCard}  onClick={redirect}>
    <AccountCircleIcon  />
      <Typography variant="h6" style={{marginLeft: '40px'}} className={classes.titleHome}>
        Developers
      </Typography>
      <ArrowForwardIcon style={{marginLeft: '45%'}} />
      <p className={classes.p}>
        Cuenta personas para entrar en el mundo dev
      </p>
    </Card>


    <Card className={classes.subCard} onClick={redirect}>
    <BusinessIcon />
    <Typography variant="h6" style={{marginLeft: '40px'}} className={classes.titleHome}>
        Bussiness
      </Typography>
      <ArrowForwardIcon style={{marginLeft: '45%'}} />
      <p className={classes.p}>
        Tienes o perteneces a una company
      </p>
      </Card>
    </CardContent>
  </Card>

 </div>
   </>
  )
}
