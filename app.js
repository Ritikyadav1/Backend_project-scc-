let express = require('express');

let app = express();
const userModel = require('./usermodel');


app.get('/',(req,res)=>{
    res.send('Hello World!');
});

// app.get('/create', async (req , res )=>{
//     let createduser = await userModel.create({
//         name: 'John Doe',
//         username:"john",
//         email: 'johndoe@example.com'
//     });
//     res.send(createduser);
// });


app.get('/create', async (req, res) => {
    console.log('Creating user...');
    try {
      let createdUser = await userModel.create({
        name: 'John Doe',
        username: "john",
        email: 'johndoe@example.com'
      });
      console.log('User created:', createdUser);
      res.send(createdUser);
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).send({ message: 'Error creating user' });
    }
  });


app.listen(3000);