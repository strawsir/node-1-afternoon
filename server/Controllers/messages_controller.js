var messages = [];
var id = 0;

module.exports={
    //Below is the function that will run when you create/post something.
    create:(req, res)=>{ //req and res are the parameters that create will take in req=request(object) that is being put in on the front end, res=response
        const {text, time} = req.body;//takes in the text that was entered and the time it was entered and holds it into the body of the request.
        messages.push({id, text, time});//pushes the id, text, and time into the empty messages array
        id++; //increments id, so each id remains unique
        res.status(200).send(messages);//lets the server know that everything is OK
    },
    //Below is the function that will run when the read/get is called, allows information to be seen.
    read:(req, res)=>{
        res.status(200).send(messages);
    },
    //Below is the function that allows information to be updated by a user when update/put is used.
    update:(req,res)=>{
        const {text} = req.body;//holds text within the request body.
        const updateID = req.params.id;//req.params.id will help match the id to /:id/ in the URL. .Params is used for URL stuff
        const messageIndex = messages.findIndex(message => message.id == updateID); //The double equals is important here, because we just want to look at the value and not the type.
        //The above variable finds the index of the passed in message be making sure that the id is equal to the id in the URL.
        let message = messages[messageIndex];
        
        //global variable messages is no longer empty and the messageIndex now equals a new object that contains an id, text, and the time it was created.
        

        messages[messageIndex]={
            id:message.id,
            text:text || message.text,
            time: message.time
        };

        res.status(200).send(messages);//lets server know everything is OK!
    },
    delete:(req,res)=>{
        const deleteID = req.params.id;
        messageIndex = messages.findIndex(message=> message.id===deleteID);
        messages.splice(messageIndex,1);
        res.status(200).send(messages);

    }
}