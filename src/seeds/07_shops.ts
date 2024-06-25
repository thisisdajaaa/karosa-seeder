import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("shops").del();

    // Inserts seed entries
    await knex("shops").insert([
        { id: 1, name: "Bantayan Poultry Farm", isActive: true, status: "active"},
        { id: 2, name: "Ronda Dragon Fruit Farm", isActive: true, status: "active"},
        { id: 3, name: "Benguet Coffee Farm", isActive: true, status: "active"},
        { id: 4, name: "Baguio Strawberry Farm", isActive: true, status: "active"},
        { id: 5, name: "Davao Cacao Farm", isActive: true, status: "active"}
    ]);
};
