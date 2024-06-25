import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  return knex("provinces")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("provinces").insert([
        {
          id: 1,
          name: "Metro Manila",
          regionId: 1,
        },
        {
          id: 2,
          name: "Abra",
          regionId: 2,
        },
        {
          id: 3,
          name: "Apayao",
          regionId: 2,
        },
        {
          id: 4,
          name: "Bataan",
          regionId: 2,
        },
        {
          id: 5,
          name: "Batanes",
          regionId: 2,
        },
        {
          id: 6,
          name: "Benguet",
          regionId: 2,
        },
        {
          id: 7,
          name: "Bulacan",
          regionId: 2,
        },
        {
          id: 8,
          name: "Cagayan",
          regionId: 2,
        },
        {
          id: 9,
          name: "Ifugao",
          regionId: 2,
        },
        {
          id: 10,
          name: "Ilocos Norte",
          regionId: 2,
        },
        {
          id: 11,
          name: "Ilocos Sur",
          regionId: 2,
        },
        {
          id: 12,
          name: "Isabela",
          regionId: 2,
        },
        {
          id: 13,
          name: "Kalinga",
          regionId: 2,
        },
        {
          id: 14,
          name: "La Union",
          regionId: 2,
        },
        {
          id: 15,
          name: "Mountain Province",
          regionId: 2,
        },
        {
          id: 16,
          name: "Nueva Ecija",
          regionId: 2,
        },
        {
          id: 17,
          name: "Nueva Viscaya",
          regionId: 2,
        },
        {
          id: 18,
          name: "Pampanga",
          regionId: 2,
        },
        {
          id: 19,
          name: "Pangasinan",
          regionId: 2,
        },
        {
          id: 20,
          name: "Quirino",
          regionId: 2,
        },
        {
          id: 21,
          name: "Tarlac",
          regionId: 2,
        },
        {
          id: 22,
          name: "Zambales",
          regionId: 2,
        },
        {
          id: 23,
          name: "Albay",
          regionId: 3,
        },
        {
          id: 24,
          name: "Aurora",
          regionId: 3,
        },
        {
          id: 25,
          name: "Batangas",
          regionId: 3,
        },
        {
          id: 26,
          name: "Camarines Norte",
          regionId: 3,
        },
        {
          id: 27,
          name: "Camarines Sur",
          regionId: 3,
        },
        {
          id: 28,
          name: "Catanduanes",
          regionId: 3,
        },
        {
          id: 29,
          name: "Cavite",
          regionId: 3,
        },
        {
          id: 30,
          name: "Laguna",
          regionId: 3,
        },
        {
          id: 31,
          name: "Marinduque",
          regionId: 3,
        },
        {
          id: 32,
          name: "Masbate",
          regionId: 3,
        },
        {
          id: 33,
          name: "Occidental Mindoro",
          regionId: 3,
        },
        {
          id: 34,
          name: "Oriental Mindoro",
          regionId: 3,
        },
        {
          id: 35,
          name: "Palawan",
          regionId: 3,
        },
        {
          id: 36,
          name: "Quezon",
          regionId: 3,
        },
        {
          id: 37,
          name: "Rizal",
          regionId: 3,
        },
        {
          id: 38,
          name: "Romblon",
          regionId: 3,
        },
        {
          id: 39,
          name: "Sorsogon",
          regionId: 3,
        },
        {
          id: 40,
          name: "Aklan",
          regionId: 4,
        },
        {
          id: 41,
          name: "Antique",
          regionId: 4,
        },
        {
          id: 42,
          name: "Biliran",
          regionId: 4,
        },
        {
          id: 43,
          name: "Bohol",
          regionId: 4,
        },
        {
          id: 44,
          name: "Capiz",
          regionId: 4,
        },
        {
          id: 45,
          name: "Cebu",
          regionId: 4,
        },
        {
          id: 46,
          name: "Dinagat Islands",
          regionId: 4,
        },
        {
          id: 47,
          name: "Eastern Samar",
          regionId: 4,
        },
        {
          id: 48,
          name: "Guimaras",
          regionId: 4,
        },
        {
          id: 49,
          name: "Iloilo",
          regionId: 4,
        },
        {
          id: 50,
          name: "Leyte",
          regionId: 4,
        },
        {
          id: 51,
          name: "Negros Occidental",
          regionId: 4,
        },
        {
          id: 52,
          name: "Negros Oriental",
          regionId: 4,
        },
        {
          id: 53,
          name: "Northern Samar",
          regionId: 4,
        },
        {
          id: 54,
          name: "Siquijor",
          regionId: 4,
        },
        {
          id: 55,
          name: "Southern Leyte",
          regionId: 4,
        },
        {
          id: 56,
          name: "Western Samar",
          regionId: 4,
        },
        {
          id: 57,
          name: "Agusan Del Norte",
          regionId: 5,
        },
        {
          id: 58,
          name: "Agusan Del Sur",
          regionId: 5,
        },
        {
          id: 59,
          name: "Basilan",
          regionId: 5,
        },
        {
          id: 60,
          name: "Bukidnon",
          regionId: 5,
        },
        {
          id: 61,
          name: "Camiguin",
          regionId: 5,
        },
        {
          id: 62,
          name: "Compostela Valley",
          regionId: 5,
        },
        {
          id: 63,
          name: "Cotabato",
          regionId: 5,
        },
        {
          id: 64,
          name: "Davao Del Norte",
          regionId: 5,
        },
        {
          id: 65,
          name: "Davao Del Sur",
          regionId: 5,
        },
        {
          id: 66,
          name: "Davao Oriental",
          regionId: 5,
        },
        {
          id: 67,
          name: "Lanao Del Norte",
          regionId: 5,
        },
        {
          id: 68,
          name: "Lanao Del Sur",
          regionId: 5,
        },
        {
          id: 69,
          name: "Maguindanao",
          regionId: 5,
        },
        {
          id: 70,
          name: "Misamis Occidental",
          regionId: 5,
        },
        {
          id: 71,
          name: "Misamis Oriental",
          regionId: 5,
        },
        {
          id: 72,
          name: "Sarangani",
          regionId: 5,
        },
        {
          id: 73,
          name: "South Cotabato",
          regionId: 5,
        },
        {
          id: 74,
          name: "Sultan Kudarat",
          regionId: 5,
        },
        {
          id: 75,
          name: "Sulu",
          regionId: 5,
        },
        {
          id: 76,
          name: "Surigao Del Norte",
          regionId: 5,
        },
        {
          id: 77,
          name: "Surigao Del Sur",
          regionId: 5,
        },
        {
          id: 78,
          name: "Tawi-Tawi",
          regionId: 5,
        },
        {
          id: 79,
          name: "Zamboanga Del Norte",
          regionId: 5,
        },
        {
          id: 80,
          name: "Zamboanga Del Sur",
          regionId: 5,
        },
        {
          id: 81,
          name: "Zamboanga Sibugay",
          regionId: 5,
        },
      ]);
    });
};
