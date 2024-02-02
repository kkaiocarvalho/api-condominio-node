import { Router } from "express";

import { createTable, insertMorador, updateMorador, selectMorador, selectMoradores, deleteMorador } from './controller/Moradores.js';


const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "msg": "API rodando"
    })
})

router.get('/moradores', selectMoradores)

router.get('/morador', selectMorador)

router.post('/morador', insertMorador)

router.put('/morador', updateMorador)

router.delete('/morador', deleteMorador)

export default router