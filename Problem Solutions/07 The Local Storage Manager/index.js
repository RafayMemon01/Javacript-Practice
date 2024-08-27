const saveNoteToLocalStorage = (note)=>{
    try {
        localStorage.setItem("note",JSON.stringify(note))
        return true
        
    } catch (error) {
        return false,
        console.log(error);
    }
}


console.log(saveNoteToLocalStorage({
    noteTitle:"This is note",
    noteText:"note description"
}))



//check it on browser because local storage is a browser feature
