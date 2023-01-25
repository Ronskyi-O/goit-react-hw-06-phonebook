import { ContactItem, ContactItemInfo, ContactItemButton } from './ContactsListItem.styled'

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <ContactItem>
            <ContactItemInfo>{name}: {number}</ContactItemInfo>
            <ContactItemButton onClick={() => onDeleteContact(id)}>Delete</ContactItemButton>
        </ContactItem>
    )
}