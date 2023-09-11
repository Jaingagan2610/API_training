const mongoose = require('mongoose');
const uri = ("mongodb+srv://jaingagan2610:gagan2610@cluster0.wxkc4am.mongodb.net/?retryWrites=true&w=majority")


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

  const shoe_data = new mongoose.Schema({

    id:"Number",
    title:"string",
    description:"string",

})
async function connect (){
    try{
        await mongoose.connect(uri);
        } catch (err){ 
            console.log(err);
    }
}
const con  = mongoose.model('shoes',shoe_data);
con.insertMany(shoes);
//   module.export = mongoose.model('shoes',shoe_data);