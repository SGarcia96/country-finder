import { ListItem, Button } from "@chakra-ui/react"

export const CountrySimple = ({ name, country, show }) => {
    return (
        <ListItem key={name} display="flex" alignItems="center" justifyContent="space-between" borderWidth="1px" p={1} m={1}>
            {name}
            <Button value={country.name} onClick={show} colorScheme="teal" variant="outline">
                Show
            </Button>
        </ListItem>
    )
}