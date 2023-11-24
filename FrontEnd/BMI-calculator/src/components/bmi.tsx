import { Button, Card, TextField, Typography } from "@mui/material";


function BMI(){
    return<div style={ {display:'flex',
    justifyContent:'center',
    flexWrap:'wrap'}}>
        <Card style={{width:400,padding:20}}>
            <Typography>Enter Your Details</Typography>
            <TextField placeholder="Height"></TextField>
            <br></br>
            
            <TextField placeholder="Weight" style={{marginTop:10}}></TextField>
            <br />
            <Button size="large">Calculate BMI</Button>

        </Card>
    hellow world
    </div>
}

export default BMI;