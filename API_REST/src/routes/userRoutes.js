import { Router } from 'express';
import userController from '../controllers/userController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.post('/', userController.store);
// router.get('/', loginRequired, userController.index);

router.get('/:id', userController.show);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
