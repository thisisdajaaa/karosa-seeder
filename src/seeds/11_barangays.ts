import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("barangays").del();

    // Inserts seed entries
    await knex("barangays").insert([
        {
            id: 1,
            name: "Kasambagan",
            cityId: 909,
        },
        {
            id: 2,
            name: "Inayawan",
            cityId: 909,
        },
        {
            id: 3,
            name: "Sambag I",
            cityId: 909,
        }
    ]);
};
