/**
 * @export
 * @class UserTo
 *
 * @swagger
 * components:
 *  schemas:
 *    UserTo:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          description: Id of user
 *          example: 1
 *        name:
 *          type: string
 *          description: Name of user
 *          example: Juan
 *        email:
 *          type: string
 *          description: Email of user
 *          example: Pablo@axity.com
 */

export class UserTo {
    id?: number;
    name?: string;
    email: string;

    constructor(id: number, email: string) {
        this.id = id;
        this.email = email;
    }
}