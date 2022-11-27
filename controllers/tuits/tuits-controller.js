import * as tuitsDao from './tuits-dao.js'
// import posts from "./tuits.js";
// let tuits = posts;

//const createTuit = (req, res) => {}
const createTuit = async(req, res) => {
   const newTuit = req.body;
  //  newTuit._id = (new Date()).getTime()+'';
   newTuit.username = "NASA";
   newTuit.handle = "@nasa";
   newTuit.time = "now";
   newTuit.likes = 0;
   newTuit.liked = false;
   newTuit.dislikes = 0;
   newTuit.image = "NASA.png";
   newTuit.retuits = 0;
   newTuit.replies = 0;
  //  tuits.push(newTuit);
  const insertedTuit = await tuitsDao
                             .createTuit(newTuit);

   res.json(insertedTuit);
 }
 
 
//const findTuits  = (req, res) => {}
const findTuits = async(req, res) =>{
  const tuits = await tuitsDao.findTuits()

   res.json(tuits);
}

//const updateTuit = (req, res) => {}
const updateTuit = async (req, res) => {
   const tuitdIdToUpdate = req.params.tid;
   const updates = req.body;
  //  const tuitIndex = tuits.findIndex(
  //    (t) =>  t._id.toString() === tuitdIdToUpdate)
  //  tuits[tuitIndex] = 
  //    {...tuits[tuitIndex], ...updates};
  const status = await tuitsDao
                       .updateTuit(tuitdIdToUpdate,
                                   updates);

   //res.sendStatus(200);
   res.json(status);
 }
 
 
//const deleteTuit = (req, res) => {}
const deleteTuit = async (req, res) => {
   const tuitdIdToDelete = req.params.tid;
   const status = await tuitsDao
                       .deleteTuit(tuitdIdToDelete);
//    tuits = tuits.filter((t) =>
//         t._id.toString() !== tuitdIdToDelete);
  //  res.sendStatus(200);
  res.json(status);

 }
 
 

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

