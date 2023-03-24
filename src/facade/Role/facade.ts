import * as Kafka from "../../config/stream/kafka";
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
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async publish(id: number): Promise<void> {
        await Kafka.send('role-service-topic',id)
    },
    
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async consumer(id: number): Promise<void> {
        await RoleService.del(id)
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async update(id:number,user: RoleTo): Promise<void> {
        await RoleService.update(id,user);
    }

}


export default RoleFacade;