import {
    FindContact as findContact,
    AddContact as addContact,
    DeleteContact as deleteContact,
    UpdateContact as updateContact
} from '../services/contactService.js';

import { FindAllContact  as findAllContact} from '../repository/contactRepo.js';


export const FindContact = async(req, res) => {
    try{
        let result = await findContact(req.params.id);
        res.send({status: 200, data: result});
    } catch(err){
        res.status(400).send({status: 400, message: err.message});
    }
}

export const AddContact = async (req, res) => {
    try{
        await addContact(req.body);
        res.send({status: 200, message: "New contact added successfully"});
    } catch(err) {
        res.send({status: 400, message: err.message});
    }
}

export const DeleteContact = async(req, res) => {
    try{
        await deleteContact(req.params.id)
        res.send({status: 200, message: `Contact with firstname ${req.params.id} deleted successfully`});
    } catch(err){
        res.status(400).send({status: 400, message: err.message});
    }
}

export const UpdateContact = async(req, res) => {
    try{
        await updateContact(req.body)
        res.send({status: 200, message: `Contact with firstname ${req.body.firstname} updated successfully`});
    } catch(err){
        res.status(400).send({status: 400, message: err.message});
    }
}

export const FindAllContact = async (req, res) => {
    try {
        let result = await findAllContact();
        res.status(200).send({status: 200, data: result});
    } catch(err){
        res.status(200).send({status: 200, message: err})
    }
}


