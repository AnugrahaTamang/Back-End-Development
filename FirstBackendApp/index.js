//including express module and initialising an app.
const express =  require('express');
const app = express();
//variable that stores the port number
const port = 3000;

app.get('/', (req, res) =>{
   console.log("Hello Anugraha Tamang");
})

//start your app or server
app.listen(port, ()=>{
    console.log("Application start")
});