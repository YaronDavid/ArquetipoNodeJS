import User from '../../models/User.model';
import { UserTo } from '../../to/UserTo';
import UserService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise < any[] > {
    return await UserService.findAll();
}
/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function validateExistUser(email: string): Promise < void > {
    return await UserService.validateExistUser(email);
}
/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function validateEmail(email: string): Promise < void > {
    return await UserService.validateEmail(email);
}
/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function create(user: UserTo): Promise < UserTo > {
    return await UserService.create(user);
}
/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function del(id: number): Promise < void > {
    await UserService.del(id);
}
/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function update(id: number,user: UserTo): Promise <void> {
    await UserService.update(id,user);
}