import { addTimeStamps } from "../helpers/add-timestamps";
import * as Knex from 'knex';

const TABLE_NAME = "addresses";

export async function up(knex: Knex): Promise<any> {
  const tableExists = await knex.schema.hasTable(TABLE_NAME);

  if (!tableExists) {
    await knex.schema.createTable("regions", (t) => {
      t.increments();
      t.string("name").notNullable();
    });

    await knex.schema.createTable("provinces", (t) => {
      t.increments();
      t.string("name").notNullable();

      t.integer("regionId")
        .unsigned()
        .references("id")
        .inTable("regions")
        .onDelete("CASCADE")
        .index();
    });

    await knex.schema.createTable("cities", (t) => {
      t.increments();
      t.string("name").notNullable();

      t.integer("provinceId")
        .unsigned()
        .references("id")
        .inTable("provinces")
        .onDelete("CASCADE")
        .index();
    });

    await knex.schema.createTable("barangays", (t) => {
      t.increments();
      t.string("name").notNullable();

      t.integer("cityId")
        .unsigned()
        .references("id")
        .inTable("cities")
        .onDelete("CASCADE")
        .index();
    });

    await knex.schema
      .createTable(TABLE_NAME, (t) => {
        t.increments();
        t.string("name").notNullable();
        t.enu("type", ["home", "shop"]).notNullable();
        t.string("phoneNo").notNullable();
        t.string("detailed_address").nullable();
        t.boolean("isDefaultAddress").nullable();

        t.integer("barangayId")
          .unsigned()
          .references("id")
          .inTable("barangays")
          .onDelete("CASCADE")
          .index();

        t.uuid("userId")
          .references("id")
          .inTable("users")
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
    await knex.schema.dropTable("barangays");
    await knex.schema.dropTable("cities");
    await knex.schema.dropTable("provinces");
    await knex.schema.dropTable("regions");
  }
};
