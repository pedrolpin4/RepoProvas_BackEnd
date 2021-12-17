import app, { init } from "../../src/app";
import { getConnection } from "typeorm";
import supertest from "supertest";
import createExamChoices from "../factories/createExamChoices";
import clearDatabase from "../utils/clearDatabase";

describe ('GET /exams', () => {
    beforeAll(async () => {
        await init();
        await createExamChoices();
    })

    afterEach(async () => {
       await clearDatabase();
    })

    it("Sould return an object's array and status 200 if there is data on the database", async () => {
        const result = await supertest(app).get('/exams');

        expect(result.status).toEqual(200);
    })

    it("Sould return status 204 if there is data on the database", async () => {
        const result = await supertest(app).get('/exams');

        expect(result.status).toEqual(204);
    })

    afterAll(async () => {
        await getConnection().close();
    });
})
