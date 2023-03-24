process.env.NODE_ENV = 'test'

import { expect } from "chai";
import RoleFacade from '../../src/facade/Role/facade';
import { db } from '../../src/config/connection/database';
import Role from "../../src/models/Role.model";
import * as Kafka from "../../src/config/stream/kafka";
import { RoleTo } from "../../src/to/RoleTo";
import { ParametersError } from "../../src/config/error";

describe('RoleFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
        Role.create({
        id: 1,
        name: 'test',
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
        });
    });

    describe('Create',()=>{
        it('should create one Role', async () => {
            let roleTo: RoleTo ={
                name:"Admin",
            }
            const role: RoleTo = await RoleFacade.create(roleTo);
            expect(role.id).to.not.be.null;
            //expect(role.name).equal("Admin")
        });
    });
    

    describe('Create Error',()=>{
        it('should return error', async () => {
            let roleTo: RoleTo ={
            }
            try{
                await RoleFacade.create(roleTo)
            }catch (error: any){
                expect(error).instanceOf(ParametersError)
                expect(error.message).equal("El atributo name es requerido")
            }
        });
    });
});