import Role from "../../models/Role.model";
import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @interface IRoleService
 */
export interface IRoleService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IRoleService
     */
    findAll(): Promise<any[]>;

     /**
     * @returns {Promise<any[]>}
     * @memberof IRoleService
     */
     validateExistRole(email: string): Promise<void>;
     
     /**
     * @returns {Promise<any[]>}
     * @memberof IRoleService
     */
      create(role: RoleTo): Promise<Role>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IRoleService
     */
     del(id: number): Promise<void>;

     /**
     * @returns {Promise<any[]>}
     * @memberof IRoleService
     */
     update(id: number,role:RoleTo): Promise<void>;
}