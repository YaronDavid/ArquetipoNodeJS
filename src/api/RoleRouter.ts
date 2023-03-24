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
 * GET method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles/:
 *  get:
 *    description: Get all Roles
 *    tags: ["Roles"]
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
 * components:
 *   schemas:
 *     UserTO:
 *       type: object
 *       properties:
 *         name:
 *              type: string
 *              example: rjaforever
 *         email:
 *              type: string
 *              example: rjaforever@gmail.com
 *              message: Users
 */
router.get('/roles/', RoleFacade.findAll);


/**
 * DELETE method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles/{id}/id:
 *  delete:
 *    description: delete Roles
 *    tags: ["Roles"]
 *    parameters : [
 *          {
 *              name: 'id',
 *              in: 'path',
 *              schema: {
 *                  type: number,
 *                  example: 1
 *              },
 *              required: true
 *          }
 *    ]
 *    responses:
 *      200:
 *        description: All Users
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */

router.delete('/roles/:id/id', RoleFacade.publish)

/**
 * PUT method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles/{id}/id:
 *  put:
 *    description: update Roles
 *    tags: ["Roles"]
 *    requestBody:
 *      description: object roles
 *      required: true
 *      content:
 *          application/json:
 *            schema: 
 *              $ref: '#/components/schemas/RoleTo'
 *    parameters : [
 *          {
 *              name: 'id',
 *              in: 'path',
 *              schema: {
 *                  type: number,
 *                  example: 1
 *              },
 *              required: true
 *          }
 *    ]
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

router.put('/roles/:id/id', RoleFacade.update)


/**
 * @export {express.Router}
 */
export default router;