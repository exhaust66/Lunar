const bcrypt = require('bcryptjs');
const Admin = require('./models/admin'); // Assuming you have an Admin model

async function seedAdmin() {
  try {
    const adminUsername = "admin";  // Set your admin username here
    const adminPassword = process.env.ADMIN_PASSWORD;

    console.log('admin pass', adminPassword); // Log the password for debugging

    if (!adminPassword) {
      console.error('ADMIN_PASSWORD environment variable is not set!');
      return;
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ where: { userName: adminUsername } });

    if (!existingAdmin) {
      // Create the admin if it doesn't exist
      await Admin.create({
        userName: adminUsername,
        password: hashedPassword
      });
      console.log('Hashed password stored:', hashedPassword);
      console.log('Admin created successfully!');
    } else {
      console.log('Admin already exists');
    }
  } catch (error) {
    console.error('Error seeding admin:', error.message); // Log the error message
  }
}

module.exports=seedAdmin;