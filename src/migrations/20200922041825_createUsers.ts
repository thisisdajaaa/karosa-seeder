import { addTimeStamps } from "../helpers/add-timestamps";
import * as Knex from 'knex';
const TABLE_NAME = "users";

export async function up(knex: Knex): Promise<any> {
  const tableExists = await knex.schema.hasTable(TABLE_NAME);

  if (!tableExists) {
    await knex.schema
      .createTable(TABLE_NAME, (t) => {
        t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
        t.string("fullName");
        t.string("photoUrl");
        t.string("username").unique();
        t.string("email").unique().nullable();
        t.string("phoneNo").unique().nullable();
        t.boolean("confirmed").defaultTo("false");
        t.enu("gender", ["male", "female", "other"]).nullable();
        t.string("hash").notNullable();
        t.string("salt").notNullable();
      })
      .then(async () => {
        await addTimeStamps(knex, TABLE_NAME);
      });
  }
};

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists(TABLE_NAME);
};
