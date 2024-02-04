const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')


const registerRouter = require('./routes/LoginRegisterDashboard/registerRouter');
const authRoutes = require('./routes/LoginRegisterDashboard/authRoutes');
const authDashboard = require('./routes/LoginRegisterDashboard/authDashboard');



const app = express()


//middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());


//Prabashwara's Apis
app.use('/register', registerRouter);
app.use('/', authRoutes);
app.use('/dashboard', authDashboard);

app.get('/logout' , (req , res)=> {
    res.clearCookie('token');
    res.json({ Status : true })
})


//Database connection
mongoose.connect('mongodb+srv://it22560926:zFvYaiTGmAlDtdYV@cluster0.gnrjj5k.mongodb.net/signandregistration?retryWrites=true&w=majority')

//Server setup
app.listen(3001, () => {
    console.log('Server is running')
})