
import { useSelector } from 'react-redux'

import { ContsctList, ContactItem, ContactItemInfo, ContactItemButton } from './ContactsList.styled'

export const ContactsList = () => {
    const contacts = useSelector((state) => state.contacts.contacts)

    return (
        <ContsctList>
            {contacts.map(({ id, name, number, }) => (
                <ContactItem key={id}>
                    <ContactItemInfo>{name}: {number}</ContactItemInfo>
                    <ContactItemButton>Delete</ContactItemButton>
                </ContactItem>
            ))}
        </ContsctList>
    )
}