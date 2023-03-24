import { IUserService } from "./interface";
import User from "../../models/User.model";
import * as Kafka from "../../config/stream/kafka"
import { UserTo } from "../../to/UserTo";
import { ParametersError } from "../../config/error";

/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return User.findAll();
    },

    /** 
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async validateExistUser(email:string): Promise<void> {
        let user = await User.findAll({ where:{
            email: email
        }
        });
        if(user.length > 0){
            throw new ParametersError("El usuario ya existe");
        }
    },

    /** 
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async validateEmail(email:string): Promise<void> {
        if(!email || email==""){
            throw new ParametersError("El correo es obligatorio")
        }
    },

    /** 
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async create(user: UserTo): Promise<UserTo> {
        let userModel = await User.create(user)
        return userModel;
    },

    /** 
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async del(id: number): Promise<void> {
        User.destroy({
            where: {
                id:id
            }
        });
    },

    async update(id:number, user: UserTo): Promise<void> {
        await User.update(user, {
            where: {
                id:id
            }
        });
    }

}

export default UserService;