const express = require('express');
const path = require('path');
const cors= require('cors');
const app = express();


const port = 3000;

app.use(cors());

app.use(express.static('public')); 

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
