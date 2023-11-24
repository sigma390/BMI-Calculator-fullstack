import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from 'axios';

function BMI(){
    const[hheight,setHeight] = useState<number|undefined>(undefined);
    const[wweight,setWeight] = useState<number|undefined>(undefined);
    const[bmi,setBmi] = useState<number|undefined>(undefined);
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
               const newWeight = parseFloat(e.target.value);
               setWeight(isNaN(newWeight) ? undefined : newWeight);
            }}></TextField>
            <br />
            
            <Button variant="contained" size="large" style={{marginTop:10}} onClick={async ()=>{
                const response = await axios.get("http://localhost:4001/user/bmi",{
                    params:{
                        height:hheight,
                        weight:wweight
                    }
                    
                })
                const { result } = response.data;
                setBmi(result);
                
            }
            
            
            } >Calculate BMI</Button>
            <Typography>{bmi}</Typography>

        </Card>
    
    </div>
}

export default BMI;