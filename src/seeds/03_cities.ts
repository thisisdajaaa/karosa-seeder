
import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  return knex("cities")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cities").insert([
        {
          id: 1,
          name: "Binondo",
          provinceId: 1,
        },
        {
          id: 2,
          name: "Caloocan City",
          provinceId: 1,
        },
        {
          id: 3,
          name: "Ermita",
          provinceId: 1,
        },
        {
          id: 4,
          name: "Intramuros",
          provinceId: 1,
        },
        {
          id: 5,
          name: "Las Pinas City",
          provinceId: 1,
        },
        {
          id: 6,
          name: "Makati City",
          provinceId: 1,
        },
        {
          id: 7,
          name: "Malabon City",
          provinceId: 1,
        },
        {
          id: 8,
          name: "Malate",
          provinceId: 1,
        },
        {
          id: 9,
          name: "Mandaluyong City",
          provinceId: 1,
        },
        {
          id: 10,
          name: "Marikina City",
          provinceId: 1,
        },
        {
          id: 11,
          name: "Muntinlupa City",
          provinceId: 1,
        },
        {
          id: 12,
          name: "Navotas City",
          provinceId: 1,
        },
        {
          id: 13,
          name: "Paco",
          provinceId: 1,
        },
        {
          id: 14,
          name: "Pandacan",
          provinceId: 1,
        },
        {
          id: 15,
          name: "Paranaque City",
          provinceId: 1,
        },
        {
          id: 16,
          name: "Pasay City",
          provinceId: 1,
        },
        {
          id: 17,
          name: "Pasig City",
          provinceId: 1,
        },
        {
          id: 18,
          name: "Pateros",
          provinceId: 1,
        },
        {
          id: 19,
          name: "Port Area",
          provinceId: 1,
        },
        {
          id: 20,
          name: "Quezon City",
          provinceId: 1,
        },
        {
          id: 21,
          name: "Sampaloc",
          provinceId: 1,
        },
        {
          id: 22,
          name: "Binondo",
          provinceId: 1,
        },
        {
          id: 23,
          name: "San Juan City",
          provinceId: 1,
        },
        {
          id: 24,
          name: "San Miguel",
          provinceId: 1,
        },
        {
          id: 25,
          name: "San Nicolas",
          provinceId: 1,
        },
        {
          id: 26,
          name: "Santa Ana",
          provinceId: 1,
        },
        {
          id: 27,
          name: "Santa Cruz",
          provinceId: 1,
        },
        {
          id: 28,
          name: "Taguig City",
          provinceId: 1,
        },
        {
          id: 29,
          name: "Tondo",
          provinceId: 1,
        },
        {
          id: 30,
          name: "Valenzuela City",
          provinceId: 1,
        },
        {
          id: 31,
          name: "Bangued",
          provinceId: 2,
        },
        {
          id: 32,
          name: "Boliney",
          provinceId: 2,
        },
        {
          id: 33,
          name: "Bucay",
          provinceId: 2,
        },
        {
          id: 34,
          name: "Bucloc",
          provinceId: 2,
        },
        {
          id: 35,
          name: "Daguioman",
          provinceId: 2,
        },
        {
          id: 36,
          name: "Danglas",
          provinceId: 2,
        },
        {
          id: 37,
          name: "Dolores",
          provinceId: 2,
        },
        {
          id: 38,
          name: "La Paz",
          provinceId: 2,
        },
        {
          id: 39,
          name: "Lacub",
          provinceId: 2,
        },
        {
          id: 40,
          name: "Lagangilan",
          provinceId: 2,
        },
        {
          id: 41,
          name: "Lagayan",
          provinceId: 2,
        },
        {
          id: 42,
          name: "Langiden",
          provinceId: 2,
        },
        {
          id: 43,
          name: "Licuan (Baay)",
          provinceId: 2,
        },
        {
          id: 44,
          name: "Luba",
          provinceId: 2,
        },
        {
          id: 45,
          name: "Malibcong",
          provinceId: 2,
        },
        {
          id: 46,
          name: "Manabo",
          provinceId: 2,
        },
        {
          id: 47,
          name: "Penarrubia",
          provinceId: 2,
        },
        {
          id: 48,
          name: "Pidigan",
          provinceId: 2,
        },
        {
          id: 49,
          name: "Pilar",
          provinceId: 2,
        },
        {
          id: 50,
          name: "Sallapadan",
          provinceId: 2,
        },
        {
          id: 51,
          name: "San Isidro",
          provinceId: 2,
        },
        {
          id: 52,
          name: "San Juan",
          provinceId: 2,
        },
        {
          id: 53,
          name: "San Quintin",
          provinceId: 2,
        },
        {
          id: 54,
          name: "Tayum",
          provinceId: 2,
        },
        {
          id: 55,
          name: "Tineg",
          provinceId: 2,
        },
        {
          id: 56,
          name: "Tubo",
          provinceId: 2,
        },
        {
          id: 57,
          name: "Villaviciosa",
          provinceId: 2,
        },
        {
          id: 58,
          name: "Calanasan",
          provinceId: 3,
        },
        {
          id: 59,
          name: "Conner",
          provinceId: 3,
        },
        {
          id: 60,
          name: "Flora",
          provinceId: 3,
        },
        {
          id: 61,
          name: "Kabugao",
          provinceId: 3,
        },
        {
          id: 62,
          name: "Luna",
          provinceId: 3,
        },
        {
          id: 63,
          name: "Pudtol",
          provinceId: 3,
        },
        {
          id: 64,
          name: "Santa Marcela",
          provinceId: 3,
        },
        {
          id: 65,
          name: "Abucay",
          provinceId: 4,
        },
        {
          id: 66,
          name: "Bagac",
          provinceId: 4,
        },
        {
          id: 67,
          name: "Balanga",
          provinceId: 4,
        },
        {
          id: 68,
          name: "Dinalupihan",
          provinceId: 4,
        },
        {
          id: 69,
          name: "Hermosa",
          provinceId: 4,
        },
        {
          id: 70,
          name: "Limay",
          provinceId: 4,
        },
        {
          id: 71,
          name: "Mariveles",
          provinceId: 4,
        },
        {
          id: 72,
          name: "Morong",
          provinceId: 4,
        },
        {
          id: 73,
          name: "Orani",
          provinceId: 4,
        },
        {
          id: 74,
          name: "Orion",
          provinceId: 4,
        },
        {
          id: 75,
          name: "Pilar",
          provinceId: 4,
        },
        {
          id: 76,
          name: "Samal",
          provinceId: 4,
        },
        {
          id: 77,
          name: "Basco",
          provinceId: 5,
        },
        {
          id: 78,
          name: "Itbayat",
          provinceId: 5,
        },
        {
          id: 79,
          name: "Ivana",
          provinceId: 5,
        },
        {
          id: 80,
          name: "Mahatao",
          provinceId: 5,
        },
        {
          id: 81,
          name: "Sabtang",
          provinceId: 5,
        },
        {
          id: 82,
          name: "Uyugan",
          provinceId: 5,
        },
        {
          id: 83,
          name: "Atok",
          provinceId: 6,
        },
        {
          id: 84,
          name: "Baguio",
          provinceId: 6,
        },
        {
          id: 85,
          name: "Bakun",
          provinceId: 6,
        },
        {
          id: 86,
          name: "Bokod",
          provinceId: 6,
        },
        {
          id: 87,
          name: "Buguias",
          provinceId: 6,
        },
        {
          id: 88,
          name: "Itogon",
          provinceId: 6,
        },
        {
          id: 89,
          name: "Kabayan",
          provinceId: 6,
        },
        {
          id: 90,
          name: "Kapangan",
          provinceId: 6,
        },
        {
          id: 91,
          name: "Kibungan",
          provinceId: 6,
        },
        {
          id: 92,
          name: "La Trinidad",
          provinceId: 6,
        },
        {
          id: 93,
          name: "Mankayan",
          provinceId: 6,
        },
        {
          id: 94,
          name: "Sablan",
          provinceId: 6,
        },
        {
          id: 95,
          name: "Tuba",
          provinceId: 6,
        },
        {
          id: 96,
          name: "Tublay",
          provinceId: 6,
        },
        {
          id: 97,
          name: "Angat",
          provinceId: 7,
        },
        {
          id: 98,
          name: "Balagtas (Bigaa)",
          provinceId: 7,
        },
        {
          id: 99,
          name: "Baliuag",
          provinceId: 7,
        },
        {
          id: 100,
          name: "Bocaue",
          provinceId: 7,
        },
        {
          id: 101,
          name: "Bulakan",
          provinceId: 7,
        },
        {
          id: 102,
          name: "Bustos",
          provinceId: 7,
        },
        {
          id: 103,
          name: "Calumpit",
          provinceId: 7,
        },
        {
          id: 104,
          name: "Doña Remedios Trinidad",
          provinceId: 7,
        },
        {
          id: 105,
          name: "Guiguinto",
          provinceId: 7,
        },
        {
          id: 106,
          name: "Hagonoy",
          provinceId: 7,
        },
        {
          id: 107,
          name: "Malolos",
          provinceId: 7,
        },
        {
          id: 108,
          name: "Marilao",
          provinceId: 7,
        },
        {
          id: 109,
          name: "Meycauayan",
          provinceId: 7,
        },
        {
          id: 110,
          name: "Norzagaray",
          provinceId: 7,
        },
        {
          id: 111,
          name: "Obando",
          provinceId: 7,
        },
        {
          id: 112,
          name: "Pandi",
          provinceId: 7,
        },
        {
          id: 113,
          name: "Paombong",
          provinceId: 7,
        },
        {
          id: 114,
          name: "Plaridel",
          provinceId: 7,
        },
        {
          id: 115,
          name: "Pulilan",
          provinceId: 7,
        },
        {
          id: 116,
          name: "San Ildefonso",
          provinceId: 7,
        },
        {
          id: 117,
          name: "San Jose del Monte",
          provinceId: 7,
        },
        {
          id: 118,
          name: "San Miguel",
          provinceId: 7,
        },
        {
          id: 119,
          name: "San Rafael",
          provinceId: 7,
        },
        {
          id: 120,
          name: "Santa Maria",
          provinceId: 7,
        },
        {
          id: 121,
          name: "Abulug",
          provinceId: 8,
        },
        {
          id: 122,
          name: "Alcala",
          provinceId: 8,
        },
        {
          id: 123,
          name: "Allacapan",
          provinceId: 8,
        },
        {
          id: 124,
          name: "Amulung",
          provinceId: 8,
        },
        {
          id: 125,
          name: "Aparri",
          provinceId: 8,
        },
        {
          id: 126,
          name: "Baggao",
          provinceId: 8,
        },
        {
          id: 127,
          name: "Ballesteros",
          provinceId: 8,
        },
        {
          id: 128,
          name: "Buguey",
          provinceId: 8,
        },
        {
          id: 129,
          name: "Calayan",
          provinceId: 8,
        },
        {
          id: 130,
          name: "Camalaniugan",
          provinceId: 8,
        },
        {
          id: 131,
          name: "Claveria",
          provinceId: 8,
        },
        {
          id: 132,
          name: "Enrile",
          provinceId: 8,
        },
        {
          id: 133,
          name: "Gattaran",
          provinceId: 8,
        },
        {
          id: 134,
          name: "Gonzaga",
          provinceId: 8,
        },
        {
          id: 135,
          name: "Iguig",
          provinceId: 8,
        },
        {
          id: 136,
          name: "Lal-lo",
          provinceId: 8,
        },
        {
          id: 137,
          name: "Lasam",
          provinceId: 8,
        },
        {
          id: 138,
          name: "Pamplona",
          provinceId: 8,
        },
        {
          id: 139,
          name: "Peñablanca",
          provinceId: 8,
        },
        {
          id: 140,
          name: "Piat",
          provinceId: 8,
        },
        {
          id: 141,
          name: "Rizal",
          provinceId: 8,
        },
        {
          id: 142,
          name: "Sanchez-Mira",
          provinceId: 8,
        },
        {
          id: 143,
          name: "Santa Ana",
          provinceId: 8,
        },
        {
          id: 144,
          name: "Santa Praxedes",
          provinceId: 8,
        },
        {
          id: 145,
          name: "Santa Teresita",
          provinceId: 8,
        },
        {
          id: 146,
          name: "Santo Niño (Faire)",
          provinceId: 8,
        },
        {
          id: 147,
          name: "Solana",
          provinceId: 8,
        },
        {
          id: 148,
          name: "Tuao",
          provinceId: 8,
        },
        {
          id: 149,
          name: "Tuguegarao",
          provinceId: 8,
        },
        {
          id: 150,
          name: "Aguinaldo",
          provinceId: 9,
        },
        {
          id: 151,
          name: "Alfonso Lista (Potia)",
          provinceId: 9,
        },
        {
          id: 152,
          name: "Asipulo",
          provinceId: 9,
        },
        {
          id: 153,
          name: "Banaue",
          provinceId: 9,
        },
        {
          id: 154,
          name: "Hingyon",
          provinceId: 9,
        },
        {
          id: 155,
          name: "Hungduan",
          provinceId: 9,
        },
        {
          id: 156,
          name: "Kiangan",
          provinceId: 9,
        },
        {
          id: 157,
          name: "Lagawe",
          provinceId: 9,
        },
        {
          id: 158,
          name: "Lamut",
          provinceId: 9,
        },
        {
          id: 159,
          name: "Mayoyao",
          provinceId: 9,
        },
        {
          id: 160,
          name: "Tinoc",
          provinceId: 9,
        },
        {
          id: 161,
          name: "Adams",
          provinceId: 10,
        },
        {
          id: 162,
          name: "Bacarra",
          provinceId: 10,
        },
        {
          id: 163,
          name: "Badoc",
          provinceId: 10,
        },
        {
          id: 164,
          name: "Bangui",
          provinceId: 10,
        },
        {
          id: 165,
          name: "Banna (Espiritu)",
          provinceId: 10,
        },
        {
          id: 166,
          name: "Batac",
          provinceId: 10,
        },
        {
          id: 167,
          name: "Burgos",
          provinceId: 10,
        },
        {
          id: 168,
          name: "Carasi",
          provinceId: 10,
        },
        {
          id: 169,
          name: "Currimao",
          provinceId: 10,
        },
        {
          id: 170,
          name: "Dingras",
          provinceId: 10,
        },
        {
          id: 171,
          name: "Dumalneg",
          provinceId: 10,
        },
        {
          id: 172,
          name: "Laoag",
          provinceId: 10,
        },
        {
          id: 173,
          name: "Marcos",
          provinceId: 10,
        },
        {
          id: 174,
          name: "Nueva Era",
          provinceId: 10,
        },
        {
          id: 175,
          name: "Pagudpud",
          provinceId: 10,
        },
        {
          id: 176,
          name: "Paoay",
          provinceId: 10,
        },
        {
          id: 177,
          name: "Pasuquin",
          provinceId: 10,
        },
        {
          id: 178,
          name: "Piddig",
          provinceId: 10,
        },
        {
          id: 179,
          name: "Pinili",
          provinceId: 10,
        },
        {
          id: 180,
          name: "San Nicolas",
          provinceId: 10,
        },
        {
          id: 181,
          name: "Sarrat",
          provinceId: 10,
        },
        {
          id: 182,
          name: "Solsona",
          provinceId: 10,
        },
        {
          id: 183,
          name: "Vintar",
          provinceId: 10,
        },
        {
          id: 184,
          name: "Alilem",
          provinceId: 11,
        },
        {
          id: 185,
          name: "Banayoyo",
          provinceId: 11,
        },
        {
          id: 186,
          name: "Bantay",
          provinceId: 11,
        },
        {
          id: 187,
          name: "Burgos",
          provinceId: 11,
        },
        {
          id: 188,
          name: "Cabugao",
          provinceId: 11,
        },
        {
          id: 189,
          name: "Candon",
          provinceId: 11,
        },
        {
          id: 190,
          name: "Caoayan",
          provinceId: 11,
        },
        {
          id: 191,
          name: "Cervantes",
          provinceId: 11,
        },
        {
          id: 192,
          name: "Galimuyod",
          provinceId: 11,
        },
        {
          id: 193,
          name: "Gregorio del Pilar (Concepcion)",
          provinceId: 11,
        },
        {
          id: 194,
          name: "Lidlidda",
          provinceId: 11,
        },
        {
          id: 195,
          name: "Magsingal",
          provinceId: 11,
        },
        {
          id: 196,
          name: "Nagbukel",
          provinceId: 11,
        },
        {
          id: 197,
          name: "Narvacan",
          provinceId: 11,
        },
        {
          id: 198,
          name: "Quirino (Angkaki)",
          provinceId: 11,
        },
        {
          id: 199,
          name: "Salcedo (Baugen)",
          provinceId: 11,
        },
        {
          id: 200,
          name: "San Emilio",
          provinceId: 11,
        },
        {
          id: 201,
          name: "San Esteban",
          provinceId: 11,
        },
        {
          id: 202,
          name: "San Ildefonso",
          provinceId: 11,
        },
        {
          id: 203,
          name: "San Juan (Lapog)",
          provinceId: 11,
        },
        {
          id: 204,
          name: "San Vicente",
          provinceId: 11,
        },
        {
          id: 205,
          name: "Santa",
          provinceId: 11,
        },
        {
          id: 206,
          name: "Santa Catalina",
          provinceId: 11,
        },
        {
          id: 207,
          name: "Santa Cruz",
          provinceId: 11,
        },
        {
          id: 208,
          name: "Santa Lucia",
          provinceId: 11,
        },
        {
          id: 209,
          name: "Santa Maria",
          provinceId: 11,
        },
        {
          id: 210,
          name: "Santiago",
          provinceId: 11,
        },
        {
          id: 211,
          name: "Santo Domingo",
          provinceId: 11,
        },
        {
          id: 212,
          name: "Sigay",
          provinceId: 11,
        },
        {
          id: 213,
          name: "Sinait",
          provinceId: 11,
        },
        {
          id: 214,
          name: "Sugpon",
          provinceId: 11,
        },
        {
          id: 215,
          name: "Suyo",
          provinceId: 11,
        },
        {
          id: 216,
          name: "Tagudin",
          provinceId: 11,
        },
        {
          id: 217,
          name: "Vigan",
          provinceId: 11,
        },
        {
          id: 218,
          name: "Alicia",
          provinceId: 12,
        },
        {
          id: 219,
          name: "Angadanan",
          provinceId: 12,
        },
        {
          id: 220,
          name: "Aurora",
          provinceId: 12,
        },
        {
          id: 221,
          name: "Benito Soliven",
          provinceId: 12,
        },
        {
          id: 222,
          name: "Burgos",
          provinceId: 12,
        },
        {
          id: 223,
          name: "Cabagan",
          provinceId: 12,
        },
        {
          id: 224,
          name: "Cabatuan",
          provinceId: 12,
        },
        {
          id: 225,
          name: "Cauayan",
          provinceId: 12,
        },
        {
          id: 226,
          name: "Cordon",
          provinceId: 12,
        },
        {
          id: 227,
          name: "Delfin Albano (Magsaysay)",
          provinceId: 12,
        },
        {
          id: 228,
          name: "Dinapigue",
          provinceId: 12,
        },
        {
          id: 229,
          name: "Divilacan",
          provinceId: 12,
        },
        {
          id: 230,
          name: "Echague",
          provinceId: 12,
        },
        {
          id: 231,
          name: "Gamu",
          provinceId: 12,
        },
        {
          id: 232,
          name: "Ilagan",
          provinceId: 12,
        },
        {
          id: 233,
          name: "Jones",
          provinceId: 12,
        },
        {
          id: 234,
          name: "Luna",
          provinceId: 12,
        },
        {
          id: 235,
          name: "Maconacon",
          provinceId: 12,
        },
        {
          id: 236,
          name: "Mallig",
          provinceId: 12,
        },
        {
          id: 237,
          name: "Naguilian",
          provinceId: 12,
        },
        {
          id: 238,
          name: "Palanan",
          provinceId: 12,
        },
        {
          id: 239,
          name: "Quezon",
          provinceId: 12,
        },
        {
          id: 240,
          name: "Quirino",
          provinceId: 12,
        },
        {
          id: 241,
          name: "Ramon",
          provinceId: 12,
        },
        {
          id: 242,
          name: "Reina Mercedes",
          provinceId: 12,
        },
        {
          id: 243,
          name: "Roxas",
          provinceId: 12,
        },
        {
          id: 244,
          name: "San Agustin",
          provinceId: 12,
        },
        {
          id: 245,
          name: "San Guillermo",
          provinceId: 12,
        },
        {
          id: 246,
          name: "San Isidro",
          provinceId: 12,
        },
        {
          id: 247,
          name: "San Manuel (Callang)",
          provinceId: 12,
        },
        {
          id: 248,
          name: "San Mariano",
          provinceId: 12,
        },
        {
          id: 249,
          name: "San Mateo",
          provinceId: 12,
        },
        {
          id: 250,
          name: "San Pablo",
          provinceId: 12,
        },
        {
          id: 251,
          name: "Santa Maria",
          provinceId: 12,
        },
        {
          id: 252,
          name: "Santiago",
          provinceId: 12,
        },
        {
          id: 253,
          name: "Santo Tomas",
          provinceId: 12,
        },
        {
          id: 254,
          name: "Tumauini",
          provinceId: 12,
        },
        {
          id: 255,
          name: "Balbalan",
          provinceId: 13,
        },
        {
          id: 256,
          name: "Lubuagan",
          provinceId: 13,
        },
        {
          id: 257,
          name: "Pasil",
          provinceId: 13,
        },
        {
          id: 258,
          name: "Pinukpuk",
          provinceId: 13,
        },
        {
          id: 259,
          name: "Rizal (Liwan)",
          provinceId: 13,
        },
        {
          id: 260,
          name: "Tabuk",
          provinceId: 13,
        },
        {
          id: 261,
          name: "Tanudan",
          provinceId: 13,
        },
        {
          id: 262,
          name: "Tinglayan",
          provinceId: 13,
        },
        {
          id: 263,
          name: "Agoo",
          provinceId: 14,
        },
        {
          id: 264,
          name: "Aringay",
          provinceId: 14,
        },
        {
          id: 265,
          name: "Bacnotan",
          provinceId: 14,
        },
        {
          id: 266,
          name: "Bagulin",
          provinceId: 14,
        },
        {
          id: 267,
          name: "Balaoan",
          provinceId: 14,
        },
        {
          id: 268,
          name: "Bangar",
          provinceId: 14,
        },
        {
          id: 269,
          name: "Bauang",
          provinceId: 14,
        },
        {
          id: 270,
          name: "Burgos",
          provinceId: 14,
        },
        {
          id: 271,
          name: "Caba",
          provinceId: 14,
        },
        {
          id: 272,
          name: "Luna",
          provinceId: 14,
        },
        {
          id: 273,
          name: "Naguilian",
          provinceId: 14,
        },
        {
          id: 274,
          name: "Pugo",
          provinceId: 14,
        },
        {
          id: 275,
          name: "Rosario",
          provinceId: 14,
        },
        {
          id: 276,
          name: "San Fernando",
          provinceId: 14,
        },
        {
          id: 277,
          name: "San Gabriel",
          provinceId: 14,
        },
        {
          id: 278,
          name: "San Juan",
          provinceId: 14,
        },
        {
          id: 279,
          name: "Santo Tomas",
          provinceId: 14,
        },
        {
          id: 280,
          name: "Santol",
          provinceId: 14,
        },
        {
          id: 281,
          name: "Sudipen",
          provinceId: 14,
        },
        {
          id: 282,
          name: "Tubao",
          provinceId: 14,
        },
        {
          id: 283,
          name: "Barlig",
          provinceId: 15,
        },
        {
          id: 284,
          name: "Bauko",
          provinceId: 15,
        },
        {
          id: 285,
          name: "Besao",
          provinceId: 15,
        },
        {
          id: 286,
          name: "Bontoc",
          provinceId: 15,
        },
        {
          id: 287,
          name: "Natonin",
          provinceId: 15,
        },
        {
          id: 288,
          name: "Paracelis",
          provinceId: 15,
        },
        {
          id: 289,
          name: "Sabangan",
          provinceId: 15,
        },
        {
          id: 290,
          name: "Sadanga",
          provinceId: 15,
        },
        {
          id: 291,
          name: "Sagada",
          provinceId: 15,
        },
        {
          id: 292,
          name: "Tadian",
          provinceId: 15,
        },
        {
          id: 293,
          name: "Aliaga",
          provinceId: 16,
        },
        {
          id: 294,
          name: "Bongabon",
          provinceId: 16,
        },
        {
          id: 295,
          name: "Cabanatuan",
          provinceId: 16,
        },
        {
          id: 296,
          name: "Cabiao",
          provinceId: 16,
        },
        {
          id: 297,
          name: "Carranglan",
          provinceId: 16,
        },
        {
          id: 298,
          name: "Cuyapo",
          provinceId: 16,
        },
        {
          id: 299,
          name: "Gabaldon (Bitulok & Sabani)",
          provinceId: 16,
        },
        {
          id: 300,
          name: "Gapan",
          provinceId: 16,
        },
        {
          id: 301,
          name: "General Mamerto Natividad",
          provinceId: 16,
        },
        {
          id: 302,
          name: "General Tinio (Papaya)",
          provinceId: 16,
        },
        {
          id: 303,
          name: "Guimba",
          provinceId: 16,
        },
        {
          id: 304,
          name: "Jaen",
          provinceId: 16,
        },
        {
          id: 305,
          name: "Laur",
          provinceId: 16,
        },
        {
          id: 306,
          name: "Licab",
          provinceId: 16,
        },
        {
          id: 307,
          name: "Llanera",
          provinceId: 16,
        },
        {
          id: 308,
          name: "Lupao",
          provinceId: 16,
        },
        {
          id: 309,
          name: "Muñoz",
          provinceId: 16,
        },
        {
          id: 310,
          name: "Nampicuan",
          provinceId: 16,
        },
        {
          id: 311,
          name: "Palayan",
          provinceId: 16,
        },
        {
          id: 312,
          name: "Pantabangan",
          provinceId: 16,
        },
        {
          id: 313,
          name: "Peñaranda",
          provinceId: 16,
        },
        {
          id: 314,
          name: "Quezon",
          provinceId: 16,
        },
        {
          id: 315,
          name: "Rizal",
          provinceId: 16,
        },
        {
          id: 316,
          name: "San Antonio",
          provinceId: 16,
        },
        {
          id: 317,
          name: "San Isidro",
          provinceId: 16,
        },
        {
          id: 318,
          name: "San Jose",
          provinceId: 16,
        },
        {
          id: 319,
          name: "San Leonardo",
          provinceId: 16,
        },
        {
          id: 320,
          name: "Santa Rosa",
          provinceId: 16,
        },
        {
          id: 321,
          name: "Santo Domingo",
          provinceId: 16,
        },
        {
          id: 322,
          name: "Talavera",
          provinceId: 16,
        },
        {
          id: 323,
          name: "Talugtug",
          provinceId: 16,
        },
        {
          id: 324,
          name: "Zaragoza",
          provinceId: 16,
        },
        {
          id: 325,
          name: "Alfonso Castañeda",
          provinceId: 17,
        },
        {
          id: 326,
          name: "Ambaguio",
          provinceId: 17,
        },
        {
          id: 327,
          name: "Aritao",
          provinceId: 17,
        },
        {
          id: 328,
          name: "Bagabag",
          provinceId: 17,
        },
        {
          id: 329,
          name: "Bambang",
          provinceId: 17,
        },
        {
          id: 330,
          name: "Bayombong",
          provinceId: 17,
        },
        {
          id: 331,
          name: "Diadi",
          provinceId: 17,
        },
        {
          id: 332,
          name: "Dupax del Norte",
          provinceId: 17,
        },
        {
          id: 333,
          name: "Dupax del Sur",
          provinceId: 17,
        },
        {
          id: 334,
          name: "Kasibu",
          provinceId: 17,
        },
        {
          id: 335,
          name: "Kayapa",
          provinceId: 17,
        },
        {
          id: 336,
          name: "Quezon",
          provinceId: 17,
        },
        {
          id: 337,
          name: "Santa Fe (Imugan)",
          provinceId: 17,
        },
        {
          id: 338,
          name: "Solano",
          provinceId: 17,
        },
        {
          id: 339,
          name: "Villaverde (Ibung)",
          provinceId: 17,
        },
        {
          id: 340,
          name: "Angeles",
          provinceId: 18,
        },
        {
          id: 341,
          name: "Apalit",
          provinceId: 18,
        },
        {
          id: 342,
          name: "Arayat",
          provinceId: 18,
        },
        {
          id: 343,
          name: "Bacolor",
          provinceId: 18,
        },
        {
          id: 344,
          name: "Candaba",
          provinceId: 18,
        },
        {
          id: 345,
          name: "Floridablanca",
          provinceId: 18,
        },
        {
          id: 346,
          name: "Guagua",
          provinceId: 18,
        },
        {
          id: 347,
          name: "Lubao",
          provinceId: 18,
        },
        {
          id: 348,
          name: "Mabalacat",
          provinceId: 18,
        },
        {
          id: 349,
          name: "Macabebe",
          provinceId: 18,
        },
        {
          id: 350,
          name: "Magalang",
          provinceId: 18,
        },
        {
          id: 351,
          name: "Masantol",
          provinceId: 18,
        },
        {
          id: 352,
          name: "Mexico",
          provinceId: 18,
        },
        {
          id: 353,
          name: "Minalin",
          provinceId: 18,
        },
        {
          id: 354,
          name: "Porac",
          provinceId: 18,
        },
        {
          id: 355,
          name: "San Fernando",
          provinceId: 18,
        },
        {
          id: 356,
          name: "San Luis",
          provinceId: 18,
        },
        {
          id: 357,
          name: "San Simon",
          provinceId: 18,
        },
        {
          id: 358,
          name: "Santa Ana",
          provinceId: 18,
        },
        {
          id: 359,
          name: "Santa Rita",
          provinceId: 18,
        },
        {
          id: 360,
          name: "Santo Tomas",
          provinceId: 18,
        },
        {
          id: 361,
          name: "Sasmuan",
          provinceId: 18,
        },
        {
          id: 362,
          name: "Agno",
          provinceId: 19,
        },
        {
          id: 363,
          name: "Aguilar",
          provinceId: 19,
        },
        {
          id: 364,
          name: "Alaminos",
          provinceId: 19,
        },
        {
          id: 365,
          name: "Alcala",
          provinceId: 19,
        },
        {
          id: 366,
          name: "Anda",
          provinceId: 19,
        },
        {
          id: 367,
          name: "Asingan",
          provinceId: 19,
        },
        {
          id: 368,
          name: "Balungao",
          provinceId: 19,
        },
        {
          id: 369,
          name: "Bani",
          provinceId: 19,
        },
        {
          id: 370,
          name: "Basista",
          provinceId: 19,
        },
        {
          id: 371,
          name: "Bautista",
          provinceId: 19,
        },
        {
          id: 372,
          name: "Bayambang",
          provinceId: 19,
        },
        {
          id: 373,
          name: "Binalonan",
          provinceId: 19,
        },
        {
          id: 374,
          name: "Binmaley",
          provinceId: 19,
        },
        {
          id: 375,
          name: "Bolinao",
          provinceId: 19,
        },
        {
          id: 376,
          name: "Bugallon",
          provinceId: 19,
        },
        {
          id: 377,
          name: "Burgos",
          provinceId: 19,
        },
        {
          id: 378,
          name: "Calasiao",
          provinceId: 19,
        },
        {
          id: 379,
          name: "Dagupan",
          provinceId: 19,
        },
        {
          id: 380,
          name: "Dasol",
          provinceId: 19,
        },
        {
          id: 381,
          name: "Infanta",
          provinceId: 19,
        },
        {
          id: 382,
          name: "Labrador",
          provinceId: 19,
        },
        {
          id: 383,
          name: "Laoac",
          provinceId: 19,
        },
        {
          id: 384,
          name: "Lingayen",
          provinceId: 19,
        },
        {
          id: 385,
          name: "Mabini",
          provinceId: 19,
        },
        {
          id: 386,
          name: "Malasiqui",
          provinceId: 19,
        },
        {
          id: 387,
          name: "Manaoag",
          provinceId: 19,
        },
        {
          id: 388,
          name: "Mangaldan",
          provinceId: 19,
        },
        {
          id: 389,
          name: "Mangatarem",
          provinceId: 19,
        },
        {
          id: 390,
          name: "Mapandan",
          provinceId: 19,
        },
        {
          id: 391,
          name: "Natividad",
          provinceId: 19,
        },
        {
          id: 392,
          name: "Pozorrubio",
          provinceId: 19,
        },
        {
          id: 393,
          name: "Rosales",
          provinceId: 19,
        },
        {
          id: 394,
          name: "San Carlos",
          provinceId: 19,
        },
        {
          id: 395,
          name: "San Fabian",
          provinceId: 19,
        },
        {
          id: 396,
          name: "San Jacinto",
          provinceId: 19,
        },
        {
          id: 397,
          name: "San Manuel",
          provinceId: 19,
        },
        {
          id: 398,
          name: "San Nicolas",
          provinceId: 19,
        },
        {
          id: 399,
          name: "San Quintin",
          provinceId: 19,
        },
        {
          id: 400,
          name: "Santa Barbara",
          provinceId: 19,
        },
        {
          id: 401,
          name: "Santa Maria",
          provinceId: 19,
        },
        {
          id: 402,
          name: "Santo Tomas",
          provinceId: 19,
        },
        {
          id: 403,
          name: "Sison",
          provinceId: 19,
        },
        {
          id: 404,
          name: "Sual",
          provinceId: 19,
        },
        {
          id: 405,
          name: "Tayug",
          provinceId: 19,
        },
        {
          id: 406,
          name: "Umingan",
          provinceId: 19,
        },
        {
          id: 407,
          name: "Urbiztondo",
          provinceId: 19,
        },
        {
          id: 408,
          name: "Urdaneta",
          provinceId: 19,
        },
        {
          id: 409,
          name: "Villasis",
          provinceId: 19,
        },
        {
          id: 410,
          name: "Aglipay",
          provinceId: 20,
        },
        {
          id: 411,
          name: "Cabarroguis",
          provinceId: 20,
        },
        {
          id: 412,
          name: "Diffun",
          provinceId: 20,
        },
        {
          id: 413,
          name: "Maddela",
          provinceId: 20,
        },
        {
          id: 414,
          name: "Nagtipunan",
          provinceId: 20,
        },
        {
          id: 415,
          name: "Saguday",
          provinceId: 20,
        },
        {
          id: 416,
          name: "Anao",
          provinceId: 21,
        },
        {
          id: 417,
          name: "Bamban",
          provinceId: 21,
        },
        {
          id: 418,
          name: "Camiling",
          provinceId: 21,
        },
        {
          id: 419,
          name: "Capas",
          provinceId: 21,
        },
        {
          id: 420,
          name: "Concepcion",
          provinceId: 21,
        },
        {
          id: 421,
          name: "Gerona",
          provinceId: 21,
        },
        {
          id: 422,
          name: "La Paz",
          provinceId: 21,
        },
        {
          id: 423,
          name: "Mayantoc",
          provinceId: 21,
        },
        {
          id: 424,
          name: "Moncada",
          provinceId: 21,
        },
        {
          id: 425,
          name: "Paniqui",
          provinceId: 21,
        },
        {
          id: 426,
          name: "Pura",
          provinceId: 21,
        },
        {
          id: 427,
          name: "Ramos",
          provinceId: 21,
        },
        {
          id: 428,
          name: "San Clemente",
          provinceId: 21,
        },
        {
          id: 429,
          name: "San Jose",
          provinceId: 21,
        },
        {
          id: 430,
          name: "San Manuel",
          provinceId: 21,
        },
        {
          id: 431,
          name: "Santa Ignacia",
          provinceId: 21,
        },
        {
          id: 432,
          name: "Tarlac City",
          provinceId: 21,
        },
        {
          id: 433,
          name: "Victoria",
          provinceId: 21,
        },
        {
          id: 434,
          name: "Botolan",
          provinceId: 22,
        },
        {
          id: 435,
          name: "Cabangan",
          provinceId: 22,
        },
        {
          id: 436,
          name: "Candelaria",
          provinceId: 22,
        },
        {
          id: 437,
          name: "Castillejos",
          provinceId: 22,
        },
        {
          id: 438,
          name: "Iba",
          provinceId: 22,
        },
        {
          id: 439,
          name: "Masinloc",
          provinceId: 22,
        },
        {
          id: 440,
          name: "Olongapo",
          provinceId: 22,
        },
        {
          id: 441,
          name: "Palauig",
          provinceId: 22,
        },
        {
          id: 442,
          name: "San Antonio",
          provinceId: 22,
        },
        {
          id: 443,
          name: "San Felipe",
          provinceId: 22,
        },
        {
          id: 444,
          name: "San Marcelino",
          provinceId: 22,
        },
        {
          id: 445,
          name: "San Narciso",
          provinceId: 22,
        },
        {
          id: 446,
          name: "Santa Cruz",
          provinceId: 22,
        },
        {
          id: 447,
          name: "Subic",
          provinceId: 22,
        },
        {
          id: 448,
          name: "Bacacay",
          provinceId: 23,
        },
        {
          id: 449,
          name: "Camalig",
          provinceId: 23,
        },
        {
          id: 450,
          name: "Daraga (Locsin)",
          provinceId: 23,
        },
        {
          id: 451,
          name: "Guinobatan",
          provinceId: 23,
        },
        {
          id: 452,
          name: "Jovellar",
          provinceId: 23,
        },
        {
          id: 453,
          name: "Legazpi",
          provinceId: 23,
        },
        {
          id: 454,
          name: "Libon",
          provinceId: 23,
        },
        {
          id: 455,
          name: "Ligao",
          provinceId: 23,
        },
        {
          id: 456,
          name: "Malilipot",
          provinceId: 23,
        },
        {
          id: 457,
          name: "Malinao",
          provinceId: 23,
        },
        {
          id: 458,
          name: "Manito",
          provinceId: 23,
        },
        {
          id: 459,
          name: "Oas",
          provinceId: 23,
        },
        {
          id: 460,
          name: "Pio Duran",
          provinceId: 23,
        },
        {
          id: 461,
          name: "Polangui",
          provinceId: 23,
        },
        {
          id: 462,
          name: "Rapu-Rapu",
          provinceId: 23,
        },
        {
          id: 463,
          name: "Santo Domingo",
          provinceId: 23,
        },
        {
          id: 464,
          name: "Tabaco",
          provinceId: 23,
        },
        {
          id: 465,
          name: "Tiwi",
          provinceId: 23,
        },
        {
          id: 466,
          name: "Baler",
          provinceId: 24,
        },
        {
          id: 467,
          name: "Casiguran",
          provinceId: 24,
        },
        {
          id: 468,
          name: "Dilasag",
          provinceId: 24,
        },
        {
          id: 469,
          name: "Dinalungan",
          provinceId: 24,
        },
        {
          id: 470,
          name: "Dingalan",
          provinceId: 24,
        },
        {
          id: 471,
          name: "Dipaculao",
          provinceId: 24,
        },
        {
          id: 472,
          name: "Maria Aurora",
          provinceId: 24,
        },
        {
          id: 473,
          name: "San Luis",
          provinceId: 24,
        },
        {
          id: 474,
          name: "Agoncillo",
          provinceId: 25,
        },
        {
          id: 475,
          name: "Alitagtag",
          provinceId: 25,
        },
        {
          id: 476,
          name: "Balayan",
          provinceId: 25,
        },
        {
          id: 477,
          name: "Balete",
          provinceId: 25,
        },
        {
          id: 478,
          name: "Batangas City",
          provinceId: 25,
        },
        {
          id: 479,
          name: "Bauan",
          provinceId: 25,
        },
        {
          id: 480,
          name: "Calaca",
          provinceId: 25,
        },
        {
          id: 481,
          name: "Calatagan",
          provinceId: 25,
        },
        {
          id: 482,
          name: "Cuenca",
          provinceId: 25,
        },
        {
          id: 483,
          name: "Ibaan",
          provinceId: 25,
        },
        {
          id: 484,
          name: "Laurel",
          provinceId: 25,
        },
        {
          id: 485,
          name: "Lemery",
          provinceId: 25,
        },
        {
          id: 486,
          name: "Lian",
          provinceId: 25,
        },
        {
          id: 487,
          name: "Lipa",
          provinceId: 25,
        },
        {
          id: 488,
          name: "Lobo",
          provinceId: 25,
        },
        {
          id: 489,
          name: "Mabini",
          provinceId: 25,
        },
        {
          id: 490,
          name: "Malvar",
          provinceId: 25,
        },
        {
          id: 491,
          name: "Mataasnakahoy",
          provinceId: 25,
        },
        {
          id: 492,
          name: "Nasugbu",
          provinceId: 25,
        },
        {
          id: 493,
          name: "Padre Garcia",
          provinceId: 25,
        },
        {
          id: 494,
          name: "Rosario",
          provinceId: 25,
        },
        {
          id: 495,
          name: "San Jose",
          provinceId: 25,
        },
        {
          id: 496,
          name: "San Juan",
          provinceId: 25,
        },
        {
          id: 497,
          name: "San Luis",
          provinceId: 25,
        },
        {
          id: 498,
          name: "San Nicolas",
          provinceId: 25,
        },
        {
          id: 499,
          name: "San Pascual",
          provinceId: 25,
        },
        {
          id: 500,
          name: "Santa Teresita",
          provinceId: 25,
        },
        {
          id: 501,
          name: "Santo Tomas",
          provinceId: 25,
        },
        {
          id: 502,
          name: "Taal",
          provinceId: 25,
        },
        {
          id: 503,
          name: "Talisay",
          provinceId: 25,
        },
        {
          id: 504,
          name: "Tanauan",
          provinceId: 25,
        },
        {
          id: 505,
          name: "Taysan",
          provinceId: 25,
        },
        {
          id: 506,
          name: "Tingloy",
          provinceId: 25,
        },
        {
          id: 507,
          name: "Tuy",
          provinceId: 25,
        },
        {
          id: 508,
          name: "Basud",
          provinceId: 26,
        },
        {
          id: 509,
          name: "Capalonga",
          provinceId: 26,
        },
        {
          id: 510,
          name: "Daet",
          provinceId: 26,
        },
        {
          id: 511,
          name: "Jose Panganiban",
          provinceId: 26,
        },
        {
          id: 512,
          name: "Labo",
          provinceId: 26,
        },
        {
          id: 513,
          name: "Mercedes",
          provinceId: 26,
        },
        {
          id: 514,
          name: "Paracale",
          provinceId: 26,
        },
        {
          id: 515,
          name: "San Lorenzo Ruiz (Imelda)",
          provinceId: 26,
        },
        {
          id: 516,
          name: "San Vicente",
          provinceId: 26,
        },
        {
          id: 517,
          name: "Santa Elena",
          provinceId: 26,
        },
        {
          id: 518,
          name: "Talisay",
          provinceId: 26,
        },
        {
          id: 519,
          name: "Vinzons",
          provinceId: 26,
        },
        {
          id: 520,
          name: "Baao",
          provinceId: 27,
        },
        {
          id: 521,
          name: "Balatan",
          provinceId: 27,
        },
        {
          id: 522,
          name: "Bato",
          provinceId: 27,
        },
        {
          id: 523,
          name: "Bombon",
          provinceId: 27,
        },
        {
          id: 524,
          name: "Buhi",
          provinceId: 27,
        },
        {
          id: 525,
          name: "Bula",
          provinceId: 27,
        },
        {
          id: 526,
          name: "Cabusao",
          provinceId: 27,
        },
        {
          id: 527,
          name: "Calabanga",
          provinceId: 27,
        },
        {
          id: 528,
          name: "Camaligan",
          provinceId: 27,
        },
        {
          id: 529,
          name: "Canaman",
          provinceId: 27,
        },
        {
          id: 530,
          name: "Caramoan",
          provinceId: 27,
        },
        {
          id: 531,
          name: "Del Gallego",
          provinceId: 27,
        },
        {
          id: 532,
          name: "Gainza",
          provinceId: 27,
        },
        {
          id: 533,
          name: "Garchitorena",
          provinceId: 27,
        },
        {
          id: 534,
          name: "Goa",
          provinceId: 27,
        },
        {
          id: 535,
          name: "Iriga",
          provinceId: 27,
        },
        {
          id: 536,
          name: "Lagonoy",
          provinceId: 27,
        },
        {
          id: 537,
          name: "Libmanan",
          provinceId: 27,
        },
        {
          id: 538,
          name: "Lupi",
          provinceId: 27,
        },
        {
          id: 539,
          name: "Magarao",
          provinceId: 27,
        },
        {
          id: 540,
          name: "Milaor",
          provinceId: 27,
        },
        {
          id: 541,
          name: "Minalabac",
          provinceId: 27,
        },
        {
          id: 542,
          name: "Nabua",
          provinceId: 27,
        },
        {
          id: 543,
          name: "Naga",
          provinceId: 27,
        },
        {
          id: 544,
          name: "Ocampo",
          provinceId: 27,
        },
        {
          id: 545,
          name: "Pamplona",
          provinceId: 27,
        },
        {
          id: 546,
          name: "Pasacao",
          provinceId: 27,
        },
        {
          id: 547,
          name: "Pili",
          provinceId: 27,
        },
        {
          id: 548,
          name: "Presentacion (Parubcan)",
          provinceId: 27,
        },
        {
          id: 549,
          name: "Ragay",
          provinceId: 27,
        },
        {
          id: 550,
          name: "Sagñay",
          provinceId: 27,
        },
        {
          id: 551,
          name: "San Fernando",
          provinceId: 27,
        },
        {
          id: 552,
          name: "San Jose",
          provinceId: 27,
        },
        {
          id: 553,
          name: "Sipocot",
          provinceId: 27,
        },
        {
          id: 554,
          name: "Siruma",
          provinceId: 27,
        },
        {
          id: 555,
          name: "Tigaon",
          provinceId: 27,
        },
        {
          id: 556,
          name: "Tinambac",
          provinceId: 27,
        },
        {
          id: 557,
          name: "Bagamanoc",
          provinceId: 28,
        },
        {
          id: 558,
          name: "Baras",
          provinceId: 28,
        },
        {
          id: 559,
          name: "Bato",
          provinceId: 28,
        },
        {
          id: 560,
          name: "Caramoran",
          provinceId: 28,
        },
        {
          id: 561,
          name: "Gigmoto",
          provinceId: 28,
        },
        {
          id: 562,
          name: "Pandan",
          provinceId: 28,
        },
        {
          id: 563,
          name: "Panganiban (Payo)",
          provinceId: 28,
        },
        {
          id: 564,
          name: "San Andres (Calolbon)",
          provinceId: 28,
        },
        {
          id: 565,
          name: "San Miguel",
          provinceId: 28,
        },
        {
          id: 566,
          name: "Viga",
          provinceId: 28,
        },
        {
          id: 567,
          name: "Virac",
          provinceId: 28,
        },
        {
          id: 568,
          name: "Alfonso",
          provinceId: 29,
        },
        {
          id: 569,
          name: "Amadeo",
          provinceId: 29,
        },
        {
          id: 570,
          name: "Bacoor",
          provinceId: 29,
        },
        {
          id: 571,
          name: "Carmona",
          provinceId: 29,
        },
        {
          id: 572,
          name: "Cavite City",
          provinceId: 29,
        },
        {
          id: 573,
          name: "Dasmariñas",
          provinceId: 29,
        },
        {
          id: 574,
          name: "General Emilio Aguinaldo",
          provinceId: 29,
        },
        {
          id: 575,
          name: "General Mariano Alvarez",
          provinceId: 29,
        },
        {
          id: 576,
          name: "General Trias",
          provinceId: 29,
        },
        {
          id: 577,
          name: "Imus",
          provinceId: 29,
        },
        {
          id: 578,
          name: "Indang",
          provinceId: 29,
        },
        {
          id: 579,
          name: "Kawit",
          provinceId: 29,
        },
        {
          id: 580,
          name: "Magallanes",
          provinceId: 29,
        },
        {
          id: 581,
          name: "Maragondon",
          provinceId: 29,
        },
        {
          id: 582,
          name: "Mendez (Mendez-Nuñez)",
          provinceId: 29,
        },
        {
          id: 583,
          name: "Naic",
          provinceId: 29,
        },
        {
          id: 584,
          name: "Noveleta",
          provinceId: 29,
        },
        {
          id: 585,
          name: "Rosario",
          provinceId: 29,
        },
        {
          id: 586,
          name: "Silang",
          provinceId: 29,
        },
        {
          id: 587,
          name: "Tagaytay",
          provinceId: 29,
        },
        {
          id: 588,
          name: "Tanza",
          provinceId: 29,
        },
        {
          id: 589,
          name: "Ternate",
          provinceId: 29,
        },
        {
          id: 590,
          name: "Trece Martires",
          provinceId: 29,
        },
        {
          id: 591,
          name: "Alaminos",
          provinceId: 30,
        },
        {
          id: 592,
          name: "Bay",
          provinceId: 30,
        },
        {
          id: 593,
          name: "Biñan",
          provinceId: 30,
        },
        {
          id: 594,
          name: "Cabuyao",
          provinceId: 30,
        },
        {
          id: 595,
          name: "Calamba",
          provinceId: 30,
        },
        {
          id: 596,
          name: "Calauan",
          provinceId: 30,
        },
        {
          id: 597,
          name: "Cavinti",
          provinceId: 30,
        },
        {
          id: 598,
          name: "Famy",
          provinceId: 30,
        },
        {
          id: 599,
          name: "Kalayaan",
          provinceId: 30,
        },
        {
          id: 600,
          name: "Liliw",
          provinceId: 30,
        },
        {
          id: 601,
          name: "Los Baños",
          provinceId: 30,
        },
        {
          id: 602,
          name: "Luisiana",
          provinceId: 30,
        },
        {
          id: 603,
          name: "Lumban",
          provinceId: 30,
        },
        {
          id: 604,
          name: "Mabitac",
          provinceId: 30,
        },
        {
          id: 605,
          name: "Magdalena",
          provinceId: 30,
        },
        {
          id: 606,
          name: "Majayjay",
          provinceId: 30,
        },
        {
          id: 607,
          name: "Nagcarlan",
          provinceId: 30,
        },
        {
          id: 608,
          name: "Paete",
          provinceId: 30,
        },
        {
          id: 609,
          name: "Pagsanjan",
          provinceId: 30,
        },
        {
          id: 610,
          name: "Pakil",
          provinceId: 30,
        },
        {
          id: 611,
          name: "Pangil",
          provinceId: 30,
        },
        {
          id: 612,
          name: "Pila",
          provinceId: 30,
        },
        {
          id: 613,
          name: "Rizal",
          provinceId: 30,
        },
        {
          id: 614,
          name: "San Pablo",
          provinceId: 30,
        },
        {
          id: 615,
          name: "San Pedro",
          provinceId: 30,
        },
        {
          id: 616,
          name: "Santa Cruz",
          provinceId: 30,
        },
        {
          id: 617,
          name: "Santa Maria",
          provinceId: 30,
        },
        {
          id: 618,
          name: "Santa Rosa",
          provinceId: 30,
        },
        {
          id: 619,
          name: "Siniloan",
          provinceId: 30,
        },
        {
          id: 620,
          name: "Victoria",
          provinceId: 30,
        },
        {
          id: 621,
          name: "Boac",
          provinceId: 31,
        },
        {
          id: 622,
          name: "Buenavista",
          provinceId: 31,
        },
        {
          id: 623,
          name: "Gasan",
          provinceId: 31,
        },
        {
          id: 624,
          name: "Mogpog",
          provinceId: 31,
        },
        {
          id: 625,
          name: "Santa Cruz",
          provinceId: 31,
        },
        {
          id: 626,
          name: "Torrijos",
          provinceId: 31,
        },
        {
          id: 627,
          name: "Aroroy",
          provinceId: 32,
        },
        {
          id: 628,
          name: "Baleno",
          provinceId: 32,
        },
        {
          id: 629,
          name: "Balud",
          provinceId: 32,
        },
        {
          id: 630,
          name: "Batuan",
          provinceId: 32,
        },
        {
          id: 631,
          name: "Cataingan",
          provinceId: 32,
        },
        {
          id: 632,
          name: "Cawayan",
          provinceId: 32,
        },
        {
          id: 633,
          name: "Claveria",
          provinceId: 32,
        },
        {
          id: 634,
          name: "Dimasalang",
          provinceId: 32,
        },
        {
          id: 635,
          name: "Esperanza",
          provinceId: 32,
        },
        {
          id: 636,
          name: "Mandaon",
          provinceId: 32,
        },
        {
          id: 637,
          name: "Masbate City",
          provinceId: 32,
        },
        {
          id: 638,
          name: "Milagros",
          provinceId: 32,
        },
        {
          id: 639,
          name: "Mobo",
          provinceId: 32,
        },
        {
          id: 640,
          name: "Monreal",
          provinceId: 32,
        },
        {
          id: 641,
          name: "Palanas",
          provinceId: 32,
        },
        {
          id: 642,
          name: "Pio V. Corpuz (Limbuhan)",
          provinceId: 32,
        },
        {
          id: 643,
          name: "Placer",
          provinceId: 32,
        },
        {
          id: 644,
          name: "San Fernando",
          provinceId: 32,
        },
        {
          id: 645,
          name: "San Jacinto",
          provinceId: 32,
        },
        {
          id: 646,
          name: "San Pascual",
          provinceId: 32,
        },
        {
          id: 647,
          name: "Uson",
          provinceId: 32,
        },
        {
          id: 648,
          name: "Abra de Ilog",
          provinceId: 33,
        },
        {
          id: 649,
          name: "Calintaan",
          provinceId: 33,
        },
        {
          id: 650,
          name: "Looc",
          provinceId: 33,
        },
        {
          id: 651,
          name: "Lubang",
          provinceId: 33,
        },
        {
          id: 652,
          name: "Magsaysay",
          provinceId: 33,
        },
        {
          id: 653,
          name: "Mamburao",
          provinceId: 33,
        },
        {
          id: 654,
          name: "Paluan",
          provinceId: 33,
        },
        {
          id: 655,
          name: "Rizal",
          provinceId: 33,
        },
        {
          id: 656,
          name: "Sablayan",
          provinceId: 33,
        },
        {
          id: 657,
          name: "San Jose",
          provinceId: 33,
        },
        {
          id: 658,
          name: "Santa Cruz",
          provinceId: 33,
        },
        {
          id: 659,
          name: "Baco",
          provinceId: 34,
        },
        {
          id: 660,
          name: "Bansud",
          provinceId: 34,
        },
        {
          id: 661,
          name: "Bongabong",
          provinceId: 34,
        },
        {
          id: 662,
          name: "Bulalacao (San Pedro)",
          provinceId: 34,
        },
        {
          id: 663,
          name: "Calapan",
          provinceId: 34,
        },
        {
          id: 664,
          name: "Gloria",
          provinceId: 34,
        },
        {
          id: 665,
          name: "Mansalay",
          provinceId: 34,
        },
        {
          id: 666,
          name: "Naujan",
          provinceId: 34,
        },
        {
          id: 667,
          name: "Pinamalayan",
          provinceId: 34,
        },
        {
          id: 668,
          name: "Pola",
          provinceId: 34,
        },
        {
          id: 669,
          name: "Puerto Galera",
          provinceId: 34,
        },
        {
          id: 670,
          name: "Roxas",
          provinceId: 34,
        },
        {
          id: 671,
          name: "San Teodoro",
          provinceId: 34,
        },
        {
          id: 672,
          name: "Socorro",
          provinceId: 34,
        },
        {
          id: 673,
          name: "Victoria",
          provinceId: 34,
        },
        {
          id: 674,
          name: "Aborlan",
          provinceId: 35,
        },
        {
          id: 675,
          name: "Agutaya",
          provinceId: 35,
        },
        {
          id: 676,
          name: "Araceli",
          provinceId: 35,
        },
        {
          id: 677,
          name: "Balabac",
          provinceId: 35,
        },
        {
          id: 678,
          name: "Bataraza",
          provinceId: 35,
        },
        {
          id: 679,
          name: "Brookes Point",
          provinceId: 35,
        },
        {
          id: 680,
          name: "Busuanga",
          provinceId: 35,
        },
        {
          id: 681,
          name: "Cagayancillo",
          provinceId: 35,
        },
        {
          id: 682,
          name: "Coron",
          provinceId: 35,
        },
        {
          id: 683,
          name: "Culion",
          provinceId: 35,
        },
        {
          id: 684,
          name: "Cuyo",
          provinceId: 35,
        },
        {
          id: 685,
          name: "Dumaran",
          provinceId: 35,
        },
        {
          id: 686,
          name: "El Nido (Bacuit)",
          provinceId: 35,
        },
        {
          id: 687,
          name: "Kalayaan",
          provinceId: 35,
        },
        {
          id: 688,
          name: "Linapacan",
          provinceId: 35,
        },
        {
          id: 689,
          name: "Magsaysay",
          provinceId: 35,
        },
        {
          id: 690,
          name: "Narra",
          provinceId: 35,
        },
        {
          id: 691,
          name: "Puerto Princesa",
          provinceId: 35,
        },
        {
          id: 692,
          name: "Quezon",
          provinceId: 35,
        },
        {
          id: 693,
          name: "Rizal (Marcos)",
          provinceId: 35,
        },
        {
          id: 694,
          name: "Roxas",
          provinceId: 35,
        },
        {
          id: 695,
          name: "San Vicente",
          provinceId: 35,
        },
        {
          id: 696,
          name: "Sofronio Española",
          provinceId: 35,
        },
        {
          id: 697,
          name: "Taytay",
          provinceId: 35,
        },
        {
          id: 698,
          name: "Agdangan",
          provinceId: 36,
        },
        {
          id: 699,
          name: "Alabat",
          provinceId: 36,
        },
        {
          id: 700,
          name: "Atimonan",
          provinceId: 36,
        },
        {
          id: 701,
          name: "Buenavista",
          provinceId: 36,
        },
        {
          id: 702,
          name: "Burdeos",
          provinceId: 36,
        },
        {
          id: 703,
          name: "Calauag",
          provinceId: 36,
        },
        {
          id: 704,
          name: "Candelaria",
          provinceId: 36,
        },
        {
          id: 705,
          name: "Catanauan",
          provinceId: 36,
        },
        {
          id: 706,
          name: "Dolores",
          provinceId: 36,
        },
        {
          id: 707,
          name: "General Luna",
          provinceId: 36,
        },
        {
          id: 708,
          name: "General Nakar",
          provinceId: 36,
        },
        {
          id: 709,
          name: "Guinayangan",
          provinceId: 36,
        },
        {
          id: 710,
          name: "Gumaca",
          provinceId: 36,
        },
        {
          id: 711,
          name: "Infanta",
          provinceId: 36,
        },
        {
          id: 712,
          name: "Jomalig",
          provinceId: 36,
        },
        {
          id: 713,
          name: "Lopez",
          provinceId: 36,
        },
        {
          id: 714,
          name: "Lucban",
          provinceId: 36,
        },
        {
          id: 715,
          name: "Lucena",
          provinceId: 36,
        },
        {
          id: 716,
          name: "Macalelon",
          provinceId: 36,
        },
        {
          id: 717,
          name: "Mauban",
          provinceId: 36,
        },
        {
          id: 718,
          name: "Mulanay",
          provinceId: 36,
        },
        {
          id: 719,
          name: "Padre Burgos",
          provinceId: 36,
        },
        {
          id: 720,
          name: "Pagbilao",
          provinceId: 36,
        },
        {
          id: 721,
          name: "Panukulan",
          provinceId: 36,
        },
        {
          id: 722,
          name: "Patnanungan",
          provinceId: 36,
        },
        {
          id: 723,
          name: "Perez",
          provinceId: 36,
        },
        {
          id: 724,
          name: "Pitogo",
          provinceId: 36,
        },
        {
          id: 725,
          name: "Plaridel",
          provinceId: 36,
        },
        {
          id: 726,
          name: "Polillo",
          provinceId: 36,
        },
        {
          id: 727,
          name: "Quezon",
          provinceId: 36,
        },
        {
          id: 728,
          name: "Real",
          provinceId: 36,
        },
        {
          id: 729,
          name: "Sampaloc",
          provinceId: 36,
        },
        {
          id: 730,
          name: "San Andres",
          provinceId: 36,
        },
        {
          id: 731,
          name: "San Antonio",
          provinceId: 36,
        },
        {
          id: 732,
          name: "San Francisco (Aurora)",
          provinceId: 36,
        },
        {
          id: 733,
          name: "San Narciso",
          provinceId: 36,
        },
        {
          id: 734,
          name: "Sariaya",
          provinceId: 36,
        },
        {
          id: 735,
          name: "Tagkawayan",
          provinceId: 36,
        },
        {
          id: 736,
          name: "Tayabas",
          provinceId: 36,
        },
        {
          id: 737,
          name: "Tiaong",
          provinceId: 36,
        },
        {
          id: 738,
          name: "Unisan",
          provinceId: 36,
        },
        {
          id: 739,
          name: "Angono",
          provinceId: 37,
        },
        {
          id: 740,
          name: "Antipolo",
          provinceId: 37,
        },
        {
          id: 741,
          name: "Baras",
          provinceId: 37,
        },
        {
          id: 742,
          name: "Binangonan",
          provinceId: 37,
        },
        {
          id: 743,
          name: "Cainta",
          provinceId: 37,
        },
        {
          id: 744,
          name: "Cardona",
          provinceId: 37,
        },
        {
          id: 745,
          name: "Jalajala",
          provinceId: 37,
        },
        {
          id: 746,
          name: "Morong",
          provinceId: 37,
        },
        {
          id: 747,
          name: "Pililla",
          provinceId: 37,
        },
        {
          id: 748,
          name: "Rodriguez (Montalban)",
          provinceId: 37,
        },
        {
          id: 749,
          name: "San Mateo",
          provinceId: 37,
        },
        {
          id: 750,
          name: "Tanay",
          provinceId: 37,
        },
        {
          id: 751,
          name: "Taytay",
          provinceId: 37,
        },
        {
          id: 752,
          name: "Teresa",
          provinceId: 37,
        },
        {
          id: 753,
          name: "Alcantara",
          provinceId: 38,
        },
        {
          id: 754,
          name: "Banton (Jones)",
          provinceId: 38,
        },
        {
          id: 755,
          name: "Cajidiocan",
          provinceId: 38,
        },
        {
          id: 756,
          name: "Calatrava",
          provinceId: 38,
        },
        {
          id: 757,
          name: "Concepcion",
          provinceId: 38,
        },
        {
          id: 758,
          name: "Corcuera",
          provinceId: 38,
        },
        {
          id: 759,
          name: "Ferrol",
          provinceId: 38,
        },
        {
          id: 760,
          name: "Looc",
          provinceId: 38,
        },
        {
          id: 761,
          name: "Magdiwang",
          provinceId: 38,
        },
        {
          id: 762,
          name: "Odiongan",
          provinceId: 38,
        },
        {
          id: 763,
          name: "Romblon",
          provinceId: 38,
        },
        {
          id: 764,
          name: "San Agustin",
          provinceId: 38,
        },
        {
          id: 765,
          name: "San Andres",
          provinceId: 38,
        },
        {
          id: 766,
          name: "San Fernando",
          provinceId: 38,
        },
        {
          id: 767,
          name: "San Jose",
          provinceId: 38,
        },
        {
          id: 768,
          name: "Santa Fe",
          provinceId: 38,
        },
        {
          id: 769,
          name: "Santa Maria (Imelda)",
          provinceId: 38,
        },
        {
          id: 770,
          name: "Barcelona",
          provinceId: 39,
        },
        {
          id: 771,
          name: "Bulan",
          provinceId: 39,
        },
        {
          id: 772,
          name: "Bulusan",
          provinceId: 39,
        },
        {
          id: 773,
          name: "Casiguran",
          provinceId: 39,
        },
        {
          id: 774,
          name: "Castilla",
          provinceId: 39,
        },
        {
          id: 775,
          name: "Donsol",
          provinceId: 39,
        },
        {
          id: 776,
          name: "Gubat",
          provinceId: 39,
        },
        {
          id: 777,
          name: "Irosin",
          provinceId: 39,
        },
        {
          id: 778,
          name: "Juban",
          provinceId: 39,
        },
        {
          id: 779,
          name: "Magallanes",
          provinceId: 39,
        },
        {
          id: 780,
          name: "Matnog",
          provinceId: 39,
        },
        {
          id: 781,
          name: "Pilar",
          provinceId: 39,
        },
        {
          id: 782,
          name: "Prieto Diaz",
          provinceId: 39,
        },
        {
          id: 783,
          name: "Santa Magdalena",
          provinceId: 39,
        },
        {
          id: 784,
          name: "Sorsogon City",
          provinceId: 39,
        },
        {
          id: 785,
          name: "Altavas",
          provinceId: 40,
        },
        {
          id: 786,
          name: "Balete",
          provinceId: 40,
        },
        {
          id: 787,
          name: "Banga",
          provinceId: 40,
        },
        {
          id: 788,
          name: "Batan",
          provinceId: 40,
        },
        {
          id: 789,
          name: "Buruanga",
          provinceId: 40,
        },
        {
          id: 790,
          name: "Ibajay",
          provinceId: 40,
        },
        {
          id: 791,
          name: "Kalibo",
          provinceId: 40,
        },
        {
          id: 792,
          name: "Lezo",
          provinceId: 40,
        },
        {
          id: 793,
          name: "Libacao",
          provinceId: 40,
        },
        {
          id: 794,
          name: "Madalag",
          provinceId: 40,
        },
        {
          id: 795,
          name: "Makato",
          provinceId: 40,
        },
        {
          id: 796,
          name: "Malay",
          provinceId: 40,
        },
        {
          id: 797,
          name: "Malinao",
          provinceId: 40,
        },
        {
          id: 798,
          name: "Nabas",
          provinceId: 40,
        },
        {
          id: 799,
          name: "New Washington",
          provinceId: 40,
        },
        {
          id: 800,
          name: "Numancia",
          provinceId: 40,
        },
        {
          id: 801,
          name: "Tangalan",
          provinceId: 40,
        },
        {
          id: 802,
          name: "Anini-y",
          provinceId: 41,
        },
        {
          id: 803,
          name: "Barbaza",
          provinceId: 41,
        },
        {
          id: 804,
          name: "Belison",
          provinceId: 41,
        },
        {
          id: 805,
          name: "Bugasong",
          provinceId: 41,
        },
        {
          id: 806,
          name: "Caluya",
          provinceId: 41,
        },
        {
          id: 807,
          name: "Culasi",
          provinceId: 41,
        },
        {
          id: 808,
          name: "Hamtic",
          provinceId: 41,
        },
        {
          id: 809,
          name: "Laua-an",
          provinceId: 41,
        },
        {
          id: 810,
          name: "Libertad",
          provinceId: 41,
        },
        {
          id: 811,
          name: "Pandan",
          provinceId: 41,
        },
        {
          id: 812,
          name: "Patnongon",
          provinceId: 41,
        },
        {
          id: 813,
          name: "San Jose de Buenavista",
          provinceId: 41,
        },
        {
          id: 814,
          name: "San Remigio",
          provinceId: 41,
        },
        {
          id: 815,
          name: "Sebaste",
          provinceId: 41,
        },
        {
          id: 816,
          name: "Sibalom",
          provinceId: 41,
        },
        {
          id: 817,
          name: "Tibiao",
          provinceId: 41,
        },
        {
          id: 818,
          name: "Tobias Fornier (Dao)",
          provinceId: 41,
        },
        {
          id: 819,
          name: "Valderrama",
          provinceId: 41,
        },
        {
          id: 820,
          name: "Almeria",
          provinceId: 42,
        },
        {
          id: 821,
          name: "Biliran",
          provinceId: 42,
        },
        {
          id: 822,
          name: "Cabucgayan",
          provinceId: 42,
        },
        {
          id: 823,
          name: "Caibiran",
          provinceId: 42,
        },
        {
          id: 824,
          name: "Culaba",
          provinceId: 42,
        },
        {
          id: 825,
          name: "Kawayan",
          provinceId: 42,
        },
        {
          id: 826,
          name: "Maripipi",
          provinceId: 42,
        },
        {
          id: 827,
          name: "Naval",
          provinceId: 42,
        },
        {
          id: 828,
          name: "Alburquerque",
          provinceId: 43,
        },
        {
          id: 829,
          name: "Alicia",
          provinceId: 43,
        },
        {
          id: 830,
          name: "Anda",
          provinceId: 43,
        },
        {
          id: 831,
          name: "Antequera",
          provinceId: 43,
        },
        {
          id: 832,
          name: "Baclayon",
          provinceId: 43,
        },
        {
          id: 833,
          name: "Balilihan",
          provinceId: 43,
        },
        {
          id: 834,
          name: "Batuan",
          provinceId: 43,
        },
        {
          id: 835,
          name: "Bien Unido",
          provinceId: 43,
        },
        {
          id: 836,
          name: "Bilar",
          provinceId: 43,
        },
        {
          id: 837,
          name: "Buenavista",
          provinceId: 43,
        },
        {
          id: 838,
          name: "Calape",
          provinceId: 43,
        },
        {
          id: 839,
          name: "Candijay",
          provinceId: 43,
        },
        {
          id: 840,
          name: "Carmen",
          provinceId: 43,
        },
        {
          id: 841,
          name: "Catigbian",
          provinceId: 43,
        },
        {
          id: 842,
          name: "Clarin",
          provinceId: 43,
        },
        {
          id: 843,
          name: "Corella",
          provinceId: 43,
        },
        {
          id: 844,
          name: "Cortes",
          provinceId: 43,
        },
        {
          id: 845,
          name: "Dagohoy",
          provinceId: 43,
        },
        {
          id: 846,
          name: "Danao",
          provinceId: 43,
        },
        {
          id: 847,
          name: "Dauis",
          provinceId: 43,
        },
        {
          id: 848,
          name: "Dimiao",
          provinceId: 43,
        },
        {
          id: 849,
          name: "Duero",
          provinceId: 43,
        },
        {
          id: 850,
          name: "Garcia Hernandez",
          provinceId: 43,
        },
        {
          id: 851,
          name: "Getafe",
          provinceId: 43,
        },
        {
          id: 852,
          name: "Guindulman",
          provinceId: 43,
        },
        {
          id: 853,
          name: "Inabanga",
          provinceId: 43,
        },
        {
          id: 854,
          name: "Jagna",
          provinceId: 43,
        },
        {
          id: 855,
          name: "Lila",
          provinceId: 43,
        },
        {
          id: 856,
          name: "Loay",
          provinceId: 43,
        },
        {
          id: 857,
          name: "Loboc",
          provinceId: 43,
        },
        {
          id: 858,
          name: "Loon",
          provinceId: 43,
        },
        {
          id: 859,
          name: "Mabini",
          provinceId: 43,
        },
        {
          id: 860,
          name: "Maribojoc",
          provinceId: 43,
        },
        {
          id: 861,
          name: "Panglao",
          provinceId: 43,
        },
        {
          id: 862,
          name: "Pilar",
          provinceId: 43,
        },
        {
          id: 863,
          name: "President Carlos P. Garcia (Pitogo)",
          provinceId: 43,
        },
        {
          id: 864,
          name: "Sagbayan (Borja)",
          provinceId: 43,
        },
        {
          id: 865,
          name: "San Isidro",
          provinceId: 43,
        },
        {
          id: 866,
          name: "San Miguel",
          provinceId: 43,
        },
        {
          id: 867,
          name: "Sevilla",
          provinceId: 43,
        },
        {
          id: 868,
          name: "Sierra Bullones",
          provinceId: 43,
        },
        {
          id: 869,
          name: "Sikatuna",
          provinceId: 43,
        },
        {
          id: 870,
          name: "Tagbilaran",
          provinceId: 43,
        },
        {
          id: 871,
          name: "Talibon",
          provinceId: 43,
        },
        {
          id: 872,
          name: "Trinidad",
          provinceId: 43,
        },
        {
          id: 873,
          name: "Tubigon",
          provinceId: 43,
        },
        {
          id: 874,
          name: "Ubay",
          provinceId: 43,
        },
        {
          id: 875,
          name: "Valencia",
          provinceId: 43,
        },
        {
          id: 876,
          name: "Cuartero",
          provinceId: 44,
        },
        {
          id: 877,
          name: "Dao",
          provinceId: 44,
        },
        {
          id: 878,
          name: "Dumalag",
          provinceId: 44,
        },
        {
          id: 879,
          name: "Dumarao",
          provinceId: 44,
        },
        {
          id: 880,
          name: "Ivisan",
          provinceId: 44,
        },
        {
          id: 881,
          name: "Jamindan",
          provinceId: 44,
        },
        {
          id: 882,
          name: "Maayon",
          provinceId: 44,
        },
        {
          id: 883,
          name: "Mambusao",
          provinceId: 44,
        },
        {
          id: 884,
          name: "Panay",
          provinceId: 44,
        },
        {
          id: 885,
          name: "Panitan",
          provinceId: 44,
        },
        {
          id: 886,
          name: "Pilar",
          provinceId: 44,
        },
        {
          id: 887,
          name: "Pontevedra",
          provinceId: 44,
        },
        {
          id: 888,
          name: "President Roxas",
          provinceId: 44,
        },
        {
          id: 889,
          name: "Roxas City",
          provinceId: 44,
        },
        {
          id: 890,
          name: "Sapian",
          provinceId: 44,
        },
        {
          id: 891,
          name: "Sigma",
          provinceId: 44,
        },
        {
          id: 892,
          name: "Tapaz",
          provinceId: 44,
        },
        {
          id: 893,
          name: "Alcantara",
          provinceId: 45,
        },
        {
          id: 894,
          name: "Alcoy",
          provinceId: 45,
        },
        {
          id: 895,
          name: "Alegria",
          provinceId: 45,
        },
        {
          id: 896,
          name: "Aloguinsan",
          provinceId: 45,
        },
        {
          id: 897,
          name: "Argao",
          provinceId: 45,
        },
        {
          id: 898,
          name: "Asturias",
          provinceId: 45,
        },
        {
          id: 899,
          name: "Badian",
          provinceId: 45,
        },
        {
          id: 900,
          name: "Balamban",
          provinceId: 45,
        },
        {
          id: 901,
          name: "Bantayan",
          provinceId: 45,
        },
        {
          id: 902,
          name: "Barili",
          provinceId: 45,
        },
        {
          id: 903,
          name: "Bogo",
          provinceId: 45,
        },
        {
          id: 904,
          name: "Boljoon",
          provinceId: 45,
        },
        {
          id: 905,
          name: "Borbon",
          provinceId: 45,
        },
        {
          id: 906,
          name: "Carcar",
          provinceId: 45,
        },
        {
          id: 907,
          name: "Carmen",
          provinceId: 45,
        },
        {
          id: 908,
          name: "Catmon",
          provinceId: 45,
        },
        {
          id: 909,
          name: "Cebu City",
          provinceId: 45,
        },
        {
          id: 910,
          name: "Compostela",
          provinceId: 45,
        },
        {
          id: 911,
          name: "Consolacion",
          provinceId: 45,
        },
        {
          id: 912,
          name: "Cordova",
          provinceId: 45,
        },
        {
          id: 913,
          name: "Daanbantayan",
          provinceId: 45,
        },
        {
          id: 914,
          name: "Dalaguete",
          provinceId: 45,
        },
        {
          id: 915,
          name: "Danao",
          provinceId: 45,
        },
        {
          id: 916,
          name: "Dumanjug",
          provinceId: 45,
        },
        {
          id: 917,
          name: "Ginatilan",
          provinceId: 45,
        },
        {
          id: 918,
          name: "Lapu-Lapu (Opon)",
          provinceId: 45,
        },
        {
          id: 919,
          name: "Liloan",
          provinceId: 45,
        },
        {
          id: 920,
          name: "Madridejos",
          provinceId: 45,
        },
        {
          id: 921,
          name: "Malabuyoc",
          provinceId: 45,
        },
        {
          id: 922,
          name: "Mandaue",
          provinceId: 45,
        },
        {
          id: 923,
          name: "Medellin",
          provinceId: 45,
        },
        {
          id: 924,
          name: "Minglanilla",
          provinceId: 45,
        },
        {
          id: 925,
          name: "Moalboal",
          provinceId: 45,
        },
        {
          id: 926,
          name: "Naga",
          provinceId: 45,
        },
        {
          id: 927,
          name: "Oslob",
          provinceId: 45,
        },
        {
          id: 928,
          name: "Pilar",
          provinceId: 45,
        },
        {
          id: 929,
          name: "Pinamungajan",
          provinceId: 45,
        },
        {
          id: 930,
          name: "Poro",
          provinceId: 45,
        },
        {
          id: 931,
          name: "Ronda",
          provinceId: 45,
        },
        {
          id: 932,
          name: "Samboan",
          provinceId: 45,
        },
        {
          id: 933,
          name: "San Fernando",
          provinceId: 45,
        },
        {
          id: 934,
          name: "San Francisco",
          provinceId: 45,
        },
        {
          id: 935,
          name: "San Remigio",
          provinceId: 45,
        },
        {
          id: 936,
          name: "Santa Fe",
          provinceId: 45,
        },
        {
          id: 937,
          name: "Santander",
          provinceId: 45,
        },
        {
          id: 938,
          name: "Sibonga",
          provinceId: 45,
        },
        {
          id: 939,
          name: "Sogod",
          provinceId: 45,
        },
        {
          id: 940,
          name: "Tabogon",
          provinceId: 45,
        },
        {
          id: 941,
          name: "Tabuelan",
          provinceId: 45,
        },
        {
          id: 942,
          name: "Talisay",
          provinceId: 45,
        },
        {
          id: 943,
          name: "Toledo",
          provinceId: 45,
        },
        {
          id: 944,
          name: "Tuburan",
          provinceId: 45,
        },
        {
          id: 945,
          name: "Tudela",
          provinceId: 45,
        },
        {
          id: 946,
          name: "Basilisa (Rizal)",
          provinceId: 46,
        },
        {
          id: 947,
          name: "Cagdianao",
          provinceId: 46,
        },
        {
          id: 948,
          name: "Dinagat",
          provinceId: 46,
        },
        {
          id: 949,
          name: "Libjo (Albor)",
          provinceId: 46,
        },
        {
          id: 950,
          name: "Loreto",
          provinceId: 46,
        },
        {
          id: 951,
          name: "San Jose",
          provinceId: 46,
        },
        {
          id: 952,
          name: "Tubajon",
          provinceId: 46,
        },
        {
          id: 953,
          name: "Arteche",
          provinceId: 47,
        },
        {
          id: 954,
          name: "Balangiga",
          provinceId: 47,
        },
        {
          id: 955,
          name: "Balangkayan",
          provinceId: 47,
        },
        {
          id: 956,
          name: "Borongan",
          provinceId: 47,
        },
        {
          id: 957,
          name: "Can-avid",
          provinceId: 47,
        },
        {
          id: 958,
          name: "Dolores",
          provinceId: 47,
        },
        {
          id: 959,
          name: "General MacArthur",
          provinceId: 47,
        },
        {
          id: 960,
          name: "Giporlos",
          provinceId: 47,
        },
        {
          id: 961,
          name: "Guiuan",
          provinceId: 47,
        },
        {
          id: 962,
          name: "Hernani",
          provinceId: 47,
        },
        {
          id: 963,
          name: "Jipapad",
          provinceId: 47,
        },
        {
          id: 964,
          name: "Lawaan",
          provinceId: 47,
        },
        {
          id: 965,
          name: "Llorente",
          provinceId: 47,
        },
        {
          id: 966,
          name: "Maslog",
          provinceId: 47,
        },
        {
          id: 967,
          name: "Maydolong",
          provinceId: 47,
        },
        {
          id: 968,
          name: "Mercedes",
          provinceId: 47,
        },
        {
          id: 969,
          name: "Oras",
          provinceId: 47,
        },
        {
          id: 970,
          name: "Quinapondan",
          provinceId: 47,
        },
        {
          id: 971,
          name: "Salcedo",
          provinceId: 47,
        },
        {
          id: 972,
          name: "San Julian",
          provinceId: 47,
        },
        {
          id: 973,
          name: "San Policarpo",
          provinceId: 47,
        },
        {
          id: 974,
          name: "Sulat",
          provinceId: 47,
        },
        {
          id: 975,
          name: "Taft",
          provinceId: 47,
        },
        {
          id: 976,
          name: "Buenavista",
          provinceId: 48,
        },
        {
          id: 977,
          name: "Jordan",
          provinceId: 48,
        },
        {
          id: 978,
          name: "Nueva Valencia",
          provinceId: 48,
        },
        {
          id: 979,
          name: "San Lorenzo",
          provinceId: 48,
        },
        {
          id: 980,
          name: "Sibunag",
          provinceId: 48,
        },
        {
          id: 981,
          name: "Ajuy",
          provinceId: 49,
        },
        {
          id: 982,
          name: "Alimodian",
          provinceId: 49,
        },
        {
          id: 983,
          name: "Anilao",
          provinceId: 49,
        },
        {
          id: 984,
          name: "Badiangan",
          provinceId: 49,
        },
        {
          id: 985,
          name: "Balasan",
          provinceId: 49,
        },
        {
          id: 986,
          name: "Banate",
          provinceId: 49,
        },
        {
          id: 987,
          name: "Barotac Nuevo",
          provinceId: 49,
        },
        {
          id: 988,
          name: "Barotac Viejo",
          provinceId: 49,
        },
        {
          id: 989,
          name: "Batad",
          provinceId: 49,
        },
        {
          id: 990,
          name: "Bingawan",
          provinceId: 49,
        },
        {
          id: 991,
          name: "Cabatuan",
          provinceId: 49,
        },
        {
          id: 992,
          name: "Calinog",
          provinceId: 49,
        },
        {
          id: 993,
          name: "Carles",
          provinceId: 49,
        },
        {
          id: 994,
          name: "Concepcion",
          provinceId: 49,
        },
        {
          id: 995,
          name: "Dingle",
          provinceId: 49,
        },
        {
          id: 996,
          name: "Dueñas",
          provinceId: 49,
        },
        {
          id: 997,
          name: "Dumangas",
          provinceId: 49,
        },
        {
          id: 998,
          name: "Estancia",
          provinceId: 49,
        },
        {
          id: 999,
          name: "Guimbal",
          provinceId: 49,
        },
        {
          id: 1000,
          name: "Igbaras",
          provinceId: 49,
        },
        {
          id: 1001,
          name: "Iloilo City",
          provinceId: 49,
        },
        {
          id: 1002,
          name: "Janiuay",
          provinceId: 49,
        },
        {
          id: 1003,
          name: "Lambunao",
          provinceId: 49,
        },
        {
          id: 1004,
          name: "Leganes",
          provinceId: 49,
        },
        {
          id: 1005,
          name: "Lemery",
          provinceId: 49,
        },
        {
          id: 1006,
          name: "Leon",
          provinceId: 49,
        },
        {
          id: 1007,
          name: "Maasin",
          provinceId: 49,
        },
        {
          id: 1008,
          name: "Miagao",
          provinceId: 49,
        },
        {
          id: 1009,
          name: "Mina",
          provinceId: 49,
        },
        {
          id: 1010,
          name: "New Lucena",
          provinceId: 49,
        },
        {
          id: 1011,
          name: "Oton",
          provinceId: 49,
        },
        {
          id: 1012,
          name: "Passi",
          provinceId: 49,
        },
        {
          id: 1013,
          name: "Pavia",
          provinceId: 49,
        },
        {
          id: 1014,
          name: "Pototan",
          provinceId: 49,
        },
        {
          id: 1015,
          name: "San Dionisio",
          provinceId: 49,
        },
        {
          id: 1016,
          name: "San Enrique",
          provinceId: 49,
        },
        {
          id: 1017,
          name: "San Joaquin",
          provinceId: 49,
        },
        {
          id: 1018,
          name: "San Miguel",
          provinceId: 49,
        },
        {
          id: 1019,
          name: "San Rafael",
          provinceId: 49,
        },
        {
          id: 1020,
          name: "Santa Barbara",
          provinceId: 49,
        },
        {
          id: 1021,
          name: "Sara",
          provinceId: 49,
        },
        {
          id: 1022,
          name: "Tigbauan",
          provinceId: 49,
        },
        {
          id: 1023,
          name: "Tubungan",
          provinceId: 49,
        },
        {
          id: 1024,
          name: "Zarraga",
          provinceId: 49,
        },
        {
          id: 1025,
          name: "Abuyog",
          provinceId: 50,
        },
        {
          id: 1026,
          name: "Alangalang",
          provinceId: 50,
        },
        {
          id: 1027,
          name: "Albuera",
          provinceId: 50,
        },
        {
          id: 1028,
          name: "Babatngon",
          provinceId: 50,
        },
        {
          id: 1029,
          name: "Barugo",
          provinceId: 50,
        },
        {
          id: 1030,
          name: "Bato",
          provinceId: 50,
        },
        {
          id: 1031,
          name: "Baybay",
          provinceId: 50,
        },
        {
          id: 1032,
          name: "Burauen",
          provinceId: 50,
        },
        {
          id: 1033,
          name: "Calubian",
          provinceId: 50,
        },
        {
          id: 1034,
          name: "Capoocan",
          provinceId: 50,
        },
        {
          id: 1035,
          name: "Carigara",
          provinceId: 50,
        },
        {
          id: 1036,
          name: "Dagami",
          provinceId: 50,
        },
        {
          id: 1037,
          name: "Dulag",
          provinceId: 50,
        },
        {
          id: 1038,
          name: "Hilongos",
          provinceId: 50,
        },
        {
          id: 1039,
          name: "Hindang",
          provinceId: 50,
        },
        {
          id: 1040,
          name: "Inopacan",
          provinceId: 50,
        },
        {
          id: 1041,
          name: "Isabel",
          provinceId: 50,
        },
        {
          id: 1042,
          name: "Jaro",
          provinceId: 50,
        },
        {
          id: 1043,
          name: "Javier (Bugho)",
          provinceId: 50,
        },
        {
          id: 1044,
          name: "Julita",
          provinceId: 50,
        },
        {
          id: 1045,
          name: "Kananga",
          provinceId: 50,
        },
        {
          id: 1046,
          name: "La Paz",
          provinceId: 50,
        },
        {
          id: 1047,
          name: "Leyte",
          provinceId: 50,
        },
        {
          id: 1048,
          name: "MacArthur",
          provinceId: 50,
        },
        {
          id: 1049,
          name: "Mahaplag",
          provinceId: 50,
        },
        {
          id: 1050,
          name: "Matag-ob",
          provinceId: 50,
        },
        {
          id: 1051,
          name: "Matalom",
          provinceId: 50,
        },
        {
          id: 1052,
          name: "Mayorga",
          provinceId: 50,
        },
        {
          id: 1053,
          name: "Merida",
          provinceId: 50,
        },
        {
          id: 1054,
          name: "Ormoc",
          provinceId: 50,
        },
        {
          id: 1055,
          name: "Palo",
          provinceId: 50,
        },
        {
          id: 1056,
          name: "Palompon",
          provinceId: 50,
        },
        {
          id: 1057,
          name: "Pastrana",
          provinceId: 50,
        },
        {
          id: 1058,
          name: "San Isidro",
          provinceId: 50,
        },
        {
          id: 1059,
          name: "San Miguel",
          provinceId: 50,
        },
        {
          id: 1060,
          name: "Santa Fe",
          provinceId: 50,
        },
        {
          id: 1061,
          name: "Tabango",
          provinceId: 50,
        },
        {
          id: 1062,
          name: "Tabontabon",
          provinceId: 50,
        },
        {
          id: 1063,
          name: "Tacloban",
          provinceId: 50,
        },
        {
          id: 1064,
          name: "Tanauan",
          provinceId: 50,
        },
        {
          id: 1065,
          name: "Tolosa",
          provinceId: 50,
        },
        {
          id: 1066,
          name: "Tunga",
          provinceId: 50,
        },
        {
          id: 1067,
          name: "Villaba",
          provinceId: 50,
        },
        {
          id: 1068,
          name: "Bacolod",
          provinceId: 51,
        },
        {
          id: 1069,
          name: "Bago",
          provinceId: 51,
        },
        {
          id: 1070,
          name: "Binalbagan",
          provinceId: 51,
        },
        {
          id: 1071,
          name: "Cadiz",
          provinceId: 51,
        },
        {
          id: 1072,
          name: "Calatrava",
          provinceId: 51,
        },
        {
          id: 1073,
          name: "Candoni",
          provinceId: 51,
        },
        {
          id: 1074,
          name: "Cauayan",
          provinceId: 51,
        },
        {
          id: 1075,
          name: "Enrique B. Magalona (Saravia)",
          provinceId: 51,
        },
        {
          id: 1076,
          name: "Escalante",
          provinceId: 51,
        },
        {
          id: 1077,
          name: "Himamaylan",
          provinceId: 51,
        },
        {
          id: 1078,
          name: "Hinigaran",
          provinceId: 51,
        },
        {
          id: 1079,
          name: "Hinoba-an (Asia)",
          provinceId: 51,
        },
        {
          id: 1080,
          name: "Ilog",
          provinceId: 51,
        },
        {
          id: 1081,
          name: "Isabela",
          provinceId: 51,
        },
        {
          id: 1082,
          name: "Kabankalan",
          provinceId: 51,
        },
        {
          id: 1083,
          name: "La Carlota",
          provinceId: 51,
        },
        {
          id: 1084,
          name: "La Castellana",
          provinceId: 51,
        },
        {
          id: 1085,
          name: "Manapla",
          provinceId: 51,
        },
        {
          id: 1086,
          name: "Moises Padilla (Magallon)",
          provinceId: 51,
        },
        {
          id: 1087,
          name: "Murcia",
          provinceId: 51,
        },
        {
          id: 1088,
          name: "Pontevedra",
          provinceId: 51,
        },
        {
          id: 1089,
          name: "Pulupandan",
          provinceId: 51,
        },
        {
          id: 1090,
          name: "Sagay",
          provinceId: 51,
        },
        {
          id: 1091,
          name: "Salvador Benedicto",
          provinceId: 51,
        },
        {
          id: 1092,
          name: "San Carlos",
          provinceId: 51,
        },
        {
          id: 1093,
          name: "San Enrique",
          provinceId: 51,
        },
        {
          id: 1094,
          name: "Silay",
          provinceId: 51,
        },
        {
          id: 1095,
          name: "Sipalay",
          provinceId: 51,
        },
        {
          id: 1096,
          name: "Talisay",
          provinceId: 51,
        },
        {
          id: 1097,
          name: "Toboso",
          provinceId: 51,
        },
        {
          id: 1098,
          name: "Valladolid",
          provinceId: 51,
        },
        {
          id: 1099,
          name: "Victorias",
          provinceId: 51,
        },
        {
          id: 1100,
          name: "Amlan (Ayuquitan)",
          provinceId: 52,
        },
        {
          id: 1101,
          name: "Ayungon",
          provinceId: 52,
        },
        {
          id: 1102,
          name: "Bacong",
          provinceId: 52,
        },
        {
          id: 1103,
          name: "Bais",
          provinceId: 52,
        },
        {
          id: 1104,
          name: "Basay",
          provinceId: 52,
        },
        {
          id: 1105,
          name: "Bayawan (Tulong)",
          provinceId: 52,
        },
        {
          id: 1106,
          name: "Bindoy (Payabon)",
          provinceId: 52,
        },
        {
          id: 1107,
          name: "Canlaon",
          provinceId: 52,
        },
        {
          id: 1108,
          name: "Dauin",
          provinceId: 52,
        },
        {
          id: 1109,
          name: "Dumaguete",
          provinceId: 52,
        },
        {
          id: 1110,
          name: "Guihulngan",
          provinceId: 52,
        },
        {
          id: 1111,
          name: "Jimalalud",
          provinceId: 52,
        },
        {
          id: 1112,
          name: "La Libertad",
          provinceId: 52,
        },
        {
          id: 1113,
          name: "Mabinay",
          provinceId: 52,
        },
        {
          id: 1114,
          name: "Manjuyod",
          provinceId: 52,
        },
        {
          id: 1115,
          name: "Pamplona",
          provinceId: 52,
        },
        {
          id: 1116,
          name: "San Jose",
          provinceId: 52,
        },
        {
          id: 1117,
          name: "Santa Catalina",
          provinceId: 52,
        },
        {
          id: 1118,
          name: "Siaton",
          provinceId: 52,
        },
        {
          id: 1119,
          name: "Sibulan",
          provinceId: 52,
        },
        {
          id: 1120,
          name: "Tanjay",
          provinceId: 52,
        },
        {
          id: 1121,
          name: "Tayasan",
          provinceId: 52,
        },
        {
          id: 1122,
          name: "Valencia (Luzurriaga)",
          provinceId: 52,
        },
        {
          id: 1123,
          name: "Vallehermoso",
          provinceId: 52,
        },
        {
          id: 1124,
          name: "Zamboanguita",
          provinceId: 52,
        },
        {
          id: 1125,
          name: "Allen",
          provinceId: 53,
        },
        {
          id: 1126,
          name: "Biri",
          provinceId: 53,
        },
        {
          id: 1127,
          name: "Bobon",
          provinceId: 53,
        },
        {
          id: 1128,
          name: "Capul",
          provinceId: 53,
        },
        {
          id: 1129,
          name: "Catarman",
          provinceId: 53,
        },
        {
          id: 1130,
          name: "Catubig",
          provinceId: 53,
        },
        {
          id: 1131,
          name: "Gamay",
          provinceId: 53,
        },
        {
          id: 1132,
          name: "Laoang",
          provinceId: 53,
        },
        {
          id: 1133,
          name: "Lapinig",
          provinceId: 53,
        },
        {
          id: 1134,
          name: "Las Navas",
          provinceId: 53,
        },
        {
          id: 1135,
          name: "Lavezares",
          provinceId: 53,
        },
        {
          id: 1136,
          name: "Lope de Vega",
          provinceId: 53,
        },
        {
          id: 1137,
          name: "Mapanas",
          provinceId: 53,
        },
        {
          id: 1138,
          name: "Mondragon",
          provinceId: 53,
        },
        {
          id: 1139,
          name: "Palapag",
          provinceId: 53,
        },
        {
          id: 1140,
          name: "Pambujan",
          provinceId: 53,
        },
        {
          id: 1141,
          name: "Rosario",
          provinceId: 53,
        },
        {
          id: 1142,
          name: "San Antonio",
          provinceId: 53,
        },
        {
          id: 1143,
          name: "San Isidro",
          provinceId: 53,
        },
        {
          id: 1144,
          name: "San Jose",
          provinceId: 53,
        },
        {
          id: 1145,
          name: "San Roque",
          provinceId: 53,
        },
        {
          id: 1146,
          name: "San Vicente",
          provinceId: 53,
        },
        {
          id: 1147,
          name: "Silvino Lobos",
          provinceId: 53,
        },
        {
          id: 1148,
          name: "Victoria",
          provinceId: 53,
        },
        {
          id: 1149,
          name: "Enrique Villanueva",
          provinceId: 54,
        },
        {
          id: 1150,
          name: "Larena",
          provinceId: 54,
        },
        {
          id: 1151,
          name: "Lazi",
          provinceId: 54,
        },
        {
          id: 1152,
          name: "Maria",
          provinceId: 54,
        },
        {
          id: 1153,
          name: "San Juan",
          provinceId: 54,
        },
        {
          id: 1154,
          name: "Siquijor",
          provinceId: 54,
        },
        {
          id: 1155,
          name: "Anahawan",
          provinceId: 55,
        },
        {
          id: 1156,
          name: "Bontoc",
          provinceId: 55,
        },
        {
          id: 1157,
          name: "Hinunangan",
          provinceId: 55,
        },
        {
          id: 1158,
          name: "Hinundayan",
          provinceId: 55,
        },
        {
          id: 1159,
          name: "Libagon",
          provinceId: 55,
        },
        {
          id: 1160,
          name: "Liloan",
          provinceId: 55,
        },
        {
          id: 1161,
          name: "Limasawa",
          provinceId: 55,
        },
        {
          id: 1162,
          name: "Maasin",
          provinceId: 55,
        },
        {
          id: 1163,
          name: "Macrohon",
          provinceId: 55,
        },
        {
          id: 1164,
          name: "Malitbog",
          provinceId: 55,
        },
        {
          id: 1165,
          name: "Padre Burgos",
          provinceId: 55,
        },
        {
          id: 1166,
          name: "Pintuyan",
          provinceId: 55,
        },
        {
          id: 1167,
          name: "Saint Bernard",
          provinceId: 55,
        },
        {
          id: 1168,
          name: "San Francisco",
          provinceId: 55,
        },
        {
          id: 1169,
          name: "San Juan (Cabalian)",
          provinceId: 55,
        },
        {
          id: 1170,
          name: "San Ricardo",
          provinceId: 55,
        },
        {
          id: 1171,
          name: "Silago",
          provinceId: 55,
        },
        {
          id: 1172,
          name: "Sogod",
          provinceId: 55,
        },
        {
          id: 1173,
          name: "Tomas Oppus",
          provinceId: 55,
        },
        {
          id: 1174,
          name: "Almagro",
          provinceId: 56,
        },
        {
          id: 1175,
          name: "Basey",
          provinceId: 56,
        },
        {
          id: 1176,
          name: "Calbayog",
          provinceId: 56,
        },
        {
          id: 1177,
          name: "Calbiga",
          provinceId: 56,
        },
        {
          id: 1178,
          name: "Catbalogan",
          provinceId: 56,
        },
        {
          id: 1179,
          name: "Daram",
          provinceId: 56,
        },
        {
          id: 1180,
          name: "Gandara",
          provinceId: 56,
        },
        {
          id: 1181,
          name: "Hinabangan",
          provinceId: 56,
        },
        {
          id: 1182,
          name: "Jiabong",
          provinceId: 56,
        },
        {
          id: 1183,
          name: "Marabut",
          provinceId: 56,
        },
        {
          id: 1184,
          name: "Matuguinao",
          provinceId: 56,
        },
        {
          id: 1185,
          name: "Motiong",
          provinceId: 56,
        },
        {
          id: 1186,
          name: "Pagsanghan",
          provinceId: 56,
        },
        {
          id: 1187,
          name: "Paranas (Wright)",
          provinceId: 56,
        },
        {
          id: 1188,
          name: "Pinabacdao",
          provinceId: 56,
        },
        {
          id: 1189,
          name: "San Jorge",
          provinceId: 56,
        },
        {
          id: 1190,
          name: "San Jose de Buan",
          provinceId: 56,
        },
        {
          id: 1191,
          name: "San Sebastian",
          provinceId: 56,
        },
        {
          id: 1192,
          name: "Santa Margarita",
          provinceId: 56,
        },
        {
          id: 1193,
          name: "Santa Rita",
          provinceId: 56,
        },
        {
          id: 1194,
          name: "Santo Niño",
          provinceId: 56,
        },
        {
          id: 1195,
          name: "Tagapul-an",
          provinceId: 56,
        },
        {
          id: 1196,
          name: "Talalora",
          provinceId: 56,
        },
        {
          id: 1197,
          name: "Tarangnan",
          provinceId: 56,
        },
        {
          id: 1198,
          name: "Villareal",
          provinceId: 56,
        },
        {
          id: 1199,
          name: "Zumarraga",
          provinceId: 56,
        },
        {
          id: 1200,
          name: "Buenavista",
          provinceId: 57,
        },
        {
          id: 1201,
          name: "Butuan",
          provinceId: 57,
        },
        {
          id: 1202,
          name: "Cabadbaran",
          provinceId: 57,
        },
        {
          id: 1203,
          name: "Carmen",
          provinceId: 57,
        },
        {
          id: 1204,
          name: "Jabonga",
          provinceId: 57,
        },
        {
          id: 1205,
          name: "Kitcharao",
          provinceId: 57,
        },
        {
          id: 1206,
          name: "Las Nieves",
          provinceId: 57,
        },
        {
          id: 1207,
          name: "Magallanes",
          provinceId: 57,
        },
        {
          id: 1208,
          name: "Nasipit",
          provinceId: 57,
        },
        {
          id: 1209,
          name: "Remedios T. Romualdez",
          provinceId: 57,
        },
        {
          id: 1210,
          name: "Santiago",
          provinceId: 57,
        },
        {
          id: 1211,
          name: "Tubay",
          provinceId: 57,
        },
        {
          id: 1212,
          name: "Bayugan",
          provinceId: 58,
        },
        {
          id: 1213,
          name: "Bunawan",
          provinceId: 58,
        },
        {
          id: 1214,
          name: "Esperanza",
          provinceId: 58,
        },
        {
          id: 1215,
          name: "La Paz",
          provinceId: 58,
        },
        {
          id: 1216,
          name: "Loreto",
          provinceId: 58,
        },
        {
          id: 1217,
          name: "Prosperidad",
          provinceId: 58,
        },
        {
          id: 1218,
          name: "Rosario",
          provinceId: 58,
        },
        {
          id: 1219,
          name: "San Francisco",
          provinceId: 58,
        },
        {
          id: 1220,
          name: "San Luis",
          provinceId: 58,
        },
        {
          id: 1221,
          name: "Santa Josefa",
          provinceId: 58,
        },
        {
          id: 1222,
          name: "Sibagat",
          provinceId: 58,
        },
        {
          id: 1223,
          name: "Talacogon",
          provinceId: 58,
        },
        {
          id: 1224,
          name: "Trento",
          provinceId: 58,
        },
        {
          id: 1225,
          name: "Veruela",
          provinceId: 58,
        },
        {
          id: 1226,
          name: "Akbar",
          provinceId: 59,
        },
        {
          id: 1227,
          name: "Al-Barka",
          provinceId: 59,
        },
        {
          id: 1228,
          name: "Hadji Mohammad Ajul",
          provinceId: 59,
        },
        {
          id: 1229,
          name: "Hadji Muhtamad",
          provinceId: 59,
        },
        {
          id: 1230,
          name: "Isabela City",
          provinceId: 59,
        },
        {
          id: 1231,
          name: "Lamitan",
          provinceId: 59,
        },
        {
          id: 1232,
          name: "Lantawan",
          provinceId: 59,
        },
        {
          id: 1233,
          name: "Maluso",
          provinceId: 59,
        },
        {
          id: 1234,
          name: "Sumisip",
          provinceId: 59,
        },
        {
          id: 1235,
          name: "Tabuan-Lasa",
          provinceId: 59,
        },
        {
          id: 1236,
          name: "Tipo-Tipo",
          provinceId: 59,
        },
        {
          id: 1237,
          name: "Tuburan",
          provinceId: 59,
        },
        {
          id: 1238,
          name: "Ungkaya Pukan",
          provinceId: 59,
        },
        {
          id: 1239,
          name: "Baungon",
          provinceId: 60,
        },
        {
          id: 1240,
          name: "Cabanglasan",
          provinceId: 60,
        },
        {
          id: 1241,
          name: "Damulog",
          provinceId: 60,
        },
        {
          id: 1242,
          name: "Dangcagan",
          provinceId: 60,
        },
        {
          id: 1243,
          name: "Don Carlos",
          provinceId: 60,
        },
        {
          id: 1244,
          name: "Impasugong",
          provinceId: 60,
        },
        {
          id: 1245,
          name: "Kadingilan",
          provinceId: 60,
        },
        {
          id: 1246,
          name: "Kalilangan",
          provinceId: 60,
        },
        {
          id: 1247,
          name: "Kibawe",
          provinceId: 60,
        },
        {
          id: 1248,
          name: "Kitaotao",
          provinceId: 60,
        },
        {
          id: 1249,
          name: "Lantapan",
          provinceId: 60,
        },
        {
          id: 1250,
          name: "Libona",
          provinceId: 60,
        },
        {
          id: 1251,
          name: "Malaybalay",
          provinceId: 60,
        },
        {
          id: 1252,
          name: "Malitbog",
          provinceId: 60,
        },
        {
          id: 1253,
          name: "Manolo Fortich",
          provinceId: 60,
        },
        {
          id: 1254,
          name: "Maramag",
          provinceId: 60,
        },
        {
          id: 1255,
          name: "Pangantucan",
          provinceId: 60,
        },
        {
          id: 1256,
          name: "Quezon",
          provinceId: 60,
        },
        {
          id: 1257,
          name: "San Fernando",
          provinceId: 60,
        },
        {
          id: 1258,
          name: "Sumilao",
          provinceId: 60,
        },
        {
          id: 1259,
          name: "Talakag",
          provinceId: 60,
        },
        {
          id: 1260,
          name: "Valencia",
          provinceId: 60,
        },
        {
          id: 1261,
          name: "Catarman",
          provinceId: 61,
        },
        {
          id: 1262,
          name: "Guinsiliban",
          provinceId: 61,
        },
        {
          id: 1263,
          name: "Mahinog",
          provinceId: 61,
        },
        {
          id: 1264,
          name: "Mambajao",
          provinceId: 61,
        },
        {
          id: 1265,
          name: "Sagay",
          provinceId: 61,
        },
        {
          id: 1266,
          name: "Compostela",
          provinceId: 62,
        },
        {
          id: 1267,
          name: "Laak (San Vicente)",
          provinceId: 62,
        },
        {
          id: 1268,
          name: "Mabini (Doña Alicia)",
          provinceId: 62,
        },
        {
          id: 1269,
          name: "Maco",
          provinceId: 62,
        },
        {
          id: 1270,
          name: "Maragusan (San Mariano)",
          provinceId: 62,
        },
        {
          id: 1271,
          name: "Mawab",
          provinceId: 62,
        },
        {
          id: 1272,
          name: "Monkayo",
          provinceId: 62,
        },
        {
          id: 1273,
          name: "Montevista",
          provinceId: 62,
        },
        {
          id: 1274,
          name: "Nabunturan",
          provinceId: 62,
        },
        {
          id: 1275,
          name: "New Bataan",
          provinceId: 62,
        },
        {
          id: 1276,
          name: "Pantukan",
          provinceId: 62,
        },
        {
          id: 1277,
          name: "Alamada",
          provinceId: 63,
        },
        {
          id: 1278,
          name: "Aleosan",
          provinceId: 63,
        },
        {
          id: 1279,
          name: "Antipas",
          provinceId: 63,
        },
        {
          id: 1280,
          name: "Arakan",
          provinceId: 63,
        },
        {
          id: 1281,
          name: "Banisilan",
          provinceId: 63,
        },
        {
          id: 1282,
          name: "Carmen",
          provinceId: 63,
        },
        {
          id: 1283,
          name: "Kabacan",
          provinceId: 63,
        },
        {
          id: 1284,
          name: "Kidapawan",
          provinceId: 63,
        },
        {
          id: 1285,
          name: "Libungan",
          provinceId: 63,
        },
        {
          id: 1286,
          name: "Mlang",
          provinceId: 63,
        },
        {
          id: 1287,
          name: "Magpet",
          provinceId: 63,
        },
        {
          id: 1288,
          name: "Makilala",
          provinceId: 63,
        },
        {
          id: 1289,
          name: "Matalam",
          provinceId: 63,
        },
        {
          id: 1290,
          name: "Midsayap",
          provinceId: 63,
        },
        {
          id: 1291,
          name: "Pigcawayan",
          provinceId: 63,
        },
        {
          id: 1292,
          name: "Pikit",
          provinceId: 63,
        },
        {
          id: 1293,
          name: "President Roxas",
          provinceId: 63,
        },
        {
          id: 1294,
          name: "Tulunan",
          provinceId: 63,
        },
        {
          id: 1295,
          name: "Asuncion (Saug)",
          provinceId: 64,
        },
        {
          id: 1296,
          name: "Braulio E. Dujali",
          provinceId: 64,
        },
        {
          id: 1297,
          name: "Carmen",
          provinceId: 64,
        },
        {
          id: 1298,
          name: "Kapalong",
          provinceId: 64,
        },
        {
          id: 1299,
          name: "New Corella",
          provinceId: 64,
        },
        {
          id: 1300,
          name: "Panabo",
          provinceId: 64,
        },
        {
          id: 1301,
          name: "Samal",
          provinceId: 64,
        },
        {
          id: 1302,
          name: "San Isidro",
          provinceId: 64,
        },
        {
          id: 1303,
          name: "Santo Tomas",
          provinceId: 64,
        },
        {
          id: 1304,
          name: "Tagum",
          provinceId: 64,
        },
        {
          id: 1305,
          name: "Talaingod",
          provinceId: 64,
        },
        {
          id: 1306,
          name: "Bansalan",
          provinceId: 65,
        },
        {
          id: 1307,
          name: "Davao City",
          provinceId: 65,
        },
        {
          id: 1308,
          name: "Digos",
          provinceId: 65,
        },
        {
          id: 1309,
          name: "Hagonoy",
          provinceId: 65,
        },
        {
          id: 1310,
          name: "Kiblawan",
          provinceId: 65,
        },
        {
          id: 1311,
          name: "Magsaysay",
          provinceId: 65,
        },
        {
          id: 1312,
          name: "Malalag",
          provinceId: 65,
        },
        {
          id: 1313,
          name: "Matanao",
          provinceId: 65,
        },
        {
          id: 1314,
          name: "Padada",
          provinceId: 65,
        },
        {
          id: 1315,
          name: "Santa Cruz",
          provinceId: 65,
        },
        {
          id: 1316,
          name: "Sulop",
          provinceId: 65,
        },
        {
          id: 1317,
          name: "Baganga",
          provinceId: 66,
        },
        {
          id: 1318,
          name: "Banaybanay",
          provinceId: 66,
        },
        {
          id: 1319,
          name: "Boston",
          provinceId: 66,
        },
        {
          id: 1320,
          name: "Caraga",
          provinceId: 66,
        },
        {
          id: 1321,
          name: "Cateel",
          provinceId: 66,
        },
        {
          id: 1322,
          name: "Governor Generoso",
          provinceId: 66,
        },
        {
          id: 1323,
          name: "Lupon",
          provinceId: 66,
        },
        {
          id: 1324,
          name: "Manay",
          provinceId: 66,
        },
        {
          id: 1325,
          name: "Mati",
          provinceId: 66,
        },
        {
          id: 1326,
          name: "San Isidro",
          provinceId: 66,
        },
        {
          id: 1327,
          name: "Tarragona",
          provinceId: 66,
        },
        {
          id: 1328,
          name: "Bacolod",
          provinceId: 67,
        },
        {
          id: 1329,
          name: "Baloi",
          provinceId: 67,
        },
        {
          id: 1330,
          name: "Baroy",
          provinceId: 67,
        },
        {
          id: 1331,
          name: "Iligan",
          provinceId: 67,
        },
        {
          id: 1332,
          name: "Kapatagan",
          provinceId: 67,
        },
        {
          id: 1333,
          name: "Kauswagan",
          provinceId: 67,
        },
        {
          id: 1334,
          name: "Kolambugan",
          provinceId: 67,
        },
        {
          id: 1335,
          name: "Lala",
          provinceId: 67,
        },
        {
          id: 1336,
          name: "Linamon",
          provinceId: 67,
        },
        {
          id: 1337,
          name: "Magsaysay",
          provinceId: 67,
        },
        {
          id: 1338,
          name: "Maigo",
          provinceId: 67,
        },
        {
          id: 1339,
          name: "Matungao",
          provinceId: 67,
        },
        {
          id: 1340,
          name: "Munai",
          provinceId: 67,
        },
        {
          id: 1341,
          name: "Nunungan",
          provinceId: 67,
        },
        {
          id: 1342,
          name: "Pantao Ragat",
          provinceId: 67,
        },
        {
          id: 1343,
          name: "Pantar",
          provinceId: 67,
        },
        {
          id: 1344,
          name: "Poona Piagapo",
          provinceId: 67,
        },
        {
          id: 1345,
          name: "Salvador",
          provinceId: 67,
        },
        {
          id: 1346,
          name: "Sapad",
          provinceId: 67,
        },
        {
          id: 1347,
          name: "Sultan Naga Dimaporo (Karomatan)",
          provinceId: 67,
        },
        {
          id: 1348,
          name: "Tagoloan",
          provinceId: 67,
        },
        {
          id: 1349,
          name: "Tangcal",
          provinceId: 67,
        },
        {
          id: 1350,
          name: "Tubod",
          provinceId: 67,
        },
        {
          id: 1351,
          name: "Amai Manabilang (Bumbaran)",
          provinceId: 68,
        },
        {
          id: 1352,
          name: "Bacolod-Kalawi (Bacolod-Grande)",
          provinceId: 68,
        },
        {
          id: 1353,
          name: "Balabagan",
          provinceId: 68,
        },
        {
          id: 1354,
          name: "Balindong (Watu)",
          provinceId: 68,
        },
        {
          id: 1355,
          name: "Bayang",
          provinceId: 68,
        },
        {
          id: 1356,
          name: "Binidayan",
          provinceId: 68,
        },
        {
          id: 1357,
          name: "Buadiposo-Buntong",
          provinceId: 68,
        },
        {
          id: 1358,
          name: "Bubong",
          provinceId: 68,
        },
        {
          id: 1359,
          name: "Butig",
          provinceId: 68,
        },
        {
          id: 1360,
          name: "Calanogas",
          provinceId: 68,
        },
        {
          id: 1361,
          name: "Ditsaan-Ramain",
          provinceId: 68,
        },
        {
          id: 1362,
          name: "Ganassi",
          provinceId: 68,
        },
        {
          id: 1363,
          name: "Kapai",
          provinceId: 68,
        },
        {
          id: 1364,
          name: "Kapatagan",
          provinceId: 68,
        },
        {
          id: 1365,
          name: "Lumba-Bayabao (Maguing)",
          provinceId: 68,
        },
        {
          id: 1366,
          name: "Lumbaca-Unayan",
          provinceId: 68,
        },
        {
          id: 1367,
          name: "Lumbatan",
          provinceId: 68,
        },
        {
          id: 1368,
          name: "Lumbayanague",
          provinceId: 68,
        },
        {
          id: 1369,
          name: "Madalum",
          provinceId: 68,
        },
        {
          id: 1370,
          name: "Madamba",
          provinceId: 68,
        },
        {
          id: 1371,
          name: "Maguing",
          provinceId: 68,
        },
        {
          id: 1372,
          name: "Malabang",
          provinceId: 68,
        },
        {
          id: 1373,
          name: "Marantao",
          provinceId: 68,
        },
        {
          id: 1374,
          name: "Marawi",
          provinceId: 68,
        },
        {
          id: 1375,
          name: "Marogong",
          provinceId: 68,
        },
        {
          id: 1376,
          name: "Masiu",
          provinceId: 68,
        },
        {
          id: 1377,
          name: "Mulondo",
          provinceId: 68,
        },
        {
          id: 1378,
          name: "Pagayawan (Tatarikan)",
          provinceId: 68,
        },
        {
          id: 1379,
          name: "Piagapo",
          provinceId: 68,
        },
        {
          id: 1380,
          name: "Picong (Sultan Gumander)",
          provinceId: 68,
        },
        {
          id: 1381,
          name: "Poona Bayabao (Gata)",
          provinceId: 68,
        },
        {
          id: 1382,
          name: "Pualas",
          provinceId: 68,
        },
        {
          id: 1383,
          name: "Saguiaran",
          provinceId: 68,
        },
        {
          id: 1384,
          name: "Sultan Dumalondong",
          provinceId: 68,
        },
        {
          id: 1385,
          name: "Tagoloan II",
          provinceId: 68,
        },
        {
          id: 1386,
          name: "Tamparan",
          provinceId: 68,
        },
        {
          id: 1387,
          name: "Taraka",
          provinceId: 68,
        },
        {
          id: 1388,
          name: "Tubaran",
          provinceId: 68,
        },
        {
          id: 1389,
          name: "Tugaya",
          provinceId: 68,
        },
        {
          id: 1390,
          name: "Wao",
          provinceId: 68,
        },
        {
          id: 1391,
          name: "Ampatuan",
          provinceId: 69,
        },
        {
          id: 1392,
          name: "Barira",
          provinceId: 69,
        },
        {
          id: 1393,
          name: "Buldon",
          provinceId: 69,
        },
        {
          id: 1394,
          name: "Buluan",
          provinceId: 69,
        },
        {
          id: 1395,
          name: "Cotabato City",
          provinceId: 69,
        },
        {
          id: 1396,
          name: "Datu Abdullah Sangki",
          provinceId: 69,
        },
        {
          id: 1397,
          name: "Datu Anggal Midtimbang",
          provinceId: 69,
        },
        {
          id: 1398,
          name: "Datu Blah T. Sinsuat",
          provinceId: 69,
        },
        {
          id: 1399,
          name: "Datu Hoffer Ampatuan",
          provinceId: 69,
        },
        {
          id: 1400,
          name: "Datu Montawal (Pagagawan)",
          provinceId: 69,
        },
        {
          id: 1401,
          name: "Datu Odin Sinsuat (Dinaig)",
          provinceId: 69,
        },
        {
          id: 1402,
          name: "Datu Paglas",
          provinceId: 69,
        },
        {
          id: 1403,
          name: "Datu Piang (Dulawan)",
          provinceId: 69,
        },
        {
          id: 1404,
          name: "Datu Salibo",
          provinceId: 69,
        },
        {
          id: 1405,
          name: "Datu Saudi-Ampatuan",
          provinceId: 69,
        },
        {
          id: 1406,
          name: "Datu Unsay",
          provinceId: 69,
        },
        {
          id: 1407,
          name: "General Salipada K. Pendatun",
          provinceId: 69,
        },
        {
          id: 1408,
          name: "Guindulungan",
          provinceId: 69,
        },
        {
          id: 1409,
          name: "Kabuntalan (Tumbao)",
          provinceId: 69,
        },
        {
          id: 1410,
          name: "Mamasapano",
          provinceId: 69,
        },
        {
          id: 1411,
          name: "Mangudadatu",
          provinceId: 69,
        },
        {
          id: 1412,
          name: "Matanog",
          provinceId: 69,
        },
        {
          id: 1413,
          name: "Northern Kabuntalan",
          provinceId: 69,
        },
        {
          id: 1414,
          name: "Pagalungan",
          provinceId: 69,
        },
        {
          id: 1415,
          name: "Paglat",
          provinceId: 69,
        },
        {
          id: 1416,
          name: "Pandag",
          provinceId: 69,
        },
        {
          id: 1417,
          name: "Parang",
          provinceId: 69,
        },
        {
          id: 1418,
          name: "Rajah Buayan",
          provinceId: 69,
        },
        {
          id: 1419,
          name: "Shariff Aguak (Maganoy)",
          provinceId: 69,
        },
        {
          id: 1420,
          name: "Shariff Saydona Mustapha",
          provinceId: 69,
        },
        {
          id: 1421,
          name: "South Upi",
          provinceId: 69,
        },
        {
          id: 1422,
          name: "Sultan Kudarat (Nuling)",
          provinceId: 69,
        },
        {
          id: 1423,
          name: "Sultan Mastura",
          provinceId: 69,
        },
        {
          id: 1424,
          name: "Sultan sa Barongis (Lambayong)",
          provinceId: 69,
        },
        {
          id: 1425,
          name: "Sultan Sumagka (Talitay)",
          provinceId: 69,
        },
        {
          id: 1426,
          name: "Talayan",
          provinceId: 69,
        },
        {
          id: 1427,
          name: "Upi",
          provinceId: 69,
        },
        {
          id: 1428,
          name: "Aloran",
          provinceId: 70,
        },
        {
          id: 1429,
          name: "Baliangao",
          provinceId: 70,
        },
        {
          id: 1430,
          name: "Bonifacio",
          provinceId: 70,
        },
        {
          id: 1431,
          name: "Calamba",
          provinceId: 70,
        },
        {
          id: 1432,
          name: "Clarin",
          provinceId: 70,
        },
        {
          id: 1433,
          name: "Concepcion",
          provinceId: 70,
        },
        {
          id: 1434,
          name: "Don Victoriano Chiongbian (Don Mariano Marcos)",
          provinceId: 70,
        },
        {
          id: 1435,
          name: "Jimenez",
          provinceId: 70,
        },
        {
          id: 1436,
          name: "Lopez Jaena",
          provinceId: 70,
        },
        {
          id: 1437,
          name: "Oroquieta",
          provinceId: 70,
        },
        {
          id: 1438,
          name: "Ozamiz",
          provinceId: 70,
        },
        {
          id: 1439,
          name: "Panaon",
          provinceId: 70,
        },
        {
          id: 1440,
          name: "Plaridel",
          provinceId: 70,
        },
        {
          id: 1441,
          name: "Sapang Dalaga",
          provinceId: 70,
        },
        {
          id: 1442,
          name: "Sinacaban",
          provinceId: 70,
        },
        {
          id: 1443,
          name: "Tangub",
          provinceId: 70,
        },
        {
          id: 1444,
          name: "Tudela",
          provinceId: 70,
        },
        {
          id: 1445,
          name: "Alubijid",
          provinceId: 71,
        },
        {
          id: 1446,
          name: "Balingasag",
          provinceId: 71,
        },
        {
          id: 1447,
          name: "Balingoan",
          provinceId: 71,
        },
        {
          id: 1448,
          name: "Binuangan",
          provinceId: 71,
        },
        {
          id: 1449,
          name: "Cagayan de Oro",
          provinceId: 71,
        },
        {
          id: 1450,
          name: "Claveria",
          provinceId: 71,
        },
        {
          id: 1451,
          name: "El Salvador",
          provinceId: 71,
        },
        {
          id: 1452,
          name: "Gingoog",
          provinceId: 71,
        },
        {
          id: 1453,
          name: "Gitagum",
          provinceId: 71,
        },
        {
          id: 1454,
          name: "Initao",
          provinceId: 71,
        },
        {
          id: 1455,
          name: "Jasaan",
          provinceId: 71,
        },
        {
          id: 1456,
          name: "Kinoguitan",
          provinceId: 71,
        },
        {
          id: 1457,
          name: "Lagonglong",
          provinceId: 71,
        },
        {
          id: 1458,
          name: "Laguindingan",
          provinceId: 71,
        },
        {
          id: 1459,
          name: "Libertad",
          provinceId: 71,
        },
        {
          id: 1460,
          name: "Lugait",
          provinceId: 71,
        },
        {
          id: 1461,
          name: "Magsaysay (Linugos)",
          provinceId: 71,
        },
        {
          id: 1462,
          name: "Manticao",
          provinceId: 71,
        },
        {
          id: 1463,
          name: "Medina",
          provinceId: 71,
        },
        {
          id: 1464,
          name: "Naawan",
          provinceId: 71,
        },
        {
          id: 1465,
          name: "Opol",
          provinceId: 71,
        },
        {
          id: 1466,
          name: "Salay",
          provinceId: 71,
        },
        {
          id: 1467,
          name: "Sugbongcogon",
          provinceId: 71,
        },
        {
          id: 1468,
          name: "Tagoloan",
          provinceId: 71,
        },
        {
          id: 1469,
          name: "Talisayan",
          provinceId: 71,
        },
        {
          id: 1470,
          name: "Villanueva",
          provinceId: 71,
        },
        {
          id: 1471,
          name: "Alabel",
          provinceId: 72,
        },
        {
          id: 1472,
          name: "Glan",
          provinceId: 72,
        },
        {
          id: 1473,
          name: "Kiamba",
          provinceId: 72,
        },
        {
          id: 1474,
          name: "Maasim",
          provinceId: 72,
        },
        {
          id: 1475,
          name: "Maitum",
          provinceId: 72,
        },
        {
          id: 1476,
          name: "Malapatan",
          provinceId: 72,
        },
        {
          id: 1477,
          name: "Malungon",
          provinceId: 72,
        },
        {
          id: 1478,
          name: "Banga",
          provinceId: 73,
        },
        {
          id: 1479,
          name: "General Santos (Dadiangas)",
          provinceId: 73,
        },
        {
          id: 1480,
          name: "Koronadal",
          provinceId: 73,
        },
        {
          id: 1481,
          name: "Lake Sebu",
          provinceId: 73,
        },
        {
          id: 1482,
          name: "Norala",
          provinceId: 73,
        },
        {
          id: 1483,
          name: "Polomolok",
          provinceId: 73,
        },
        {
          id: 1484,
          name: "Santo Niño",
          provinceId: 73,
        },
        {
          id: 1485,
          name: "Surallah",
          provinceId: 73,
        },
        {
          id: 1486,
          name: "TBoli",
          provinceId: 73,
        },
        {
          id: 1487,
          name: "Tampakan",
          provinceId: 73,
        },
        {
          id: 1488,
          name: "Tantangan",
          provinceId: 73,
        },
        {
          id: 1489,
          name: "Tupi",
          provinceId: 73,
        },
        {
          id: 1490,
          name: "Bagumbayan",
          provinceId: 74,
        },
        {
          id: 1491,
          name: "Columbio",
          provinceId: 74,
        },
        {
          id: 1492,
          name: "Esperanza",
          provinceId: 74,
        },
        {
          id: 1493,
          name: "Isulan",
          provinceId: 74,
        },
        {
          id: 1494,
          name: "Kalamansig",
          provinceId: 74,
        },
        {
          id: 1495,
          name: "Lambayong (Mariano Marcos)",
          provinceId: 74,
        },
        {
          id: 1496,
          name: "Lebak",
          provinceId: 74,
        },
        {
          id: 1497,
          name: "Lutayan",
          provinceId: 74,
        },
        {
          id: 1498,
          name: "Palimbang",
          provinceId: 74,
        },
        {
          id: 1499,
          name: "President Quirino",
          provinceId: 74,
        },
        {
          id: 1500,
          name: "Senator Ninoy Aquino",
          provinceId: 74,
        },
        {
          id: 1501,
          name: "Tacurong",
          provinceId: 74,
        },
        {
          id: 1502,
          name: "Banguingui (Tongkil)",
          provinceId: 75,
        },
        {
          id: 1503,
          name: "Hadji Panglima Tahil (Marunggas)",
          provinceId: 75,
        },
        {
          id: 1504,
          name: "Indanan",
          provinceId: 75,
        },
        {
          id: 1505,
          name: "Jolo",
          provinceId: 75,
        },
        {
          id: 1506,
          name: "Kalingalan Caluang",
          provinceId: 75,
        },
        {
          id: 1507,
          name: "Lugus",
          provinceId: 75,
        },
        {
          id: 1508,
          name: "Luuk",
          provinceId: 75,
        },
        {
          id: 1509,
          name: "Maimbung",
          provinceId: 75,
        },
        {
          id: 1510,
          name: "Old Panamao",
          provinceId: 75,
        },
        {
          id: 1511,
          name: "Omar",
          provinceId: 75,
        },
        {
          id: 1512,
          name: "Pandami",
          provinceId: 75,
        },
        {
          id: 1513,
          name: "Panglima Estino (New Panamao)",
          provinceId: 75,
        },
        {
          id: 1514,
          name: "Pangutaran",
          provinceId: 75,
        },
        {
          id: 1515,
          name: "Parang",
          provinceId: 75,
        },
        {
          id: 1516,
          name: "Pata",
          provinceId: 75,
        },
        {
          id: 1517,
          name: "Patikul",
          provinceId: 75,
        },
        {
          id: 1518,
          name: "Siasi",
          provinceId: 75,
        },
        {
          id: 1519,
          name: "Talipao",
          provinceId: 75,
        },
        {
          id: 1520,
          name: "Tapul",
          provinceId: 75,
        },
        {
          id: 1521,
          name: "Alegria",
          provinceId: 76,
        },
        {
          id: 1522,
          name: "Bacuag",
          provinceId: 76,
        },
        {
          id: 1523,
          name: "Burgos",
          provinceId: 76,
        },
        {
          id: 1524,
          name: "Claver",
          provinceId: 76,
        },
        {
          id: 1525,
          name: "Dapa",
          provinceId: 76,
        },
        {
          id: 1526,
          name: "Del Carmen",
          provinceId: 76,
        },
        {
          id: 1527,
          name: "General Luna",
          provinceId: 76,
        },
        {
          id: 1528,
          name: "Gigaquit",
          provinceId: 76,
        },
        {
          id: 1529,
          name: "Mainit",
          provinceId: 76,
        },
        {
          id: 1530,
          name: "Malimono",
          provinceId: 76,
        },
        {
          id: 1531,
          name: "Pilar",
          provinceId: 76,
        },
        {
          id: 1532,
          name: "Placer",
          provinceId: 76,
        },
        {
          id: 1533,
          name: "San Benito",
          provinceId: 76,
        },
        {
          id: 1534,
          name: "San Francisco (Anao-Aon)",
          provinceId: 76,
        },
        {
          id: 1535,
          name: "San Isidro",
          provinceId: 76,
        },
        {
          id: 1536,
          name: "Santa Monica (Sapao)",
          provinceId: 76,
        },
        {
          id: 1537,
          name: "Sison",
          provinceId: 76,
        },
        {
          id: 1538,
          name: "Socorro",
          provinceId: 76,
        },
        {
          id: 1539,
          name: "Surigao City",
          provinceId: 76,
        },
        {
          id: 1540,
          name: "Tagana-an",
          provinceId: 76,
        },
        {
          id: 1541,
          name: "Tubod",
          provinceId: 76,
        },
        {
          id: 1542,
          name: "Barobo",
          provinceId: 77,
        },
        {
          id: 1543,
          name: "Bayabas",
          provinceId: 77,
        },
        {
          id: 1544,
          name: "Bislig",
          provinceId: 77,
        },
        {
          id: 1545,
          name: "Cagwait",
          provinceId: 77,
        },
        {
          id: 1546,
          name: "Cantilan",
          provinceId: 77,
        },
        {
          id: 1547,
          name: "Carmen",
          provinceId: 77,
        },
        {
          id: 1548,
          name: "Carrascal",
          provinceId: 77,
        },
        {
          id: 1549,
          name: "Cortes",
          provinceId: 77,
        },
        {
          id: 1550,
          name: "Hinatuan",
          provinceId: 77,
        },
        {
          id: 1551,
          name: "Lanuza",
          provinceId: 77,
        },
        {
          id: 1552,
          name: "Lianga",
          provinceId: 77,
        },
        {
          id: 1553,
          name: "Lingig",
          provinceId: 77,
        },
        {
          id: 1554,
          name: "Madrid",
          provinceId: 77,
        },
        {
          id: 1555,
          name: "Marihatag",
          provinceId: 77,
        },
        {
          id: 1556,
          name: "San Agustin",
          provinceId: 77,
        },
        {
          id: 1557,
          name: "San Miguel",
          provinceId: 77,
        },
        {
          id: 1558,
          name: "Tagbina",
          provinceId: 77,
        },
        {
          id: 1559,
          name: "Tago",
          provinceId: 77,
        },
        {
          id: 1560,
          name: "Tandag",
          provinceId: 77,
        },
        {
          id: 1561,
          name: "Bongao",
          provinceId: 78,
        },
        {
          id: 1562,
          name: "Languyan",
          provinceId: 78,
        },
        {
          id: 1563,
          name: "Mapun (Cagayan de Tawi-Tawi)",
          provinceId: 78,
        },
        {
          id: 1564,
          name: "Panglima Sugala (Balimbing)",
          provinceId: 78,
        },
        {
          id: 1565,
          name: "Sapa-Sapa",
          provinceId: 78,
        },
        {
          id: 1566,
          name: "Sibutu",
          provinceId: 78,
        },
        {
          id: 1567,
          name: "Simunul",
          provinceId: 78,
        },
        {
          id: 1568,
          name: "Sitangkai",
          provinceId: 78,
        },
        {
          id: 1569,
          name: "South Ubian",
          provinceId: 78,
        },
        {
          id: 1570,
          name: "Tandubas",
          provinceId: 78,
        },
        {
          id: 1571,
          name: "Turtle Islands (Taganak)",
          provinceId: 78,
        },
        {
          id: 1572,
          name: "Baliguian",
          provinceId: 79,
        },
        {
          id: 1573,
          name: "Dapitan",
          provinceId: 79,
        },
        {
          id: 1574,
          name: "Dipolog",
          provinceId: 79,
        },
        {
          id: 1575,
          name: "Godod",
          provinceId: 79,
        },
        {
          id: 1576,
          name: "Gutalac",
          provinceId: 79,
        },
        {
          id: 1577,
          name: "Jose Dalman (Ponot)",
          provinceId: 79,
        },
        {
          id: 1578,
          name: "Kalawit",
          provinceId: 79,
        },
        {
          id: 1579,
          name: "Katipunan",
          provinceId: 79,
        },
        {
          id: 1580,
          name: "La Libertad",
          provinceId: 79,
        },
        {
          id: 1581,
          name: "Labason",
          provinceId: 79,
        },
        {
          id: 1582,
          name: "Leon B. Postigo (Bacungan)",
          provinceId: 79,
        },
        {
          id: 1583,
          name: "Liloy",
          provinceId: 79,
        },
        {
          id: 1584,
          name: "Manukan",
          provinceId: 79,
        },
        {
          id: 1585,
          name: "Mutia",
          provinceId: 79,
        },
        {
          id: 1586,
          name: "Piñan (New Piñan)",
          provinceId: 79,
        },
        {
          id: 1587,
          name: "Polanco",
          provinceId: 79,
        },
        {
          id: 1588,
          name: "President Manuel A. Roxas",
          provinceId: 79,
        },
        {
          id: 1589,
          name: "Rizal",
          provinceId: 79,
        },
        {
          id: 1590,
          name: "Salug",
          provinceId: 79,
        },
        {
          id: 1591,
          name: "Sergio Osmeña Sr.",
          provinceId: 79,
        },
        {
          id: 1592,
          name: "Siayan",
          provinceId: 79,
        },
        {
          id: 1593,
          name: "Sibuco",
          provinceId: 79,
        },
        {
          id: 1594,
          name: "Sibutad",
          provinceId: 79,
        },
        {
          id: 1595,
          name: "Sindangan",
          provinceId: 79,
        },
        {
          id: 1596,
          name: "Siocon",
          provinceId: 79,
        },
        {
          id: 1597,
          name: "Sirawai",
          provinceId: 79,
        },
        {
          id: 1598,
          name: "Tampilisan",
          provinceId: 79,
        },
        {
          id: 1599,
          name: "Aurora",
          provinceId: 80,
        },
        {
          id: 1600,
          name: "Bayog",
          provinceId: 80,
        },
        {
          id: 1601,
          name: "Dimataling",
          provinceId: 80,
        },
        {
          id: 1602,
          name: "Dinas",
          provinceId: 80,
        },
        {
          id: 1603,
          name: "Dumalinao",
          provinceId: 80,
        },
        {
          id: 1604,
          name: "Dumingag",
          provinceId: 80,
        },
        {
          id: 1605,
          name: "Guipos",
          provinceId: 80,
        },
        {
          id: 1606,
          name: "Josefina",
          provinceId: 80,
        },
        {
          id: 1607,
          name: "Kumalarang",
          provinceId: 80,
        },
        {
          id: 1608,
          name: "Labangan",
          provinceId: 80,
        },
        {
          id: 1609,
          name: "Lakewood",
          provinceId: 80,
        },
        {
          id: 1610,
          name: "Lapuyan",
          provinceId: 80,
        },
        {
          id: 1611,
          name: "Mahayag",
          provinceId: 80,
        },
        {
          id: 1612,
          name: "Margosatubig",
          provinceId: 80,
        },
        {
          id: 1613,
          name: "Midsalip",
          provinceId: 80,
        },
        {
          id: 1614,
          name: "Molave",
          provinceId: 80,
        },
        {
          id: 1615,
          name: "Pagadian",
          provinceId: 80,
        },
        {
          id: 1616,
          name: "Pitogo",
          provinceId: 80,
        },
        {
          id: 1617,
          name: "Ramon Magsaysay (Liargo)",
          provinceId: 80,
        },
        {
          id: 1618,
          name: "San Miguel",
          provinceId: 80,
        },
        {
          id: 1619,
          name: "San Pablo",
          provinceId: 80,
        },
        {
          id: 1620,
          name: "Sominot (Don Mariano Marcos)",
          provinceId: 80,
        },
        {
          id: 1621,
          name: "Tabina",
          provinceId: 80,
        },
        {
          id: 1622,
          name: "Tambulig",
          provinceId: 80,
        },
        {
          id: 1623,
          name: "Tigbao",
          provinceId: 80,
        },
        {
          id: 1624,
          name: "Tukuran",
          provinceId: 80,
        },
        {
          id: 1625,
          name: "Vincenzo A. Sagun",
          provinceId: 80,
        },
        {
          id: 1626,
          name: "Zamboanga City",
          provinceId: 80,
        },
        {
          id: 1627,
          name: "Alicia",
          provinceId: 81,
        },
        {
          id: 1628,
          name: "Buug",
          provinceId: 81,
        },
        {
          id: 1629,
          name: "Diplahan",
          provinceId: 81,
        },
        {
          id: 1630,
          name: "Imelda",
          provinceId: 81,
        },
        {
          id: 1631,
          name: "Ipil",
          provinceId: 81,
        },
        {
          id: 1632,
          name: "Kabasalan",
          provinceId: 81,
        },
        {
          id: 1633,
          name: "Mabuhay",
          provinceId: 81,
        },
        {
          id: 1634,
          name: "Malangas",
          provinceId: 81,
        },
        {
          id: 1635,
          name: "Naga",
          provinceId: 81,
        },
        {
          id: 1636,
          name: "Olutanga",
          provinceId: 81,
        },
        {
          id: 1637,
          name: "Payao",
          provinceId: 81,
        },
        {
          id: 1638,
          name: "Roseller Lim",
          provinceId: 81,
        },
        {
          id: 1639,
          name: "Siay",
          provinceId: 81,
        },
        {
          id: 1640,
          name: "Talusan",
          provinceId: 81,
        },
        {
          id: 1641,
          name: "Titay",
          provinceId: 81,
        },
        {
          id: 1642,
          name: "Tungawan",
          provinceId: 81,
        },
      ]);
    });
};
