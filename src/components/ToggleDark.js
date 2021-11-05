import { useColorMode, Button, Icon } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

export const ToggleDark = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <div>
            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <Icon as={FaMoon} /> : <Icon as={FaSun} />}
            </Button>
        </div>
    )
}