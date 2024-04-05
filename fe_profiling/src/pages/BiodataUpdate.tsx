import React from "react"
import { useBiodataUpdate } from "./hook/useBiodataUpdate"
import { Box, Button, FormControl, FormLabel, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"

export default function BiodataUpdate() {
    const { form, handleChange, handleBiodataUpdate } = useBiodataUpdate()
    const [question7, setQuestion7] = React.useState<string>(form.question7)
    const [question8, setQuestion8] = React.useState<string>(form.question8)
    const [question9, setQuestion9] = React.useState<string>(form.question9)
    const [question10, setQuestion10] = React.useState<string>(form.question10)
    const [question11, setQuestion11] = React.useState<string>(form.question11)

    React.useEffect(() => {
        setQuestion7(form.question7)
        setQuestion8(form.question8)
        setQuestion9(form.question9)
        setQuestion10(form.question10)
        setQuestion11(form.question11)
    }, [form.question7, form.question8, form.question9, form.question10, form.question11] )

    return (
        <Box
            color={"white"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            marginTop={"50px"}
            mb={"50px"}
            width={"100%"}
            // border={"2px solid red"}
        >
            <form>
                <FormControl 
                    isRequired
                    display={"flex"}
                    flexDirection={"column"}
                    gap={3}
                    width={"80vw"}
                    // border={"2px solid red"}
                >
                    <Text color={"brand.green"} fontSize={"2xl"} fontWeight={"bold"}>
                        Profiling Candidate
                    </Text>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                        Isi biodata berikut
                    </Text>
                    <FormControl>
                        <FormLabel>Bagi saya suara yang saya berikan di TPS ?</FormLabel>
                        <RadioGroup name="question7" onChange={(value) => handleChange({ target: { name: "question7", value } })} value={question7}>
                            <Stack direction='column'>
                                <Radio value='Penting'>Penting</Radio>
                                <Radio value='Tidak Penting'>Tidak Penting</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Saya lebih suka pemimpin yang ?</FormLabel>
                        <RadioGroup name="question8" onChange={(value) => handleChange({ target: { name: "question8", value } })} value={question8}>
                            <Stack direction='column'>
                                <Radio value='Seagama'>Seagama</Radio>
                                <Radio value='Tidak Seagama'>Tidak Seagama</Radio>
                                <Radio value='Tidak Masalah Seagama atau Bukan'>Tidak Masalah Seagama atau Bukan</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Saya memilih karena ...</FormLabel>
                        <RadioGroup name="question9" onChange={(value) => handleChange({ target: { name: "question9", value } })} value={question9}>
                            <Stack direction='column'>
                                <Radio value='Disuruh Orang Tua'>Disuruh Orang Tua</Radio>
                                <Radio value='Ikut-Ikutan Teman'>Ikut-Ikutan Teman</Radio>
                                <Radio value='Ngasal'>Ngasal</Radio>
                                <Radio value='Memilih karena hati nurani'>Memilih karena hati nurani</Radio>
                                <Radio value='Memilih yang menurut saya paling bisa bekerja'>Memilih yang menurut saya paling bisa bekerja</Radio>
                                <Radio value='Alasan lain'>Alasan lain</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Ketika ada calon yang memberi uang maka saya akan ...</FormLabel>
                        <RadioGroup name="question10" onChange={(value) => handleChange({ target: { name: "question10", value } })} value={question10}>
                            <Stack direction='column'>
                                <Radio value='Memilihnya'>Memilihnya</Radio>
                                <Radio value='Mengajak Teman Memilih'>Mengajak Teman Memilih</Radio>
                                <Radio value='Menolaknya'>Menolaknya</Radio>
                                <Radio value='Mengambil Uangnya Saja Tapi Pilih Calon Lain'>Mengambil Uangnya Saja Tapi Pilih Calon Lain</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Saya memilih calon yang punya gaya kampanye ?</FormLabel>
                        <RadioGroup name="question11" onChange={(value) => handleChange({ target: { name: "question11", value } })} value={question11}>
                            <Stack direction='column'>
                                <Radio value='Santai'>Santai</Radio>
                                <Radio value='Formal'>Formal</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <Button 
                        backgroundColor={"green"} 
                        color={"white"} 
                        colorScheme="green" 
                        onClick={handleBiodataUpdate}
                    >
                        Next
                    </Button>
                </FormControl>
            </form>
        </Box>
    )
}