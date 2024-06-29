import React from "react"
import { API } from "@/libs/api"
import { IUserDetail } from "@/type/user"
import { Box, Text, Input, InputGroup, InputLeftElement, Button, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { IoSearch } from "react-icons/io5"

export default function User() {
    const [users, setUsers] = React.useState<IUserDetail[]>([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);

    const recordsPerPage = 10;

    function navToDetailUser(id: number) {
        window.location.href = `/user/${id}`;
    }

    async function getUsers() {
        try {
            const response = await API.get(`/users`);
            console.log(response.data);
            setUsers(response.data.data);
            setTotalPages(Math.ceil(response.data.data.length / recordsPerPage));
        } catch (err) {
            console.log(err);
        }
    }

    async function searchUser(key: string) {
        if (key === '') {
            getUsers();
        } else {
            try {
                const response = await API.get(`/search/${key}`);
                console.log(response.data);
                setUsers(response.data.data);
                setTotalPages(Math.ceil(response.data.data.length / recordsPerPage));
            } catch (err) {
                console.log(err);
            }
        }
    }

    React.useEffect(() => {
        getUsers();
    }, []);

    const handlePageChange = (page: number) => {
        if (page < 1) page = 1;
        if (page > totalPages) page = totalPages;
        setCurrentPage(page);
    };

    const getPageNumbers = () => {
        const pageNumbers = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pageNumbers;
    };

    const currentRecords = users.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

    return (
        <Box
            color={"white"}
            mx={"auto"}
            my={"50px"}
            width={"80vw"}
        >
            <Text fontSize={"2xl"} fontWeight={"bold"} mb={"20px"} borderBottom={"2px solid white"}>
                Data User
            </Text>
            <Text fontSize='lg' mb={"10px"}>Selamat Datang di Aplikasi Profiling Candidate</Text>
            <InputGroup width={"300px"}>
                <InputLeftElement pointerEvents='none'>
                    <IoSearch color='gray.300' />
                </InputLeftElement>
                <Input type='text' placeholder='Search ...' onChange={(e) => searchUser(e.target.value)} />
            </InputGroup>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Data User</TableCaption>
                    <Thead>
                        <Tr>
                            <Th isNumeric>No</Th>
                            <Th>Nama</Th>
                            <Th>Usia</Th>
                            <Th>Alamat</Th>
                            <Th>Sekolah</Th>
                            <Th>No hp</Th>
                            <Th>Jenis Kelamin</Th>
                            <Th>Aksi</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {currentRecords.map((user, index) => (
                            <Tr key={index}>
                                <Td isNumeric>{(currentPage - 1) * recordsPerPage + index + 1}</Td>
                                <Td>{user.name}</Td>
                                <Td>{user.age}</Td>
                                <Td style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>{user.district}</Td>
                                <Td>{user.school}</Td>
                                <Td>{user.phone_number}</Td>
                                <Td>{user.gender}</Td>
                                <Td>
                                    <Button colorScheme='blue' size='sm' mr={"10px"} onClick={() => navToDetailUser(user.id)}>Detail</Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <Box display={"flex"} justifyContent={"flex-end"} mt={"10px"}>
                <Button colorScheme='blue' size='sm' mr={"10px"} onClick={() => handlePageChange(1)}>First</Button>
                <Button colorScheme='blue' size='sm' mr={"10px"} onClick={() => handlePageChange(currentPage - 1)}>Previous</Button>
                {getPageNumbers().map((page, index) =>
                    typeof page === 'number' ? (
                        <Button
                            key={index}
                            colorScheme={page === currentPage ? 'blue' : 'gray'}
                            size='sm'
                            mr={"10px"}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </Button>
                    ) : (
                        <Text key={index} mx={"5px"}>...</Text>
                    )
                )}
                <Button colorScheme='blue' size='sm' mr={"10px"} onClick={() => handlePageChange(currentPage + 1)}>Next</Button>
                <Button colorScheme='blue' size='sm' onClick={() => handlePageChange(totalPages)}>Last</Button>
            </Box>
        </Box>
    );
}