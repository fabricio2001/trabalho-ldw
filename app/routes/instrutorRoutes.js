import express from "express";
import {
  createInstrutor,
  updateInstrutor,
  deleteInstrutor,
  getInstrutor,
  getInstrutores,
} from "../controllers/InstrutorController.js";
import { 
  verificarAdmin, 
  verificarToken, 
  verificarUsuario, 
} from "../utils/verificarToken.js";
const router = express.Router();
router.post("/", verificarToken, createInstrutor);
router.put("/:id", verificarToken, updateInstrutor);
router.delete("/:id", verificarToken, deleteInstrutor);
router.get("/:id", verificarToken, getInstrutor);
router.get("/", verificarToken, getInstrutores);
export default router;
