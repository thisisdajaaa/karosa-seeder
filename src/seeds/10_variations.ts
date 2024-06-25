
import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  return knex('variations').del()
    .then(function () {
      // Inserts seed entries
      return knex('variations').insert([
        {
          id: 1,
          name: "Small",
          price: 1.00,
          stock: 5,
          photo: "Photo dir",
          weight: 1.0,
          shelf_life: 1,
          productId: 1
        },
        {
          id: 2,
          name: "Medium",
          price: 2.00,
          stock: 5,
          photo: "Photo dir2",
          weight: 1.5,
          shelf_life: 1,
          productId: 1
        },
        {
          id: 3,
          name: "Large",
          price: 3.00,
          stock: 5,
          photo: "Photo dir3",
          weight: 2.0,
          shelf_life: 1,
          productId: 1
        }
      ]);
    });
};
