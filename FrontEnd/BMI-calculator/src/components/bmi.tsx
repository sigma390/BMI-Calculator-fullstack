import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";


function BMI(){
    const[height,setHeight] = useState<number|undefined>(undefined);
    const[weight,setWeight] = useState<number|undefined>(undefined);
    return<div style={ {display:'flex',
    justifyContent:'center',
    flexWrap:'wrap'}}>
        <Card style={{width:400,padding:20,marginTop:10}}>
            <Typography variant="h6" marginBottom={2}>Enter Your Details</Typography>
            <TextField placeholder="Height" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
               const newHeight = parseFloat(e.target.value);
               setHeight(isNaN(newHeight) ? undefined : newHeight);
            }}></TextField>
            <br></br>
            
            <TextField placeholder="Weight" style={{marginTop:10}} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
               const newHeight = parseFloat(e.target.value);
               setHeight(isNaN(newHeight) ? undefined : newHeight);
            }}></TextField>
            <br />
            <Button variant="contained" size="large" style={{marginTop:10}} onClick={} >Calculate BMI</Button>

        </Card>
    
    </div>
}

export default BMI;