const { listBySection, allOrdersOfShopper, allShoppers } = require('./database/database')

const groceryStore = () => {
  const command = process.argv[2]
  const input = process.argv[3]

  if(command === 'product-list') {
    listBySection(input)
  } else if(command === 'shopper-orders') {
    allOrdersOfShopper(input)
  } else if(command === 'real-shoppers') {
    allShoppers()
  }
}

groceryStore()
