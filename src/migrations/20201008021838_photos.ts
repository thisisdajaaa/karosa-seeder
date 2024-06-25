import * as Knex from 'knex';
const TABLE_NAME = "photos";

export async function up(knex: Knex): Promise<any> {
  const tableExists = await knex.schema.hasTable(TABLE_NAME);

  if (!tableExists) {
    
    await knex.schema
      .createTable(TABLE_NAME, (t) => {
        t.increments();
        t.string("publicId");
        t.string("photoUrl");
    })

    await knex.schema.table("users", (t) => {
      t.dropColumn("photoUrl");
      t.integer("photoId")
        .unsigned()
        .references("id")
        .inTable("photos")
        .index()
        .onDelete("SET NULL");
    });
  }
};

export async function down(knex: Knex): Promise<any> {
  const tableExists = await knex.schema.hasTable(TABLE_NAME);

  if (tableExists) {
    await knex.schema.table("users", (t) => {
      t.string("photoUrl");
      t.dropColumn("photoId");
    });
    await knex.schema.dropTable(TABLE_NAME);
  }
};