import supertest from 'supertest';
import {router} from "../src/api/pizzas";
import express from "express";



describe('Functional test', () => {


    it('should display on route /api/pizzas', async () => {

        const client = supertest(express().use(router));

        const response = await client.get('/pizzas');

        expect(response.status).toBe(200);
        expect(response.body).toEqual([expect.objectContaining({"id": 1, "name": "margarita", "photo": "https://www.google.com/url$1sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fphotos-vecteurs-libre%2Fpizza&psig=AOvVaw0dNDH_kySG51nJMUQHs4O8&ust=1618404316845000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiAxZ2g--8CFQAAAAAdAAAAABAD", "price": 9.99, "size": "S",})]);

    });


});
