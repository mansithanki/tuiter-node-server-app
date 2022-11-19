import posts from "./tuits.js";
let tuits = posts;

//const createTuit = (req, res) => {}
const createTuit = (req, res) => {
   const newTuit = req.body;
   newTuit._id = (new Date()).getTime()+'';
   newTuit.username = "NASA";
   newTuit.handle = "@nasa";
   newTuit.time = "now";
   newTuit.likes = 0;
   newTuit.liked = false;
   newTuit.dislikes = 0;
   newTuit.image = "NASA.png";
   newTuit.retuits = 0;
   newTuit.replies = 0;
   tuits.push(newTuit);
   res.json(newTuit);
 }
 
 
//const findTuits  = (req, res) => {}
const findTuits = (req, res) =>
   res.json(tuits);

//const updateTuit = (req, res) => {}
const updateTuit = (req, res) => {
   const tuitdIdToUpdate = req.params.tid;
   const updates = req.body;
   const tuitIndex = tuits.findIndex(
     (t) =>  t._id.toString() === tuitdIdToUpdate)
   tuits[tuitIndex] = 
     {...tuits[tuitIndex], ...updates};
   res.sendStatus(200);
 }
 
 
//const deleteTuit = (req, res) => {}
const deleteTuit = (req, res) => {
   const tuitdIdToDelete = req.params.tid;
   tuits = tuits.filter((t) =>
        t._id.toString() !== tuitdIdToDelete);
   res.sendStatus(200);
 }
 
 

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

