import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/api', (req: express.Request, response: express.Response) => {
    response.status(200).json({
        response: "hello from the backend"
    })
});

app.listen(8080, () => {
    console.log('Server running')
})