const express = require('express');
const app = express();
app.use(express.json())
const mongoose = require('mongoose');
const uri = ("mongodb+srv://jaingagan2610:gagan2610@cluster0.wxkc4am.mongodb.net/?retryWrites=true&w=majority");

const PORT = 3000;

const shoes = [
  {
    id: 1001,
    title: 'nike',
    description: 'air jordan 1'
  },
  {
    id: 1002,
    title: 'adidas',
    description: 'Men hoops 3.0'
  },
  {
    id: 1003,
    title: 'puma',
    description: 'puma x-ray'
  },
  {
    id: 1004,
    title: 'nike',
    description: 'AIR force 1'
  }
]

app.get('/', function (req, res) {
  console.log('Hello');
  res.send('<h1>welcome to socialkart<h1>');
});

app.get('/shoes', function (req, res) {
    console.log('hello');
  res.json(shoes); // Sending JSON response for todos
});

app.get('/shoes/:shoesId', function (req, res) {
    const foundshoes = shoes.find(t => t.id.toString() === req.params.shoesId)
  
    if (foundshoes) {
      res.send(foundshoes)
    } else {
      res.status(404).send('Not Found')
    }
  })

  
// create new list
app.post('/shoes', function (req, res) {
    const newShoe= req.body;
  
    newShoe.id = 1000 + shoes.length + 1;
    // newShoe.title="nike",
    // newShoe.description="nike air MAX"
  
    shoes.push(newShoe);
  
    console.log(newShoe)
    res.status(201).json(newShoe);
});
// delete the data
app.delete('/shoes/:id' ,function(req ,res){
    const deletedshoesbyId = shoes.findIndex(t => t.id.toString() === req.params.id)
    if(deletedshoesbyId >-1)
    {
        shoes.splice(deletedshoesbyId,1);
        res.send('Deleted');

    }else
    {
        res.status(404).send('NOT found');
    }
});
// update the data 
app.patch('/shoes/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
  
    const foundTodoIndex = shoes.findIndex(t => t.id.toString() === id)
  
    if (foundTodoIndex > -1) {
      const oldShoe = shoes[foundTodoIndex];
      shoes[foundTodoIndex] = {
        ...oldShoe,
        ...data
      };
      res.send('Updated');
    } else {
      res.status(404).send('Not found');
    }
  });
  


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// store daata in database
const shoe_data = new mongoose.Schema({

    id:"Number",
    title:"string",
    description:"string",

})

// const collection = mongoose.model('shoes',shoe_data);
// mongoose.connect(uri);
// console.log(connected);



