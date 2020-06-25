const express = require("express");
const app = express();
const User= require("./src/models/User")

const db = require("./src/config/db");

app.get('/', (req,res) => res.send("respon berjalan"));

app.use(express.urlencoded({extended:true}));

db.authenticate().then(() => console.log("berhasil konek Database"));



app.post("/toko", async (req,res) =>{
  try {
      const {  name, product, stock } = req.body;

      const newUser = new User({
           name, product, stock
      })

      await newUser.save();

      res.json(newUser);
      
  } catch (error) {
      console.error(err.message);
      res.status(500).send("server error")
      
  }
})

app.get("/toko", async (req,res) =>{
try {
  const getAllUser= await User.findAll({})
  res.json(getAllUser)

} catch (error) {
  onsole.error(err.message);
      res.status(500).send("server error")
      
}

})

app.get("/toko/:id", async (req,res) =>{
  try {
      const id = req.params.id
      const getUser = await User.findOne({
          where: {id:id}
      });
      res.json(getUser);
  } catch (error) {
      console.error(err.message);
      res.status(500).send("server error")
      
  }
})

app.delete("/toko/:id", async (req,res) =>{
  try {
      const id = req.params.id
      const deleteUser = await User.destroy({
          where: {id:id}
      });
      res.json("berhasil di delete");
  } catch (error) {
      console.error(err.message);
      res.status(500).send("server error")
      
  }
})

app.put("/toko/:id", async (req,res) =>{
  try {
      const {name, product, stock} = req.body
      const id = req.params.id
      const updateUser= await User.update({
          name, product, stock
      }, {where: {id:id} });

      await updateUser;
      res.json("berhasil di update");
    
  } catch (error) {
      console.error(err.message);
      res.status(500).send("server error")
      
  }
})






app.listen(2000, () => console.log("port berjalan di 2000"));