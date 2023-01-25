
import { FilterLabel } from './ContactsFilter.styled'

export const ContactsFilter = ({ value, onChange }) => {
    return (
        <FilterLabel>Find contacts by name
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </FilterLabel>
    )
}
