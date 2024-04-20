import express from 'express';
import { 
    getDevice,
} from '../controller/device.js';
const router=express.Router();
/*READ*/
router.get(getDevice);
export default router;