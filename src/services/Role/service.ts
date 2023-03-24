import { IRoleService } from "./interface";
import Role from "../../models/Role.model";
import * as Kafka from "../../config/stream/kafka"
import { RoleTo } from "../../to/RoleTo";
import { ParametersError } from "../../config/error";

/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleService: IRoleService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return Role.findAll();
    },

    /** 
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async validateExistRole(email:string): Promise<void> {
        let role = await Role.findAll({ where:{
            email: email
        }
        });
        if(role.length > 0){
            throw new ParametersError("El usuario ya existe");
        }
    },

    /** 
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async create(role: RoleTo): Promise<Role> {
        let roleModel = await Role.create(role)
        return roleModel;
    },

    /** 
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async del(id: number): Promise<void> {
        Role.destroy({
            where: {
                id:id
            }
        });
    },

}

export default RoleService;