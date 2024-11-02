import express from 'express';
import router from './Routes/routes';
import cors from 'cors';

function createApp(){

    const app = express();
    
    app.use(express.json());
    app.use("/api", router);

    const corsOptions = {
        origin:'http://antonio.sistem.com',
        methods: ["GET"],
    }
    
    app.use(cors());

    return app;
}

export default createApp;