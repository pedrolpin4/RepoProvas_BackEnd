import app, { init } from "../../src/app";
import { getConnection } from "typeorm";

describe ('GET /exams', () => {
    beforeAll(async () => {
        await init();
    })

    afterAll(async () => {
        await getConnection().close();
    });
})
