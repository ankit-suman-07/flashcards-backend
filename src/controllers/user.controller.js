const {User} = require('../database/models');

//Create a new user
exports.createUser = async (req, res) => {
    try {
        const {username, email, passwordHash} = req.body;

        // Store password as plain text for now
        const newUser = await User.create({
            username, 
            email, 
            passwordHash
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.log("Error creating user:", error);
        res.status(500).json({error: 'Failed to create user'});
    }
}

//Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.log("Error fetching users:", error);
        res.status(500).json({error: 'Failed to fetch users'});
    }
}