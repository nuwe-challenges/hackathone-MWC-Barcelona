import { Button, Card, CardContent, FormControl, InputLabel,  NativeSelect, TextField, Typography } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import bg from "../../../assets/fondo.png"
import useStyles from "./styles"
import { BootstrapInput } from "./inputStyles"
import { getCountry } from "../../../services/getCountry"
import { useHistory } from "react-router"

export default function NextStep() {
    const history = useHistory()
    const [value, setValue] = useState()
    const [country, setCountry] = useState([])
    const { handleSubmit, control } = useForm()
    const [selectInput, setSelectInput] = useState('')

    const handleChange = (event) => {
      setSelectInput(event.target.value);
    };
    const classes = useStyles()

    const onSubmit = () => history.push('/')

    useEffect(() => {
      getCountry().then(country => setCountry(country))
    }, [])

    return (
        <div>
          <div className={classes.container}>
      <Card className={classes.root} variant="outlined">
        <img src={bg} alt="" className={classes.img}/>
      <CardContent>
        <Typography className={classes.title}>
          Complete your profile!
        </Typography>
        <p className={classes.p}>
          Para poder revisar que se trata de una cuenta real necesitamos la siguiente informacion
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="text"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
             className={classes.input}
              {...field}
              required
              fullWidth
              type="text"
              variant="outlined"
              label="Direccion"
            />
          )}
        />
      <FormControl>
        <InputLabel htmlFor="label">Pais</InputLabel>
        <NativeSelect
          id="label"
          value={selectInput}
          onChange={handleChange}
          required
          input={<BootstrapInput />}
        >
          {
            country.map(items => <option value={items.name} key={items.name}>{items.name}</option>)
          }
        </NativeSelect>
      </FormControl>

        <PhoneInput
            placeholder="Numero de telefono"
            country={'us'}
            value={value}
            onChange={phone => setValue(phone)}
        /> 

        <Button type="submit" variant="contained" fullWidth color="primary" style={{padding: '10px', marginTop:'5%'}} className={classes.btn}>
          Finalizar registro
        </Button>
      </form>
      </CardContent>
    </Card>
   </div>
        </div>
    )
}
