import { RoleService } from "../../services";
import { RoleTo } from "../../to/RoleTo";
import { IRoleFacade } from "./interface";


/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleFacade: IRoleFacade = {

    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {
        let User = await RoleService.findAll();
        return User;
    },

     /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
     async create(role: RoleTo): Promise<RoleTo> {
        let roleResponse: RoleTo = await RoleService.create(role);
        return roleResponse;
    }

}


export default RoleFacade;