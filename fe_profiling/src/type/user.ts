export type IUser = {
    name: string
    age: number
    district: string
    school: string
    phone_number: string
    gender: string
    question1: string
    question2: string
    question3: string
    question4: string
    question_video_ads: string
    question_banner: string
    question5: string
    question6: string
}

export type IUserUpdate = {
    question7: string
    question8: string
    question9: string
    question10: string
    question11: string
}

export type IUserDetail = {
    id: number
    name: string
    age: number
    district: string
    school: string
    phone_number: string
    gender: string
    question1: string
    question2: string
    question3: string
    question4: string
    question_video_ads: string
    question_banner: string
    question5: string
    question6: string
    question7: string
    question8: string
    question9: string
    question10: string
    question11: string
    profilings: Array<string>
}