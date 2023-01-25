import { useDispatch } from 'react-redux'
import { setFilter } from 'redux/contacts.slice'


import { FilterLabel } from './ContactsFilter.styled'

export const ContactsFilter = () => {
    const dispatch = useDispatch()

    const onFilterChange = filter => {
        dispatch(setFilter(filter))
    }

    return (
        <FilterLabel>Find contacts by name
            <input
                type="text"
                onChange={(event) => onFilterChange(event.currentTarget.value)}
            />
        </FilterLabel>
    )
}
