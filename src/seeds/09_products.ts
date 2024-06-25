import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { 
            id: 1,
            name: "Apple",
            categoryId: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            shopId: 1
        },
        { 
            id: 2,
            name: "Mango",
            categoryId: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            shopId: 1
        },
        { 
            id: 3,
            name: "Cabbage",
            categoryId: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            shopId: 1
        },
        { 
            id: 4,
            name: "Carrots",
            categoryId: 4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            shopId: 1
        },
        {
            id: 5,
            name: "Coffee",
            categoryId: 4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            shopId: 1
        },
        { 
            id: 6,
            name: "Cacao",
            categoryId: 4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            shopId: 1
        },
        { 
            id: 7,
            name: "Ganador",
            categoryId: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            shopId: 1
        },
        { 
            id: 8,
            name: "Basil",
            categoryId: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            shopId: 1
        },
        { 
            id: 9,
            name: "Parsley",
            categoryId: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            shopId: 1
        },
        { 
            id: 10,
            name: "Monstera Deliciosa",
            categoryId: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            shopId: 1
        }
    ]);
};
