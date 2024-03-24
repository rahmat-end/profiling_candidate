import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

export default function Submitted() {
    return (
        <>
            <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height={'100vh'}
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Questionnaire submitted!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    Thanks for submitting your questionnaire. Our team will get back to you soon.
                </AlertDescription>
            </Alert>
        </>
    )
}