process.env.NODE_ENV = 'test'

import { expect } from "chai";
import UserFacade from '../../src/facade/User/facade';
import { db } from '../../src/config/connection/database';
import User from "../../src/models/User.model";
import * as Kafka from "../../src/config/stream/kafka";
import { UserTo } from "../../src/to/UserTo";
import { ParametersError } from "../../src/config/error";

describe('UserFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
        User.create({
        id: 1,
        name: 'test',
        email: 'Juan@axity.com',
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
        });
    });
  
    describe('FindAll', () => {
        it('should return one user', async () => {
            const User: any[] = await UserFacade.findAll();
            expect(1).equal(User.length);
        });
    });

    describe('Create',()=>{
        it('should create one user', async () => {
            let userTo: UserTo ={
                name:"Juan",
                email:"Juanin@axity.com"
            }
            const user: UserTo = await UserFacade.create(userTo);
            expect(user.name).equal("Juan")
        });
    });

    // describe('Create',()=>{
    //     it('should return error', async () => {
    //         let userTo: UserTo ={
    //             name:"Juan",
    //             email:""
    //         }
    //         const user: UserTo = await UserFacade.create(userTo);
    //         try{
    //             await UserFacade.create(userTo)
    //         }catch (error: any){
    //             expect(error.message).equal("El correo name es obligatorio")
    //         }
    //     });
    // });
    
});