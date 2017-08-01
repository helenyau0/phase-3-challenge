const pg = require('pg')
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/grocery_store';
const client = new pg.Client(connectionString);
client.connect();

const listBySection = (category) => {
  return client.query(`SELECT * FROM items WHERE section=$1;`, [category], (err, result) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log('|--------------+---------+\n| Product Name | Section |\n|--------------+---------+')

      for(values of result.rows) {
        console.log("|" , values.product_name , "      | " , values.section, " |");
      }
      console.log('|--------------+---------+');
      process.exit(0)
    }
    client.end()
  })
}

module.exports = listBySection
