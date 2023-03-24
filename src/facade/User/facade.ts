import * as Kafka from "../../config/stream/kafka";
import { UserService } from "../../services";
import { UserTo } from "../../to/UserTo";
import { IUserFacade } from "./interface";


/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {

        let User = await UserService.findAll();
        return User;
    },

     /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
     async create(user: UserTo): Promise<UserTo> {
        await UserService.validateEmail(user.email);
        await UserService.validateExistUser(user.email);
        let userResponse: UserTo = await UserService.create(user);
        return userResponse;
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async publish(id: number): Promise<void> {
        await Kafka.send('user-service-topic',id)
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async consumer(id: number): Promise<void> {
        await UserService.del(id)
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async update(id:number,user: UserTo): Promise<void> {
        await UserService.update(id,user);
    },
    


}


export default UserFacade;