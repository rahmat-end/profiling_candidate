import React from 'react'
import { API } from '@/libs/api'
import { useNavigate } from 'react-router-dom'
import { IUser } from '@/type/user'
import { useToast } from '@chakra-ui/react'

export function useBiodata() {
    const toast = useToast()
    const navigate = useNavigate()

    const [form, setForm] = React.useState<IUser>({
        name: '',
        age: 0,
        phone_number: '',
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
        question10: '',
        question11: '',
    })

    function handleChange(e: any) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function handleBiodata(event: any) {
        try {
          event.preventDefault()

          const response = await API.post('/addUser', form)
          toast({
            title: 'Biodata submitted.',
            description: 'Your biodata has been submitted successfully.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
          
          localStorage.setItem('user', JSON.stringify(response.data))
          navigate('/profiling')
        } catch (error) {
          throw error
        }
      }

    // function handleBiodata(event: any) {
    //     event.preventDefault()

    //     let formData = new FormData()

    //     formData.append("name", form.name)
    //     formData.append("age", form.age.toString()) // Convert age to string
    //     formData.append("phone_number", form.phone_number)
    //     formData.append("question1", form.question1)
    //     formData.append("question2", form.question2)
    //     formData.append("question3", form.question3)
    //     formData.append("question4", form.question4)
    //     formData.append("question5", form.question5)
    //     formData.append("question6", form.question6)
    //     formData.append("question7", form.question7)
    //     formData.append("question8", form.question8)
    //     formData.append("question9", form.question9)
    //     formData.append("question10", form.question10)
    //     formData.append("question11", form.question11)

    //     const response = API.post("/addUser", formData)
    //     localStorage.setItem('user', JSON.stringify(response))
    //     navigate('/profiling')
    // }

    return {
        form,
        handleChange,
        handleBiodata
    }
}
