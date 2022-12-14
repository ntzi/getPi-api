import express from 'express';
import rootRouter from './providers/routes.js'
import cors from'cors'

const app = express();
const port = 3000;

app.use(cors())

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.use('/', rootRouter)
