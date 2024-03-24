import React from "react"
import { useBiodata } from "./hook/useBiodata"
import { Box, Button, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"

export default function Biodata() {
    const { form, handleChange, handleBiodata } = useBiodata()
    const [question1, setQuestion1] = React.useState<string>(form.question1)
    const [question2, setQuestion2] = React.useState<string>(form.question2)
    const [question3, setQuestion3] = React.useState<string>(form.question3)
    const [question4, setQuestion4] = React.useState<string>(form.question4)
    const [question5, setQuestion5] = React.useState<string>(form.question5)
    const [question6, setQuestion6] = React.useState<string>(form.question6)
    const [question7, setQuestion7] = React.useState<string>(form.question7)
    const [question8, setQuestion8] = React.useState<string>(form.question8)
    const [question9, setQuestion9] = React.useState<string>(form.question9)
    const [question10, setQuestion10] = React.useState<string>(form.question10)
    const [question11, setQuestion11] = React.useState<string>(form.question11)

    React.useEffect(() => {
        setQuestion1(form.question1)
        setQuestion2(form.question2)
        setQuestion3(form.question3)
        setQuestion4(form.question4)
        setQuestion5(form.question5)
        setQuestion6(form.question6)
        setQuestion7(form.question7)
        setQuestion8(form.question8)
        setQuestion9(form.question9)
        setQuestion10(form.question10)
        setQuestion11(form.question11)
    }, [form.question1, form.question2, form.question3, form.question4, form.question5, form.question6, form.question7, form.question8, form.question9, form.question10, form.question11] )

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
                        <FormLabel>Nama</FormLabel>
                        <Input 
                            type="text"
                            placeholder="Isi data nama ..." 
                            name="name" 
                            onChange={handleChange} 
                            value={form.name}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Umur</FormLabel>
                        <Input 
                            type="number"
                            placeholder="Isi data umur ..." 
                            name="age" 
                            onChange={handleChange} 
                            value={form.age}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nomor HP</FormLabel>
                        <Input 
                            type="text"
                            placeholder="Isi data nomor hp ..." 
                            name="phone_number" 
                            onChange={handleChange} 
                            value={form.phone_number}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Berapa lama main sosmed ?</FormLabel>
                        <RadioGroup name="question1" onChange={(value) => handleChange({ target: { name: "question1", value } })} value={question1}>
                            <Stack direction='column'>
                                <Radio value='1 - 3 Jam'>1 - 3 Jam</Radio>
                                <Radio value='4 - 5 Jam'>4 - 5 Jam</Radio>
                                <Radio value='5 - 8 Jam'>5 - 8 Jam</Radio>
                                <Radio value='Di atas 8 Jam'>Di atas 8 Jam</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Apa sosmed yang favorit ?</FormLabel>
                        <RadioGroup name="question2" onChange={(value) => handleChange({ target: { name: "question2", value } })} value={question2}>
                            <Stack direction='column'>
                                <Radio value='Tiktok'>Tiktok</Radio>
                                <Radio value='Instagram'>Instagram</Radio>
                                <Radio value='X/Twitter'>X/Twitter</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Media sosial yang paling memuat informasi politik ?</FormLabel>
                        <RadioGroup name="question3" onChange={(value) => handleChange({ target: { name: "question3", value } })} value={question3}>
                            <Stack direction='column'>
                                <Radio value='Tiktok'>Tiktok</Radio>
                                <Radio value='Instagram'>Instagram</Radio>
                                <Radio value='X/Twitter'>X/Twitter</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Ketika ada banner caleg dipinggir jalan, maka saya ...</FormLabel>
                        <RadioGroup name="question4" onChange={(value) => handleChange({ target: { name: "question4", value } })} value={question4}>
                            <Stack direction='column'>
                                <Radio value='Meluangkan Waktu Untuk Membaca'>Meluangkan Waktu Untuk Membaca</Radio>
                                <Radio value='Tidak Peduli'>Tidak Peduli</Radio>
                                <Radio value='Suka Fotonya'>Suka Fotonya</Radio>
                                <Radio value='Terganggu Dengan Banner Tersebut'>Terganggu Dengan Banner Tersebut</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Salah satu anggota keluarga saya adalah kader partai ?</FormLabel>
                        <RadioGroup name="question5" onChange={(value) => handleChange({ target: { name: "question5", value } })} value={question5}>
                            <Stack direction='column'>
                                <Radio value='Benar'>Benar</Radio>
                                <Radio value='Tidak'>Tidak</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Saya berasal dari keluarga yang saat taat beragama ?</FormLabel>
                        <RadioGroup name="question6" onChange={(value) => handleChange({ target: { name: "question6", value } })} value={question6}>
                            <Stack direction='column'>
                                <Radio value='Benar'>Benar</Radio>
                                <Radio value='Tidak'>Tidak</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
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
                        onClick={handleBiodata}
                    >
                        Next
                    </Button>
                </FormControl>
            </form>
        </Box>
    )
}