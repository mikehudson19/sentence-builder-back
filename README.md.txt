Run the database migrations:

   npx sequelize-cli db:migrate 

Seed the data:

   npx sequelize-cli db:seed:all


To copy the config folder into the dist folder, run the following: 

   npm run copy-files

Then, to start up the project, run the followin: 

   npm start

The copy-files script copies the config folder for the database into the dist folder, the project won't run if it's not copied.