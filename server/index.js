import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ override: true });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to MyJob')
})

app.listen(PORT, () => {
    console.log("--------- Job & Networking Portal --------");
    console.log(`✅ Server running on http://localhost:${PORT}`);
})