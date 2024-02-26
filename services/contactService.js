import {
    FindContact as findContact,
    AddContact as addContact,
    DeleteContact as deleteContact,
    UpdateContact as updateContact,
    FindByEmail as findByEmail
} from '../repository/contactRepo.js';

export const FindContact = async (id) => {
    let result = await findContact(id);
    if(result !== null) {
        return result;
    } else {
        throw Error(`Contact with ${id} does not exist.`);
    }
}

export const AddContact = async (contact) => {
    let check = await findByEmail(contact.email);
    if(check == null){
        await addContact(contact);
    }else {
        throw Error(`Contact with email ${contact.email} already exist.`);
    }
}

export const DeleteContact = async (id) => {
    let result = await findContact(id);
    if(result !== null) {
        return await deleteContact(id);
    } else {
        throw Error(`Contact with ${id} does not exist.`);
    }
}

export const UpdateContact = async (contact) => {
    let result = await findByEmail(contact.email);
    if(result !== null) {
        return await updateContact(contact);
    } else {
        throw Error(`Contact with ${contact.email} does not exist.`);
    }
}




