import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'redux/contacts.slice'

import { ContsctList, ContactItem, ContactItemInfo, ContactItemButton } from './ContactsList.styled'

export const ContactsList = () => {
    const contacts = useSelector((state) => state.contacts.contacts)
    const dispatch = useDispatch()

    const onDeleteContact = id => {
        dispatch(deleteContact(id))
    }

    return (
        <ContsctList>
            {contacts.map(({ id, name, number, }) => (
                <ContactItem key={id}>
                    <ContactItemInfo>{name}: {number}</ContactItemInfo>
                    <ContactItemButton onClick={() => onDeleteContact(id)}>Delete</ContactItemButton>
                </ContactItem>
            ))}
        </ContsctList>
    )
}