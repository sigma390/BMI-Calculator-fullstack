import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS
function BMI() {
    const [height, setHeight] = useState<number | undefined>(undefined);
    const [weight, setWeight] = useState<number | undefined>(undefined);
    const [bmi, setBmi] = useState<number | undefined>(undefined);

    const calculateBmi = (height: number, weight: number): number => {
        if (height <= 0 || weight <= 0) {
            throw new Error("Height and weight must be positive numbers.");
        }
        return weight / (height * height);
    };

    const handleCalculateBmi = () => {
        if (height !== undefined && weight !== undefined) {
            try {
                const calculatedBmi = calculateBmi(height, weight);
                setBmi(calculatedBmi);
            } catch (error) {
                console.error(error);
                setBmi(undefined); // Clear BMI if there is an error
            }
        } else {
            toast.error("Please Enter valid height and weight");
            setBmi(undefined); // Clear BMI if height or weight is undefined
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <ToastContainer position="top-center" // Positioning toast notifications at the top-center
                autoClose={5000}     // Auto close after 5 seconds
                hideProgressBar={false} // Show progress bar
                newestOnTop={false} // Show newest on top
                closeOnClick
                rtl={false} // Right to left layout
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            <Card style={{ width: 400, padding: 20, marginTop: 10 }}>
                <Typography variant="h6" marginBottom={2}>Enter Your Details</Typography>
                <TextField
                    placeholder="Height (in meters)"
                    type="number"
                   
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const newHeight = parseFloat(e.target.value);
                        setHeight(isNaN(newHeight) ? undefined : newHeight);
                    }}
                />
                <br />

                <TextField
                    placeholder="Weight (in kilograms)"
                    type="number"
                   
                    style={{ marginTop: 10 }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const newWeight = parseFloat(e.target.value);
                        setWeight(isNaN(newWeight) ? undefined : newWeight);
                    }}
                />
                <br />

                <Button
                    variant="contained"
                    size="large"
                    style={{ marginTop: 10 }}
                    onClick={handleCalculateBmi}
                >
                    Calculate BMI
                </Button>
                <br />
                
                <Typography variant="h6" style={{ marginTop: 10 }}>
                    {bmi !== undefined ? `Your BMI is: ${bmi.toFixed(2)}` : 'Enter your details and click "Calculate BMI"'}
                </Typography>
                
            </Card>
        </div>
    );
}

export default BMI;
