let express = require('express');

let app = express();
const userModel = require('./usermodel');


app.get('/', (req, res) => {
  res.send('This is a homepage');
});


app.get('/create', async (req, res) => {

  let createdUser = await userModel.create({
    name: 'John Doe',
    username: "john",
    email: 'johndoe@example.com'
  });

  res.send(createdUser);

});

app.get('/update', async (req, res) => {

  let updatedUser = await userModel.findOneAndUpdate({ username: "john" }, { name: "harsh" }, { new: true });
  console.log('User updated:', updatedUser);
  res.send(updatedUser);

});

app.get('/read', async (req, res) => {

  let User = await userModel.find();

  res.send(User);


});

app.get('/delete', async (req, res) => {

  let Users = await userModel.findOneAndDelete({ name: "John Doe" });

  res.send(Users);


});


app.listen(3000);