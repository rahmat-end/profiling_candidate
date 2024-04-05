import {Box, Button, FormControl, Radio, RadioGroup, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tooltip, Tr, useToast } from "@chakra-ui/react"
import React from "react"
import { useNavigate } from 'react-router-dom'
import { useProfiling } from "./hook/useProfiling"
import { API } from "@/libs/api"

export default function Profiling() {
    interface MergedData {
        randomize: {
            [key: string]: {
                variable: string
                candidate_a: string
                candidate_b: string
            };
        };
    }

    const toast = useToast()
    const navigate = useNavigate()
    const { mergeCandidates, form, handleChange } = useProfiling()
    // const [candidate_a, setCandidate_a] = React.useState<any>({})
    // const [candidate_b, setCandidate_b] = React.useState<any>({})
    const [mergedData, setMergedData] = React.useState<MergedData>({ randomize: {} })
    // console.log(JSON.stringify(mergedData, null, 2))
    const [sliderValueCandidateA, setSliderValueCandidateA] = React.useState(form.answer_candidate_a)
    const [showTooltipCandidateA, setShowTooltipCandidateA] = React.useState(false)
    const [sliderValueCandidateB, setSliderValueCandidateB] = React.useState(form.answer_candidate_b)
    const [showTooltipCandidateB, setShowTooltipCandidateB] = React.useState(false)
    // console.log("ini nilai kandidat a : " + sliderValueCandidateA, "ini nilai kandidat b : " + sliderValueCandidateB)
    const session = JSON.parse(localStorage.user)
    form.userId = session.data.id
    const question = session.data.question2
    // let personelized_question = ''
    // if (question == 'Tiktok') {
    //         personelized_question = '1'
    //     } else if (question == 'X/Twitter') {
    //             personelized_question = '2'
    //         } else if (question == 'Instagram') {
    //                 personelized_question = '3'
    // }
    const [answer, setAnswer] = React.useState(0)
    form.randomize = mergedData.randomize

    const renderTableRows = () => {
        return Object.entries(mergedData.randomize).map(([key, value]) => (
          <Tr key={key}>
            <Td>{value.variable}</Td>
            <Td>{value.candidate_a}</Td>
            <Td>{value.candidate_b}</Td>
          </Tr>
        ))
    }
    
    async function getRandomizedCandidate() {
        try {
            // const response = await API.get(`/randomize/${personelized_question}`)
            const response = await API.get(`/randomize/1`)
            console.log(response.data)
            // setCandidate_a(response.data.candidate_a)
            // setCandidate_b(response.data.candidate_b)
            setMergedData(mergeCandidates(response.data.candidate_a, response.data.candidate_b, question))
        } catch(err) {
            console.log(err)
        }
    }

    const handleSliderChangeA = (value: any) => {
        setSliderValueCandidateA(value)
        handleChange({
          target: {
            name: 'answer_candidate_a',
            value: value,
          },
        })
    }

    const handleSliderChangeB = (value: any) => {
        setSliderValueCandidateB(value)
        handleChange({
          target: {
            name: 'answer_candidate_b',
            value: value,
          },
        })
    }

    async function countUser() {
        try {
          const response = await API.get(`/countUser/${session.data.id}`)
          setAnswer(response.data.data)
        } catch(err) {
          console.log(err)
        }
    }

    async function handleProfiling() {
        try {
            if (answer < 9) {
                await API.post('/addProfiling', form)
                toast({
                    title: `Profiling candidate model ${answer + 1} submitted.`,
                    description: 'Your answer has been submitted successfully.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                navigate('/profiling')
                window.location.reload()
            } else if (answer === 9) {
                await API.post('/addProfiling', form)
                navigate('/biodata_update')
            } else {
                navigate('/biodata_update')
            }
        } catch (error) {
            throw error
        }
    }

    React.useEffect(() => {
        getRandomizedCandidate()
        countUser()
    }, [] )
    // console.log(form, null, 2)

    return(
        <Box 
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            mx={'auto'}
            mt={'25px'}
            mb={'75px'}
            width={'80vw'}
        >   
            <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
                <h1>Pertanyaan 1</h1><Box textColor={'#222222'} backgroundColor={'white'} padding={'5px'} borderRadius={'5px'}>Halaman {answer + 1}</Box>
            </Box>
            <br />
            <h1>Jika pemilu dilaksanakan hari ini, mana calon anggota DPR RI yang anda pilih ?</h1><br />
            <TableContainer 
                width={'100%'}
                mb={'25px'}
            >
                <Table variant='simple' style={{ color: 'white' }}>
                    <TableCaption>Profiling Candidate Personalized Model {answer + 1}</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Variable</Th>
                            <Th>Candidate A</Th>
                            <Th>Candidate B</Th>
                        </Tr>
                    </Thead>
                    <Tbody>{renderTableRows()}</Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Variable</Th>
                            <Th>Candidate A</Th>
                            <Th>Candidate B</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <RadioGroup name="choosen_candidate" textColor={'white'} onChange={(value) => handleChange({ target: { name: "choosen_candidate", value } })} value={form.choosen_candidate}>
                <Stack direction='column'>
                    <Radio value='Kandidat A' checked={form.choosen_candidate === 'Kandidat A'}>Kandidat A</Radio>
                    <Radio value='Kandidat B' checked={form.choosen_candidate === 'Kandidat B'}>Kandidat B</Radio>
                </Stack>
            </RadioGroup><br />
            <h1>Pertanyaan 2</h1><br />
            <h1>Berapa skor keyakinan anda, seberapa besar calon anggota DPR RI tersebut bisa mewakili anda ?</h1>
            <FormControl>
                <h1>Kandidat A</h1>
                <Slider
                    id='slider'
                    defaultValue={5}
                    min={0}
                    max={100}
                    colorScheme='teal'
                    name="answer_candidate_a"
                    // onChange={(value) => handleChange({ target: { name: "answer_candidate_a", value } })}
                    // onChange={(v) => setSliderValueCandidateA(v)}
                    onChange={(v) => handleSliderChangeA(v)}
                    value={sliderValueCandidateA}
                    onMouseEnter={() => setShowTooltipCandidateA(true)}
                    onMouseLeave={() => setShowTooltipCandidateA(false)}
                    mt={'10px'}
                    mb={'20px'}
                >
                    <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm' color={'teal.500'}>
                        25%
                    </SliderMark>
                    <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm' color={'teal.500'}>
                        50%
                    </SliderMark>
                    <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm' color={'teal.500'}>
                        75%
                    </SliderMark>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <Tooltip
                        hasArrow
                        bg='teal.500'
                        color='white'
                        placement='top'
                        isOpen={showTooltipCandidateA}
                        label={`${sliderValueCandidateA}%`}
                    >
                        <SliderThumb />
                    </Tooltip>
                </Slider>
            </FormControl>
            <FormControl>
                <h1>Kandidat B</h1>
                <Slider
                    id='slider'
                    defaultValue={5}
                    min={0}
                    max={100}
                    colorScheme='teal'
                    name="answer_candidate_b"
                    onChange={(v) => handleSliderChangeB(v)}
                    value={sliderValueCandidateB}
                    onMouseEnter={() => setShowTooltipCandidateB(true)}
                    onMouseLeave={() => setShowTooltipCandidateB(false)}
                    mt={'10px'}
                    mb={'20px'}
                >
                    <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm' color={'teal.500'}>
                        25%
                    </SliderMark>
                    <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm' color={'teal.500'}>
                        50%
                    </SliderMark>
                    <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm' color={'teal.500'}>
                        75%
                    </SliderMark>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <Tooltip
                        hasArrow
                        bg='teal.500'
                        color='white'
                        placement='top'
                        isOpen={showTooltipCandidateB}
                        label={`${sliderValueCandidateB}%`}
                    >
                        <SliderThumb />
                    </Tooltip>
                </Slider>
            </FormControl>
            <Button onClick={handleProfiling} colorScheme='teal' size='sm'>{answer === 9 ? "Finish" : "Next"}</Button>
        </Box>
    )
}