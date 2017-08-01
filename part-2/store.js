const { listBySection, allOrdersOfShopper } = require('./database/database')

const groceryStore = () => {
  const command = process.argv[2]
  const input = process.argv[3]

  if(command === 'product_list') {
    listBySection(input)
  } else if(command === 'shopper-orders') {
    allOrdersOfShopper(input)
  }
}

groceryStore()
