import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";


function BMI(){
    const[height,setHeight] = useState(null);
    const[weight,setWeight] = useState(null);
    return<div style={ {display:'flex',
    justifyContent:'center',
    flexWrap:'wrap'}}>
        <Card style={{width:400,padding:20,marginTop:10}}>
            <Typography variant="h6" marginBottom={2}>Enter Your Details</Typography>
            <TextField placeholder="Height"></TextField>
            <br></br>
            
            <TextField placeholder="Weight" style={{marginTop:10}}></TextField>
            <br />
            <Button variant="contained" size="large" style={{marginTop:10}} >Calculate BMI</Button>

        </Card>
    hellow world
    </div>
}

export default BMI;