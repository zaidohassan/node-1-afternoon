const id = 0;
const messages = [];




module.exports = {
        create: (req, res) => {
            messages.push(req.body.time, req.body.text, id);
            id++;
            res.status(200).send(messages)
        },
        read: (req,res) => {
            res.status(200).send(messages)
        },
        update: (req,res) => {
            const messageIndex = messages.findIndex(message => message.id == req.params.id)
            let message = messages[messageIndex];
            message[messageIndex] = {
                id: message.id,
                text: req.body.text || message.text,
                time: message.time
            };
            res.staus(200).send(messages)
        },
        delete: (req,res) => {
             deleteIndex = messages.findIndex(message => message.id == req.params.id)
             messages.splice(deleteIndex, 1)
             res.status(200).send(messages)
        }
        
}