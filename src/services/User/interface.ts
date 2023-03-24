import User from "../../models/User.model";
import { UserTo } from "../../to/UserTo";

/**
 * @export
 * @interface IUserService
 */
export interface IUserService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    findAll(): Promise<any[]>;

     /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
     validateExistUser(email: string): Promise<void>;

      /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
      validateEmail(email: string): Promise<void>;
    
     /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
      create(user: UserTo): Promise<UserTo>;

      /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
      del(id: number): Promise<void>;

      /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
      update(id: number,user:UserTo): Promise<void>;
}