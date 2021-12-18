import app, { init } from "../../src/app";
import { getConnection } from "typeorm";
import supertest from "supertest";
import createExamChoices from "../factories/createExamChoices";
import clearDatabase from "../utils/clearDatabase";
import { Created } from "../utils/Created";

describe ('GET /profesors', () => {
    let created: Created;

    beforeAll(async () => {
        await init();
        created = await createExamChoices();
    })

    afterEach( async () => {
        await clearDatabase(created, '');
        created = await createExamChoices();
        await clearDatabase(created, '');
    })

    it("Sould return an object's array and status 200 if there are profesors on the database", async () => {
        const result = await supertest(app).get('/profesors');

        expect(result.status).toEqual(200);
        expect(result.body).toEqual({
            categories: expect.any(Array),
            profesors: expect.any(Array),
        });
    })

    it("Sould return an object's array and status 204 if there is no profesor on the database", async () => {
        const result = await supertest(app).get('/profesors');

        expect(result.status).toEqual(204);
    })

    afterAll(async () => {
        await getConnection().close();
    });
})