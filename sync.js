const sequelize = require('./config/sequelize');
const Student = require('./models/student');
const Admin = require('./models/admin');  // Ensure Admin is imported
const seedAdmin = require('./seed'); // Import your seed function

// Change force:true to alter:true later when you want to avoid data loss
sequelize.sync({ force: true })  // Use alter: true to adjust tables without resetting the database
  .then(async () => {
    console.log('Student and Admin tables are ready!');
    await seedAdmin(); // Call the seeding function after sync
  })
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });