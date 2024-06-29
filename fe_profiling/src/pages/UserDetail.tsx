import React from "react"
import { useParams } from "react-router-dom"
import { API } from "@/libs/api"
import { IUserDetail } from "@/type/user"
import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Table, TableCaption, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"

interface Randomize {
    [key: string]: {
        variable: string;
        candidate_a: string;
        candidate_b: string;
    };
}

interface Profiling {
    randomize: Randomize;
    choosen_candidate: string | null;
    answer_candidate_a: number | null;
    answer_candidate_b: number | null;
}

export default function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = React.useState<IUserDetail | null>(null)
    const [mergedData, setMergedData] = React.useState<Profiling[]>([])

    const shuffleObjectProperties = (obj: Randomize): Randomize => {
        const keys = Object.keys(obj);
        const shuffledKeys = keys.sort(() => Math.random() - 0.5);
        const shuffledObj: Randomize = {};
        
        shuffledKeys.forEach(key => {
            shuffledObj[key] = obj[key];
        });
        
        return shuffledObj;
    };

    const renderTableRows = (profiling: Profiling) => {
        if (!profiling.randomize) {
            return null;
        }

        return Object.entries(profiling.randomize).map(([key, value]) => (
            <Tr key={key}>
                <Td>{value.variable}</Td>
                <Td>{value.candidate_a}</Td>
                <Td>{value.candidate_b}</Td>
            </Tr>
        ));
    };

    async function getUser() {
        try {
            const response = await API.get(`/user/${id}`);
            console.log(response.data);
            setUser(response.data.data);

            const profilings = response.data.data.profilings.map((profiling: Profiling) => ({
                ...profiling,
                randomize: shuffleObjectProperties(profiling.randomize)
            }));
            setMergedData(profilings);
        } catch (err) {
            console.log(err);
        }
    }

    React.useEffect(() => {
        getUser()
    }, [])
    
    return (
        <Box
            color={"white"}
            mx={"auto"}
            my={"50px"}
            width={"80vw"}
        >
            <Text fontSize={"2xl"} fontWeight={"bold"} mb={"20px"} borderBottom={"2px solid white"}>
                User Detail
            </Text>
            <Text fontSize='lg' mb={"10px"}>Halo, @{user?.name} Selamat Datang di Aplikasi Profiling Candidate</Text>
            <Card color={"white"} backgroundColor={"transparent"}>
                <CardHeader>
                    <Heading size='md'>Biodata User</Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs'>Nama</Heading>
                            <Text pt='2' fontSize='sm'>{user?.name}</Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>Usia</Heading>
                            <Text pt='2' fontSize='sm'>{user?.age}</Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>Alamat</Heading>
                            <Text pt='2' fontSize='sm'>{user?.district}</Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>Sekolah</Heading>
                            <Text pt='2' fontSize='sm'>{user?.school}</Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>No hp</Heading>
                            <Text pt='2' fontSize='sm'>{user?.phone_number}</Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>Jenis Kelamin</Heading>
                            <Text pt='2' fontSize='sm'>{user?.gender}</Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
            <Card color={"white"} backgroundColor={"transparent"}>
                <CardHeader>
                    <Heading size='md'>Questionnaire User</Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs'>Berapa lama rata-rata anda menghabiskan waktu di media sosial (Instagram/X/Tiktok) setiap sehari?</Heading>
                            <Text pt='2' fontSize='sm'>{user?.question1}</Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>Apa media sosial yang favorit anda?</Heading>
                            <Text pt='2' fontSize='sm'>{user?.question2}</Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>Menurut anda, mana media sosial yang paling banyak memuat informasi politik?</Heading>
                            <Text pt='2' fontSize='sm'>{user?.question3}</Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>Ketika ada iklan poster calon anggota DPR RI di timeline atau story media sosial anda, apa yang anda lakukan?</Heading>
                            <Text pt='2' fontSize='sm'>{user?.question4}</Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>Ketika ada iklan video calon anggota DPR RI di timeline atau story media sosial anda, apa yang anda lakukan?</Heading>
                            <Text pt='2' fontSize='sm'>{user?.question_video_ads}</Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>Ketika ada banner calon anggota DPR RI di pinggir jalan, apa yang anda lakukan?</Heading>
                            <Text pt='2' fontSize='sm'>{user?.question_banner}</Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>Apakah salah satu dari anggota keluarga anda adalah kader partai (memiliki kartu anggota dan aktif dalam kegiatan politik)?</Heading>
                            <Text pt='2' fontSize='sm'>{user?.question5}</Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>Apakah anda berasal dari keluarga yang sangat taat beragama?</Heading>
                            <Text pt='2' fontSize='sm'>{user?.question6}</Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
            <Card color={"white"} backgroundColor={"transparent"}>
                <CardHeader>
                    <Heading size='md'>Profiling User</Heading>
                </CardHeader>
                <CardBody>
                    {mergedData.map((profiling, index) => (
                        <React.Fragment key={index}>
                            <Table variant='simple' style={{ color: 'white' }}>
                                <TableCaption>Profiling Candidate Personalized Model {index + 1}</TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>Variable</Th>
                                        <Th>Candidate A</Th>
                                        <Th>Candidate B</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>{renderTableRows(profiling)}</Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th>Variable</Th>
                                        <Th>Candidate A</Th>
                                        <Th>Candidate B</Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                            <p>Choosen Candidate : {profiling.choosen_candidate}</p>
                            <p>Rating Candidate A : {profiling.answer_candidate_a}</p>
                            <p>Rating Candidate B : {profiling.answer_candidate_b}</p>
                        </React.Fragment>
                    ))}
                </CardBody>
            </Card>
        </Box>
    )
}