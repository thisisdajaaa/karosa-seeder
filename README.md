<p align="center">
    <img src="https://user-images.githubusercontent.com/9653764/90975314-ad4a3280-e565-11ea-9c2d-ba0ab7abe78a.jpg" width="318px" alt="Seed" />
</p>
<h3 align="center">Karosa Strapi seeder</h3>
<p align="center">Karosa seeder and migration tool</p>

### Prerequisites

You need the following installed in your system before you can proceed with the installation.

1. Latest node version
2. Make sure postgresql is installed in your system
3. Create a new database called `karosa`
4. Create `.env` and make sure it matches with karosa-express project

### Installing

Clone the repository

```
git clone https://github.com/Altri/karosa-seeder.git
```

Install the necessary dependencies using yarn or npm

```
npm install
```

OR

```
yarn install
```

### Create seed file

To create the seed file run this command:

```
npm run seed:make <filename>
```

OR

```
yarn seed:make <filename>
```

A file should be generated at `./src/seeds/\<filename\>.js` with the contents below:

```
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
```

Modify the file to your needs

### Running seed files

Execute the following command to run the seeds:

```
npm run seed:run
```

OR

```
yarn seed:run
```

### Create migration file

To create the migration file run this command:

```
npm run migration:make <filename>
```

OR

```
yarn migration:make <filename>
```

### Running migration files

Execute the following command to run the migrations:

```
npm run migration:latest
```

OR

```
yarn migration:latest
```

You can also rollback to the previous migrations using the follow command

```
npm run migration:rollback
```

OR

```
yarn migration:rollback
```

