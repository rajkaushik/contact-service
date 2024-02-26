import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import router from './routes/routes.js';
import morgan from 'morgan';
import cors from 'cors';
import ConsulConfiguration from './consul-config.js';

const app = express();
ConsulConfiguration(app);
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api/contact/', router);

const port = process.env.HOST_PORT;

// mongoose connect
mongoose.connect(process.env.MONGO_DB);
mongoose.connection.once('open', (err) => {
    console.log(`Connect to MongoDB`);
})

// Server config
app.listen(process.env.HOST_PORT, () => {
    console.log(`Server running on ${process.env.HOST_PORT}`);
})