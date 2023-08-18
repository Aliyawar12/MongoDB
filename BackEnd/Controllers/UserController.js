const User = require('../Models/Users');

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Create a new user instance
    const newUser = new User({
      name: name,
      email: email,
      password: password,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Return the saved user in the response
    res.status(201).json(savedUser);
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).json({ message: 'Failed to create user /  Email Already Registered' });
  }




    exports.loginUser = async (req, res) => {
      try {
        const { city, password } = req.body;

        // Find the user by city (assuming city is unique)
        const user = await User.findOne({ city });

        // Check if the user exists
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'hebkwebckweufiqgfbb34648274hdu3qriqwgvsuq09347y9rtg4uifbr', { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to login' });
      }
    }

};

        