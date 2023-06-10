const express =  require('express');
const pacienteController = require('../controllers/pacienteController')
const descansoController = require('../controllers/descansoController')
const medicamentoController = require('../controllers/medicamentoController')
const ejercicioController = require('../controllers/ejercicioController')
const alimentoController = require('../controllers/alimentoController')
const loginController = require('../controllers/loginController')





const router = express.Router();
router.get('/api/getPacientes', pacienteController.getPacientes); //http://localhost:4000/api/getPacientes
router.get('/api/getPaciente/:Id_Paciente', pacienteController.getPaciente); //Se usa como ej: http://localhost:4000/api/getPaciente/1
router.get('/api/getPacienteNom/:Nombre', pacienteController.getPacienteNom); //Se usa como ej: http://localhost:4000/api/getPaciente/1
router.post('/api/addPaciente', pacienteController.addPaciente); //http://localhost:4000/api/addPaciente y por JSON en postman
router.post('/api/addPacienteLog', pacienteController.addPacienteLog); //http://localhost:4000/api/addPacienteLog y por JSON en postman

router.post('/api/addPacienteNom', pacienteController.addPacienteNom); //http://localhost:4000/api/addPacienteNom y por JSON en postman
router.put('/api/updatePaciente/:Id_Paciente', pacienteController.updatePaciente); //Por JSON en postman los datos y http://localhost:4000/api/getPaciente/1 para aclarar el usuario al que modificar
router.delete('/api/deletePaciente/:Id_Paciente' , pacienteController.deletePaciente);

router.get('/api/getDescansos', descansoController.getDescansos); 
router.get('/api/getDescanso/:Id_Descanso', descansoController.getDescanso);
router.post('/api/addDescanso', descansoController.addDescanso); //Para todo
router.post('/api/addHorasDormidas', descansoController.addHorasDormidas); //Para las horas dormidas
router.post('/api/addCalidadDescanso', descansoController.addCalidadDescanso); //Para la calidad del descanso
router.post('/api/addFechaDescanso', descansoController.addFechaDescanso); //Para la Fecha del descanso
router.put('/api/updateDescanso/:Id_Descanso', descansoController.updateDescanso); //Actualiza todo lo relevante
router.put('/api/updateHorasDormidas/:Id_Descanso', descansoController.updateHorasDormidas); //Actualiza solo horas dormidas
router.put('/api/updateCalidadDescanso/:Id_Descanso', descansoController.updateCalidadDescanso); //Actualiza solo calidad descanso
router.put('/api/updateFechaDescanso/:Id_Descanso', descansoController.updateFechaDescanso); //Actualiza solo Fecha descanso

router.get('/api/getcatMeds', medicamentoController.getcatMeds); 
router.get('/api/getcatMed/:Id_CatMed', medicamentoController.getcatMed); 
router.post('/api/addCatMed', medicamentoController.addCatMed); //Para todo
router.post('/api/addTomoMed', medicamentoController.addTomoMed); //Para decir si tomo el medicamento o no
router.put('/api/updateTomoMed/:Id_CatMed', medicamentoController.updateTomoMed); //actualiza med

router.get('/api/getEjercicios', ejercicioController.getEjercicios); 
router.post('/api/addDescEjercicio', ejercicioController.addDescEjercicio); //Dice que ejericio realizo
router.put('/api/updateDescEjercicio/:IdEjercicio', ejercicioController.updateDescEjercicio); //actualiza ejercicio
router.post('/api/addtiempoEjercicio', ejercicioController.addtiempoEjercicio); //Agrega el tiempo en minutos
router.put('/api/updatetiempoEjercicio/:Id', ejercicioController.updatetiempoEjercicio); //actualiza tiempo en minutos


router.get('/api/getAlimentos', alimentoController.getAlimentos); 
router.post('/api/addComida', alimentoController.addComida); //Dice comida
router.put('/api/updateComida/:Id', alimentoController.updateComida); //actualiza comida


router.post('/api/addLogin', loginController.addLogin); //Agraga usuario y contraseña http://localhost:4000/api/addLogin



























/*router.get('/api/getPlayer/:id', playerController.getPlayer);

router.put('/api/updatePlayer/:id', playerController.updatePlayer);
router.delete('/api/deletePlayer/:id' , playerController.deletePlayer);
router.get('/api/getAvatars', avatarController.getAvatars);
router.get('/api/getAvatar/:id', avatarController.getAvatar);
router.post('/api/addAvatar', avatarController.addAvatar);
router.put('/api/updateAvatar/:id', avatarController.updateAvatar);
*/

module.exports = router;