import React from "react"
import { useBiodata } from "./hook/useBiodata"
import { Box, Button, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"

export default function Biodata() {
    const { form, handleChange, handleBiodata } = useBiodata()
    const [gender, setGender] = React.useState<string>(form.gender)
    const [question1, setQuestion1] = React.useState<string>(form.question1)
    const [question2, setQuestion2] = React.useState<string>(form.question2)
    const [question3, setQuestion3] = React.useState<string>(form.question3)
    const [question4, setQuestion4] = React.useState<string>(form.question4)
    const [question_video_ads, setQuestionVideoAds] = React.useState<string>(form.question_video_ads)
    const [question_banner, setQuestionBanner] = React.useState<string>(form.question_banner)
    const [question5, setQuestion5] = React.useState<string>(form.question5)
    const [question6, setQuestion6] = React.useState<string>(form.question6)

    React.useEffect(() => {
        setGender(form.gender)
        setQuestion1(form.question1)
        setQuestion2(form.question2)
        setQuestion3(form.question3)
        setQuestion4(form.question4)
        setQuestionVideoAds(form.question_video_ads)
        setQuestionBanner(form.question_banner)
        setQuestion5(form.question5)
        setQuestion6(form.question6)
    }, [form.gender, form.question1, form.question2, form.question3, form.question4, form.question_video_ads, form.question_banner, form.question5, form.question6] )

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
                        <FormLabel>Siapa nama/inisial anda?</FormLabel>
                        <Input 
                            type="text"
                            placeholder="Isi data nama ..." 
                            name="name" 
                            onChange={handleChange} 
                            value={form.name}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Berapa Usia anda?</FormLabel>
                        <Input 
                            type="number"
                            placeholder="Isi data umur ..." 
                            name="age" 
                            onChange={handleChange} 
                            value={form.age}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat rumah anda? (Sebutkan kota/kab saja)</FormLabel>
                        <Input 
                            type="text"
                            placeholder="Isi data kota/kab saja ..." 
                            name="district" 
                            onChange={handleChange} 
                            value={form.district}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel lineHeight={"2"}>Dimana anda bersekolah saat ini? Bagi yang baru lulus atau akan lulus tingkat sma, isi dengan nama sekolah anda. Bagi yang sudah berstatus mahasiswa aktif (semester 2 keatas) mohon isi nama kampus</FormLabel>
                        <Input 
                            type="text"
                            placeholder="Isi data nama sekolah/kampus ..." 
                            name="school" 
                            onChange={handleChange} 
                            value={form.school}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No handphone (untuk pengisian saldo dana/ovo/gopay)</FormLabel>
                        <Input 
                            type="text"
                            placeholder="Isi data no hp ..." 
                            name="phone_number" 
                            onChange={handleChange} 
                            value={form.phone_number}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Apa jenis kelamin anda?</FormLabel>
                        <RadioGroup name="gender" onChange={(value) => handleChange({ target: { name: "gender", value } })} value={gender}>
                            <Stack direction='column'>
                                <Radio value='Laki-laki'>Laki-laki</Radio>
                                <Radio value='Perempuan'>Perempuan</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Berapa lama rata-rata anda menghabiskan waktu di media sosial (Instagram/X/Tiktok) setiap sehari?</FormLabel>
                        <RadioGroup name="question1" onChange={(value) => handleChange({ target: { name: "question1", value } })} value={question1}>
                            <Stack direction='column'>
                                <Radio value='0-1 Jam'>0-1 Jam</Radio>
                                <Radio value='2-3 Jam'>2-3 Jam</Radio>
                                <Radio value='4-5 Jam'>4-5 Jam</Radio>
                                <Radio value='6-8 Jam'>6-8 Jam</Radio>
                                <Radio value='Di atas 8 Jam'>Di atas 8 Jam</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Apa media sosial yang favorit anda?</FormLabel>
                        <RadioGroup name="question2" onChange={(value) => handleChange({ target: { name: "question2", value } })} value={question2}>
                            <Stack direction='column'>
                                <Radio value='Tiktok'>Tiktok</Radio>
                                <Radio value='Instagram'>Instagram</Radio>
                                <Radio value='X/Twitter'>X/Twitter</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Menurut anda, mana media sosial yang paling banyak memuat informasi politik?</FormLabel>
                        <RadioGroup name="question3" onChange={(value) => handleChange({ target: { name: "question3", value } })} value={question3}>
                            <Stack direction='column'>
                                <Radio value='Tiktok'>Tiktok</Radio>
                                <Radio value='Instagram'>Instagram</Radio>
                                <Radio value='X/Twitter'>X/Twitter</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Ketika ada iklan poster calon anggota DPR RI di timeline atau story media sosial anda, apa yang anda lakukan?</FormLabel>
                        <RadioGroup name="question4" onChange={(value) => handleChange({ target: { name: "question4", value } })} value={question4}>
                            <Stack direction='column'>
                                <Radio value='Sering meluangkan waktu untuk membaca'>Sering meluangkan waktu untuk membaca</Radio>
                                <Radio value='Kadang meluangkan waktu untuk membaca'>Kadang meluangkan waktu untuk membaca</Radio>
                                <Radio value='Tidak peduli'>Tidak peduli kemudian melewati begitu saja (skip)</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Ketika ada iklan video calon anggota DPR RI di timeline atau story media sosial anda, apa yang anda lakukan?</FormLabel>
                        <RadioGroup name="question_video_ads" onChange={(value) => handleChange({ target: { name: "question_video_ads", value } })} value={question_video_ads}>
                            <Stack direction='column'>
                                <Radio value='Sering meluangkan waktu untuk membaca'>Sering meluangkan waktu untuk membaca</Radio>
                                <Radio value='Kadang meluangkan waktu untuk membaca'>Kadang meluangkan waktu untuk membaca</Radio>
                                <Radio value='Tidak peduli'>Tidak peduli kemudian melewati begitu saja (skip)</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Ketika ada banner calon anggota DPR RI di pinggir jalan, apa yang anda lakukan?</FormLabel>
                        <RadioGroup name="question_banner" onChange={(value) => handleChange({ target: { name: "question_banner", value } })} value={question_banner}>
                            <Stack direction='column'>
                                <Radio value='Sering meluangkan waktu untuk membaca'>Sering meluangkan waktu untuk membaca</Radio>
                                <Radio value='Kadang meluangkan waktu untuk membaca'>Kadang meluangkan waktu untuk membaca</Radio>
                                <Radio value='Tidak peduli'>Tidak peduli</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Apakah salah satu dari anggota keluarga anda adalah kader partai (memiliki kartu anggota dan aktif dalam kegiatan politik)?</FormLabel>
                        <RadioGroup name="question5" onChange={(value) => handleChange({ target: { name: "question5", value } })} value={question5}>
                            <Stack direction='column'>
                                <Radio value='Ya'>Ya</Radio>
                                <Radio value='Tidak'>Tidak</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Apakah anda berasal dari keluarga yang sangat taat beragama?</FormLabel>
                        <RadioGroup name="question6" onChange={(value) => handleChange({ target: { name: "question6", value } })} value={question6}>
                            <Stack direction='column'>
                                <Radio value='Ya'>Ya</Radio>
                                <Radio value='Tidak'>Tidak</Radio>
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