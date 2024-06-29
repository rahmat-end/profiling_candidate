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
        district: '',
        school: '',
        phone_number: '',
        gender: '',
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question_video_ads: '',
        question_banner: '',
        question5: '',
        question6: '',
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

    return {
        form,
        handleChange,
        handleBiodata
    }
}
