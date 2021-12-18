import app, { init } from "../../src/app";
import { getConnection } from "typeorm";
import supertest from "supertest";
import createExamChoices from "../factories/createExamChoices";
import clearDatabase from "../utils/clearDatabase";
import faker from 'faker'
import { Created } from "../utils/Created";

describe ('GET /exams', () => {
    let created: Created;
    let examUrl: string;

    beforeAll(async () => {
        await init();
        created = await createExamChoices();
    });

    it("Sould return 400 if invalid body", async () => {
        const body = {
            name: faker.name.firstName(),
            link: '123',
            profesorId: created.profesor.id,
        };

        const result = await supertest(app).post('/exams').send(body);

        expect(result.status).toEqual(400);
    });

    it("Sould return status 404 if there is no category with the id on the form", async () => {
        const body = {
            name: faker.name.firstName(),
            link: faker.internet.url(),
            categoryId: -1,
            profesorId: created.profesor.id,
        };
        
        const result = await supertest(app).post('/exams').send(body);

        expect(result.status).toEqual(404);
    });

    it("Sould return status 404 if there is no profesor with the id on the form", async () => {
        const body = {
            name: faker.name.firstName(),
            link: faker.internet.url(),
            categoryId: created.category.id,
            profesorId: -1,
        };

        const result = await supertest(app).post('/exams').send(body);

        expect(result.status).toEqual(404);
    });

    it("Sould return status 409 if the link is already registered", async () => {
        const body = {
            name: faker.name.firstName(),
            link: created.exam.link,
            categoryId: created.category.id,
            profesorId: created.profesor.id,
        };

        const result = await supertest(app).post('/exams').send(body);

        expect(result.status).toEqual(409);
    })

    it("Sould return status 201 if it satisfies all the pattern above", async () => {
        examUrl = faker.internet.url();

        const body = {
            name: faker.name.firstName(),
            link: examUrl,
            categoryId: created.category.id,
            profesorId: created.profesor.id,
        };

        const result = await supertest(app).post('/exams').send(body);

        expect(result.status).toEqual(201);
    })

    afterAll(async () => {
        await clearDatabase(created, examUrl);
        await getConnection().close();
    });
})
