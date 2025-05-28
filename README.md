Migrations Command

    Init : 
        npx sequelize-cli init

    Create a Migration File :
        npx sequelize-cli migration:generate --name  YOUR_MIGRATION_NAME

    Run the Migration:
        npx sequelize-cli db:migrate


    Create Seeders:
        npx sequelize-cli seed:generate --name demo-user



    To Run the Seeder:
        npx sequelize-cli db:seed:all

    
    To Undo the Seed:
        npx sequelize-cli db:seed:undo:all or spacific npx sequelize-cli db:seed:undo --seed 20240528123456-demo-user.js


