import { Router } from 'express';
import homeControler from '../controllers/HomeControler';

const router = new Router();

router.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

export default router;
