import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  return knex("regions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("regions").insert([
        { id: 1, name: "Metro Manila" },
        { id: 2, name: "North Luzon" },
        { id: 3, name: "South Luzon" },
        { id: 4, name: "Visayas" },
        { id: 5, name: "Mindanao" },
      ]);
    });
};
