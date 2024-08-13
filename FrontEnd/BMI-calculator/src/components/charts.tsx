import { Card, Typography } from '@mui/material';


const Charts = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
            <Card style={{ width: 400, padding: 20 }}>
                <Typography variant="h6" marginBottom={2}>
                    BMI Categories
                </Typography>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Category</th>
                            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>BMI Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Underweight</td>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>&lt; 18.5</td>
                        </tr>
                        <tr>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Normal weight</td>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>18.5 - 24.9</td>
                        </tr>
                        <tr>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Overweight</td>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>25 - 29.9</td>
                        </tr>
                        <tr>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Obesity</td>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>30 and above</td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default Charts;
