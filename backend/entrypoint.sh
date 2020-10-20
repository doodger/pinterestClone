# entrypoint.sh

npm install
npx sequelize db:migrate
node index.js