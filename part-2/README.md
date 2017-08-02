# Part 2: Command Line Grocery Store

## To set up database:

    - running the command "npm run db:create" will create the database
    - running the command "npm run db:schema" will create the schema
    - running the command "npm run db:seed" will seed the database
    - running the command "npm run db:reset" will drop, create, schema, and seed the database


## To test commands for command line grocery store:
  - to find all grocery products of a given section, run the command below with a section from: dairy, meat, miscellaneous, produce, bread, packaged, deli, bulk, or frozen.

    `"node ./store product-list ____"`
    
   - to find all real shoppers in grocery_store run the command:
    
    `"node ./store real-shoppers"`

  - to find all orders of a shopper with their id run the command below with their id.

    `"node ./store shopper-orders __"`


## To test database query functions:

  - run the command `"npm test"`
