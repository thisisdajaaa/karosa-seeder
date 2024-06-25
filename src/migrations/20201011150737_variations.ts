import { addTimeStamps } from "../helpers/add-timestamps";
import * as Knex from 'knex';

const TABLE_NAME = "variations";

export async function up(knex: Knex): Promise<any> {
    const tableExists = await knex.schema.hasTable(TABLE_NAME);
  
    if (!tableExists) {

        await knex.schema
          .createTable(TABLE_NAME, (t) => {
            t.increments();
            t.string("name");
            t.decimal("price");
            t.integer("stock");
            t.string("photo");
            t.decimal("weight");
            t.integer("shelf_life");
            t.integer("productId")
              .unsigned()
              .references("id")
              .inTable("products")
              .index()
              .onDelete("CASCADE");
          })
          .then(() => {
            addTimeStamps(knex, TABLE_NAME);
          });
      }
};

export async function down(knex: Knex): Promise<any> {
    const tableExists = await knex.schema.hasTable(TABLE_NAME);
  
    if (tableExists) {
      await knex.schema.dropTable(TABLE_NAME);
    }
  };
