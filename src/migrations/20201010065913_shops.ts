import { addTimeStamps } from "../helpers/add-timestamps";
import * as Knex from 'knex';

const TABLE_NAME = "shops";

export async function up(knex: Knex): Promise<any> {
  const tableExists = await knex.schema.hasTable(TABLE_NAME);

  if (!tableExists) {

    await knex.schema
      .createTable(TABLE_NAME, (t) => {
        t.increments();
        t.string("name");
        t.boolean("isActive").defaultTo("true");
        t.enu("status", ["active", "on vacation", "planting", "harvesting"]).nullable();
      })
      .then(() => {
        addTimeStamps(knex, TABLE_NAME);
      });

    await knex.schema.table("users", (t) => {
      t.integer("shopId")
        .unsigned()
        .references("id")
        .inTable("shops")
        .index()
        .onDelete("SET NULL");
    });
  }
};

export async function down(knex: Knex): Promise<any> {
  const tableExists = await knex.schema.hasTable(TABLE_NAME);

  if (tableExists) {
    await knex.schema.dropTable(TABLE_NAME);
  }
};
