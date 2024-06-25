
import * as Knex from 'knex';
const TABLE_NAME = "users_followers";

export async function up(knex: Knex): Promise<any> {
  const tableExists = await knex.schema.hasTable(TABLE_NAME);

  if (!tableExists) {
    await knex.schema.createTable(TABLE_NAME, (t) => {
      t.uuid("userId")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .index();

      t.uuid("followerId")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .index();
    });
  }
};

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists(TABLE_NAME);
};
