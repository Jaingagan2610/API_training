const express = require('express');
const app = express();
app.use(express.json())
const mongoose = require('mongoose');

const PORT = 3000;

const shoes = require('./shoes.js');
app.use(express.json());

app.get('/', function (req, res) {
  console.log('Hello');
  res.send('<h1>welcome to socialkart<h1>');
});

app.get('/shoes', function (req, res) {
    console.log('hello');
    const shoes = shoes.find()
  res.send(shoes); // Sending JSON response for todos
});

app.get('/shoes/:shoesId', function (req, res) {
    const foundshoes = shoes.findOne({shoesId: req.params.shoesId});
  
    if (foundshoes) {
      res.send(foundshoes)
    } else {
      res.status(404).send('Not Found')
    }
  })

  
// create new list
app.post('/shoes', function (req, res) {
    const newShoe= req.body;
  
    // newShoe.id = 1000 + shoes.length + 1;
    // newShoe.title="nike",
    // newShoe.description="nike air MAX"
  
    shoes.create(newShoe);
  
    console.log(newShoe)
    res.status(201).send("newShoe");
});
// delete the data
app.delete('/shoes/:id' ,function(req ,res){
    const deletedshoesbyId = shoes.findOne({id: req.params.id})
    if(deletedshoesbyId)
    {
        shoes.deleteOne({id: req.params.id});
        res.send('Deleted');

    }else
    {
        res.status(404).send('NOT found');
    }
});
// update the data 
app.patch('/shoes/:id', function (req, res) {
    const id = req.params.id
    const data = req.body
  
    const foundtodoindex = shoes.findOne({id: req.params.id})
    // let deletedshoesbyId = -1
    // for (let i = 0; i < shoes.length; i++) {
    //   if (shoes[i].id.toString() === req.params.id) {
    //     deletedshoesbyId = i
    //     break
    //   }
    // }
  
    if (foundtodoindex ) {
      const old = shoes[foundtodoindex]
      shoes[foundtodoindex] = {
        ...old,
        ...data
      }
     
      res.send('Updated')
    } else {
      res.status(404).send('Not found')
    }
  });
  


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// store daata in database


// const collection = mongoose.model('shoes',shoe_data);
// mongoose.connect(uri);
// console.log("connected");



