const { notes } = require("../models/data")
const getNotes = (req,res) =>{

    try{
        res.status(200).send(notes)
    }catch(err){
        console.log(err,"sorry notes nhi mil payenge aapko")
        res.status(500).send(err)
    }
     

   
   
    

}

const getNoteById =(req,res)=>{
    let {id} = req.params;

     let element = notes.find(note=> note.id == Number(id))
     res.status(200).send(element)
}







const createNote = (req,res)=>{
    let {id,title,description,link,author,
        createdOn,note} = req.body
    
    let newData = {
        id:notes.length +1,
        title:tittle,
        description:description,
        note:note,
        link:link,
        author:author,

    }

    
    notes.push(newData)
    res.status(201).send("Notes Added Successfully")
}

const updateNote = (req,res)=>{
    let {id} = req.params;

    const note = notes.find(note => note.id === Number(id))

    if(!note) {
        return res.status(404).send("Data Not Found")
    }
    Object.assign(note,req.body)
    res.status(200).send("Note Updated")
}
    const deleteNote = (req,res)=> {
        let {id} = req.params;
        const note = notes.find(note => note.id === Number(id))
        if(!note) {
        return res.status(404).send("Data Not Found")
    }
        
    let index = notes.indexOf(note)
    notes.splice(index,1)

    res.status(200).send("dekho vo nahi gya")


        
        

    }


module.exports = {getNotes,getNoteById,createNote,updateNote,deleteNote}