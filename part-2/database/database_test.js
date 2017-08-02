const expect = require('chai').expect
const database = require('../database/database')

describe('database', () => {
  context('allShoppers', () => {
    it('should be a function',  () => {
      expect(database.allShoppers).to.be.a('function')
    })
    it('should return all shoppers with their name and number of orders', () =>{
      database.allShoppers((error, events) => {
        if(error) return (error)
        expect(events).to.deep.equal(`|--------------+------------------|
                                      | shopper name | number of orders |
                                      |--------------+------------------|
                                      |  Shanti       |    2            |
                                      |  Mary       |    1            |
                                      |  Justin       |    3            |
                                      |  Helen       |    1            |
                                      |  Coleby       |    1            |
                                      |--------------+------------------|`);
      })
    })
  })

  context('listBySection', () => {
    it('should be a function',  () => {
      expect(database.listBySection).to.be.a('function')
    })
    it('should find all products by a given section', () => {
      let section = 'meat'
      database.listBySection(section => {
        expect(section).to.deep.equal(`|--------------+---------+
                                        | Product Name | Section |
                                        |--------------+---------+
                                        | Bacon       | meat    |
                                        | Fish       | meat    |
                                        | Ground Beef       | meat    |
                                        | Ham       | meat    |
                                        | Salami       | meat    |
                                        |--------------+---------+`)
      })
    })
  })

  context('allOrdersOfShopper', () => {
    it('should return all orders of a shopper given their id', () => {
      let id = 4
      database.allOrdersOfShopper(id => {
        expect(id).to.deep.equal(`|----------+------------|
                                  | order id | total cost |
                                  |----------+------------|
                                  |         7 | 8.87      |
                                  |--------------+---------+`)
      })
    })
  })
})
