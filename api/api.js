import express from 'express';

// routers
import routers from './routers/index.js';

const app = express();

app.use('/api', routers);

app.listen(5001, () => {
    console.log(`Server is running on port ${5001}`);
});