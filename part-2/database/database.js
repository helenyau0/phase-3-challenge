const pg = require('pg')
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/grocery_store';
const client = new pg.Client(connectionString);
client.connect();

function listBySection (category) {
  client.query(`SELECT * FROM items WHERE section=$1;`, [category], function (err, result) {
    if (err) {
      console.log(err.stack)
    } else {
      console.log('|--------------+---------+\n| Product Name | Section |\n|--------------+---------+')
      for(values of result.rows) {
        console.log("|" , values.product_name, "      |" , values.section, "   |");
      }
      console.log('|--------------+---------+');
      process.exit(0)
    }
    client.end()
  })
}

const allOrdersOfShopper = (id) => {
  client.query('SELECT orders.id, total_cost FROM orders JOIN shoppers ON shoppers.id = orders.total_id WHERE orders.total_id=$1', [id], (err, result) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log('|----------+------------|\n| order id | total cost |\n|----------+------------|');
      for(values of result.rows) {
        console.log("|        ", values.id, "|", values.total_cost, "     |");
      }
      console.log('|--------------+---------+');
      process.exit(0)
    }
    client.end()
  })
}

const allShoppers = () => {
  client.query('SELECT customer, number_of_orders FROM shoppers', (err, result) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log('|--------------+------------------|\n| shopper name | number of orders |\n|--------------+------------------|')
      for(values of result.rows) {
        console.log("| ", values.customer, "      |   ", values.number_of_orders, "           |")
      }
      console.log('|--------------+------------------|')
      process.exit(0)
    }
    client.end()
  })
}

module.exports = {
  listBySection,
  allOrdersOfShopper,
  allShoppers
}
