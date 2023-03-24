/**
 * @export
 * @class RoleTo
 *
 * @swagger
 * components:
 *  schemas:
 *    RoleTo:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          description: Id of role
 *          example: 1
 *        name:
 *          type: string
 *          description: Name of role
 *          example: Juan
 */

export class RoleTo {
    id?: number;
    name?: string;

    constructor(id: number) {
        this.id = id;
    }
}