import express from 'express';
const router = express.Router();

router.get('/status', (req, res) => {
    res.status(200).json({ status: 'Ok', timestamp: new Date().toISOString() });
});

router.use((req, res) => {
    res.status(404).json({
        error: 'Rota não encontrada',
        path: req.originalUrl,
        method: req.method,
        timestamp: new Date().toISOString()
    });
});

router.use((error, req, res) => {
    console.error('Erro inesperado:', error);
    res.status(500).json({
        error: 'Erro interno no servidor',
        details: error.message,
        timestamp: new Date().toISOString()
    });
});

export default router;