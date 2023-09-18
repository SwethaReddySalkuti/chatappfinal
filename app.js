const express=require('express');

const bodyParser=require('body-parser');   // parses string based client request into js Object
const cors=require('cors');  // allows restricted resources on a web page to be accessed from another domain
const http =require ("http");


const app=express();



require('dotenv').config()

const resetPasswordRoutes = require('./routes/resetpassword');
const sequelize=require('./utils/database');
const userRoutes=require('./routes/user');
const chatRoutes=require('./routes/chat');
const groupRoutes=require('./routes/group')

app.use(cors({
    origin:'*'  // any other domain can access the resources
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));    // only string and array type in key-value pairs

app.use('/user',userRoutes);
app.use('/chat',chatRoutes);
app.use(groupRoutes);
app.use('/password', resetPasswordRoutes);




sequelize.sync(
    //  {force : true}
)
.then((res)=>{
    server.listen(process.env.PORT,()=>console.log('Server Started'))
})
.catch(err=>console.log(err));












