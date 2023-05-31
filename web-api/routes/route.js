const express =  require('express');
const pacienteController = require('../controllers/pacienteController')


const router = express.Router();
router.get('/api/getPacientes', pacienteController.getPacientes);
/*router.get('/api/getPlayer/:id', playerController.getPlayer);
router.post('/api/addPlayer', playerController.addPlayer);
router.put('/api/updatePlayer/:id', playerController.updatePlayer);
router.delete('/api/deletePlayer/:id' , playerController.deletePlayer);
router.get('/api/getAvatars', avatarController.getAvatars);
router.get('/api/getAvatar/:id', avatarController.getAvatar);
router.post('/api/addAvatar', avatarController.addAvatar);
router.put('/api/updateAvatar/:id', avatarController.updateAvatar);
router.delete('/api/deleteAvatar/:id' , avatarController.deleteAvatar);*/

module.exports = router;