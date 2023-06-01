const express =  require('express');
const pacienteController = require('../controllers/pacienteController')


const router = express.Router();
router.get('/api/getPacientes', pacienteController.getPacientes); //http://localhost:4000/api/getPacientes
router.get('/api/getPaciente/:Id_Paciente', pacienteController.getPaciente); //Se usa como ej: http://localhost:4000/api/getPaciente/1
router.post('/api/addPaciente', pacienteController.addPaciente); //Por JSON en postman
router.put('/api/updatePaciente/:Id_Paciente', pacienteController.updatePaciente); //Por JSON en postman los datos y http://localhost:4000/api/getPaciente/1 para aclarar el usuario al que modificar
router.delete('/api/deletePaciente/:Id_Paciente' , pacienteController.deletePaciente);
/*router.get('/api/getPlayer/:id', playerController.getPlayer);

router.put('/api/updatePlayer/:id', playerController.updatePlayer);
router.delete('/api/deletePlayer/:id' , playerController.deletePlayer);
router.get('/api/getAvatars', avatarController.getAvatars);
router.get('/api/getAvatar/:id', avatarController.getAvatar);
router.post('/api/addAvatar', avatarController.addAvatar);
router.put('/api/updateAvatar/:id', avatarController.updateAvatar);
*/

module.exports = router;