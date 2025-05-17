"use client"

import { Box, Button, Field, Heading, Input, Stack } from "@chakra-ui/react"
 

interface FormValues {
  firstName: string
  lastName: string
}

export const FormLogin = () => {
 
  return (
    <Box>

        <form >
        <Stack gap="4" align="flex-start" maxW="sm">
            <Field.Root>
            <Field.Label>First name</Field.Label>
            <Input  />
            </Field.Root>

            <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input />
            </Field.Root>

            <Button type="submit">Submit</Button>
        </Stack>
        </form>
    </Box>
  )
}
