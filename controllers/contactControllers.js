// @desc Get all Contacts
// @route GET ./api/contact
// @access public

const getContacts = (req,res)=>{
    res.status(200).json({message:"Get all Contacts"})
}

// @desc POST Create Contact
// @route POST ./api/Contact
// @access public

const postContact = (req,res)=>{
    console.log(req.body)
    const {name,email,phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All Fields are mandedary !")
    }
    res.status(201).json({message:"Contact Created"})
}

// @desc GET Get Contact by id
// @route GET ./api/Contact/:id
// @access public

const getContact = (req,res)=>{
    res.status(202).json({message:`Get Contact of id ${req.params.id}`})
}

// @desc PUT Update Contact by id
// @route PUT ./api/Contact/:id
// @access public

const updateContact = (req,res)=>{
    res.status(200).json({message:`Update Contact for id ${req.params.id}`})
}

// @desc DELETE Contact Deleted
// @route DELETE ./api/Contact/:id
// @access public

const deleteContact = (req,res)=>{
    res.status(200).json({message:`Delete Contact for id ${req.params.id}`})
}

module.exports= {
    getContacts,
    postContact,
    getContact,
    updateContact,
    deleteContact
}