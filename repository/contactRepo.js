import Contact from "../models/contact.js";
import { v4 as uuidv4 } from 'uuid';


export const FindContact = async (id) => {
    return await Contact.findOne({_id: id});
}

export const FindByEmail = async (email) => {
    return await Contact.findOne({email: email});
}

export const FindAllContact = async() => {
    return await Contact.find({});
}

export const AddContact = async (contact) => {
    let newContact = new Contact({
        _id: uuidv4(),
        firstname: contact.firstname,
        lastname: contact.lastname,
        email: contact.email,
        city: contact.city,
        mobile: contact.mobile,
    })
    await newContact.save();
}

export const UpdateContact = async(contact) => {
    let {firstname, lastname, email, city, mobile, _id} = contact;
    let newContact = await Contact.findOne({email: email});
    newContact.firstname = firstname;
    newContact.lastname = lastname;
    newContact.email = email;
    newContact.city = city;
    newContact.mobile = mobile;
    await newContact.save();
}


export const DeleteContact = async (id) => {
    await Contact.deleteOne({_id: id});
}

