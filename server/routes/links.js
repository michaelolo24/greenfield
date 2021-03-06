const Links =  require("../../db/controller/links-helpers.js");
const users = require("./user");
//each callback below is routed to helpers that preform the actual querying on the database


//API ROUTES

/* All resources below use the Links helper s
/resources
  post -> posts one resource : uses postOne helper
  get -> gets all resources : uses getAll helper
  put -> updates one resource : uses updateOne helper -- needs user id in req.body

/resources/:id
  get -> gets one resource : uses getOne helper -- needs user id in req.params
  delete -> deletes one resource : uses deleteOne helper -- needs user id in req.params

*/

module.exports= {};

module.exports.resourses = {
  postOne: (req, res)=>{
    if(users.sess !== undefined){
      Links.postOne(req.body, (err,data)=>{ //Post one resource into resource database
        if(err) console.log(err);
        res.json(data);
      });
    } else{
      res.status(403).send("Please log in");
    }
  },

  getAll: (req, res)=>{
    Links.getAll((err,data)=>{
      if(err) console.log(err);
      res.json(data);
    });
  },

  getLanguages: (req, res)=>{
    Links.getLanguages((err,data)=>{
      if(err) console.log(err);
      res.json(data);
    });
  },   

  updateVote: (req, res)=>{
    if(users.sess.email !== undefined){
      Links.updateVote(req.body, (err,data)=>{
        if(err) console.log(err);
        res.json(data);
      });
    } else {
      res.status(403).send("Please log in");
    }
  }
};

// SINGLE RESOURCE UPDATES (GET, PUT(UPDATE), DELETE); 

module.exports.resourcesID = {

  getOne: (req, res)=>{
      Links.getOne(req.params.id, (err,data)=>{
        if(err) console.log(err);
        res.json(data);
      });
    },
// login here
  deleteOne: (req, res)=>{
      if(users.sess.email !== undefined){
        Links.deleteOne(req.params.id, (err,data)=>{
          if(err) console.log(err);
          res.json(data);
        });
      } else {
        res.status(403).send("Please log in");
      }
    }
};
