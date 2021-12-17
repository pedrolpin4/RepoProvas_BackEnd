import app, { init } from "../../src/app";
import { getConnection } from "typeorm";
import supertest from "supertest";
import createExamChoices from "../factories/createExamChoices";
import clearDatabase from "../utils/clearDatabase";
import { Created } from "../utils/Created";

describe ('GET /exams', () => {
    let created: Created;

    beforeAll(async () => {
        await init();
        created = await createExamChoices();
    })

    afterEach( async () => {
        await clearDatabase(created);
        created = await createExamChoices();
    })

    it("Sould return an object's array and status 200 if there is data on the database", async () => {
        const result = await supertest(app).get('/exams');

        expect(result.status).toEqual(200);
    })

    afterAll(async () => {
        await clearDatabase(created);
        await getConnection().close();
    });
})
