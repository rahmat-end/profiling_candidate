import React from 'react'
import { API } from '@/libs/api'
import { useNavigate } from 'react-router-dom'
import { IUserUpdate } from '@/type/user'
import { useToast } from '@chakra-ui/react'

export function useBiodataUpdate() {
    const toast = useToast()
    const navigate = useNavigate()

    const [form, setForm] = React.useState<IUserUpdate>({
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

      async function handleBiodataUpdate(event: any) {
        try {
          event.preventDefault()
          const session = JSON.parse(localStorage.user)

          await API.put(`/updateUser/${session.data.id}`, form)
          toast({
            title: 'Biodata submitted.',
            description: 'Your biodata has been updated successfully.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
          
          localStorage.removeItem("user")
          navigate('/submitted')
        } catch (error) {
          throw error
        }
      }

    return {
        form,
        handleChange,
        handleBiodataUpdate
    }
}
