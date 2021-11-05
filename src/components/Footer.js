import { Box, Stack, Text, Icon, Link } from "@chakra-ui/react"
import { DiGithubBadge } from "react-icons/di"

export const Footer = () => {
    return (
      <Box as="footer" width="100%" marginTop={20} p={2} bottom="0" zIndex="1" backgroundColor="blackAlpha.800">
        <Stack align="center" justify="center">
          <Link href="https://github.com/SGarcia96/country-finder" isExternal>
            <Text color="white" fontSize="18px">
              <Icon color="white" boxSize="28px" as={DiGithubBadge} />
              See the code
            </Text>
          </Link>
        </Stack>
      </Box>
    )
}