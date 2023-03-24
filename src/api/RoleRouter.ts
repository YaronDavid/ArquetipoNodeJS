import { Router } from 'express';
import { RoleFacade } from '../facade';
import { logger } from '../config/logger/logger';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * POST method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles:
 *  post:
 *    description: create Roles
 *    tags: ["Roles"]
 *    requestBody:
 *      description: object role
 *      required: true
 *      content:
 *          application/json:
 *            schema: 
 *              $ref: '#/components/schemas/RoleTo'
 *    responses:
 *      200:
 *        description: All Roles
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/RoleTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */

router.post('/roles', RoleFacade.save)

/**
 * @export {express.Router}
 */
export default router;