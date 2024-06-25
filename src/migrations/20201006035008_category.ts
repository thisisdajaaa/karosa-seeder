import { addTimeStamps } from "../helpers/add-timestamps";
import * as Knex from 'knex';

const TABLE_NAME = "categories";

export async function up(knex: Knex): Promise<any> {
  const tableExists = await knex.schema.hasTable(TABLE_NAME);

  if (!tableExists) {

    await knex.schema
      .createTable(TABLE_NAME, (t) => {
        t.increments();
        t.string("name");
        t.string("description");
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
