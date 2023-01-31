const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
//; // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'


router.get('/notes', (req, res) =>{
	fs.readFile('db/db.json', "utf-8", (err, data) =>{
		return err ? console.log(err) : res.json(JSON.parse(data));
	})
})

router.post('/notes', (req, res) =>{
	fs.readFile('db/db.json', "utf-8", (err, data) =>{
		if (err) throw err 
		let jsonFile = JSON.parse(data);
		let newNote = {title:req.body.title, text:req.body.text, id:uuidv4()}
		jsonFile.push(newNote);
		fs.writeFile('db/db.json', JSON.stringify(jsonFile), (err) =>{
			if (err) throw err 
			res.redirect('/notes')
		})	
	})
})

	router.delete('/notes/:id', (req, res) =>{
		fs.readFile('db/db.json', "utf-8", (err, data) =>{
			if (err) throw err 
			let jsonFile = JSON.parse(data);
			// 
			let notes = jsonFile.filter(note =>{
				note.id !== req.params.id 
				
			})
			fs.writeFile('db/db.json', JSON.stringify(jsonFile), (err) =>{
				if (err) throw err 
				res.redirect('/notes')
			})	
		})
})
// Import our modular routers for /tips and /feedback
//const notesRouter = require('./htmlRoutes');

// const feedbackRouter = require('./feedback');
// const diagnosticRouter = require('./diagnostics');

//const app = express();

//app.use('/notes', notesRouter);
// app.use('/feedback', feedbackRouter);
// app.use('/diagnostics', diagnosticRouter);

module.exports = router;