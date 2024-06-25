
import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: "Region's Best", description: ""},
        {id: 2, name: "All Organic", description: ""},
        {id: 3, name: "Coffee and Cacao", description: ""},
        {id: 4, name: "Fruits", description: ""},
        {id: 5, name: "Vegetables", description: ""},
        {id: 6, name: "Grains and Cereals", description: ""},
        {id: 7, name: "Beverages", description: ""},
        {id: 8, name: "Herbs and Spices", description: ""},
        {id: 9, name: "Dairy", description: ""},
        {id: 10, name: "Fish and Meat", description: ""},
        {id: 11, name: "Root Crops", description: ""},
        {id: 12, name: "Seedlings", description: ""},
        {id: 13, name: "Plants and Flowers", description: ""},
        {id: 14, name: "Fertilizers", description: ""},
      ]);
    });
};

