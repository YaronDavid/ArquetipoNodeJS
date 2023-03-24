import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @interface IRoleFacade
 */
export interface IRoleFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IRoleFacade
     */
    findAll(): Promise<any[]>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IRoleFacade
     */
    create(role:RoleTo): Promise<RoleTo>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IRoleFacade
     */
    publish(id: number): Promise<void>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IRoleFacade
     */
    consumer(id: number): Promise<void>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IRoleFacade
     */
    update(id: number, role:RoleTo): Promise<void>;

}