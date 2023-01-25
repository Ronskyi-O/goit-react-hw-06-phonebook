import { ContactListItem } from 'components/ContactsListItem/ContactsListItem'
import { useSelector } from 'react-redux'

import { ContsctList } from './ContactsList.styled'

export const ContactsList = () => {
    const contacts = useSelector((state) => state.contacts.contacts)
    console.log(contacts);

    return (
        <ContsctList>
            {contacts.map(({ id, name, number, }) => (
                // <li key={id}>{name}: {number}</li>
                <ContactListItem key={id} id={id} name={name} number={number} />
            ))}
        </ContsctList>
    )
}