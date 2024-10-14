const express= require('express');
const app = express();
const cors= require('cors');
require('dotenv').config();

app.use(cors()); // Enables CORS for frontend communication
app.use(express.json()); // Parse JSON bodies

app.get('/', (req,res)=>{
    res.send("Welcome to collegeDate");
});

const PORT= process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("Welcome to collegeDate");
})
