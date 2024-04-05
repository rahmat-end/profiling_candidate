import { IProfiling } from "@/type/profiling"
import React from "react"

export function useProfiling() {
    interface CandidateData {
        [key: string]: {
            variable: string
        }
    }

    interface MergedData {
        randomize: {
            [key: string]: {
            variable: string
            candidate_a: string
            candidate_b: string
            }
        }
    }

    // Function to shuffle object properties
    const shuffleObjectProperties = (obj: any, randomOrder: number[]) => {
        const shuffledKeys = randomOrder.map((index) => Object.keys(obj)[index])
        const shuffledObject: any = {}
    
        shuffledKeys.forEach((key, index) => {
        shuffledObject[key] = obj[shuffledKeys[index]]
        })
    
        return shuffledObject
    };
  
    function mergeCandidates(candidateA: CandidateData, candidateB: CandidateData, question: string): MergedData {
        // Generate a random order for object properties and store it in session storage
        const randomOrder: number[] = []
    
        if (randomOrder.length === 0) {
            // Generate a new random order if not stored in session storage
            for (let i = 0; i < Object.keys(candidateA).length; i++) {
                randomOrder.push(i)
            }
            randomOrder.sort(() => Math.random() - 0.5);
            // localStorage.setItem('randomOrder', JSON.stringify(randomOrder));
        }
    
        const mergedData: MergedData = {
            randomize: {},
        };
    
        // Shuffle properties of candidateA and candidateB using the stored random order
        const shuffledCandidateA = shuffleObjectProperties(candidateA, randomOrder)
        const shuffledCandidateB = shuffleObjectProperties(candidateB, randomOrder)
    
        for (const key in shuffledCandidateA) {
        if (shuffledCandidateA.hasOwnProperty(key) && shuffledCandidateB.hasOwnProperty(key)) {
            let variable: string
    
            switch (key) {
            case 'dimensions1_medsos':
                variable = question === 'Tiktok' ? 'FYP' : question === 'X/Twitter' ? 'Tweet Viral' : 'Reels Viral';
                break
            case 'dimensions2_medsos':
                variable = question === 'Tiktok' ? 'Live Tiktok' : 'Reply Comment';
                break
            case 'dimensions1_campaign':
                variable = 'Banner Pinggir Jalan'
                break
            case 'dimensions2_campaign':
                variable = 'Blusukan'
                break
            case 'residence':
                variable = 'Tempat Tinggal'
                break
            case 'ageism':
                variable = 'Usia'
                break
            case 'incumbency':
                variable = 'Status Jabatan'
                break
            case 'education':
                variable = 'Pendidikan'
                break
            case 'party':
                variable = 'Partai'
                break
            default:
                variable = `Unknown Dimension (${key})`
                break
            }
    
            mergedData.randomize[key] = {
            variable,
            candidate_a: shuffledCandidateA[key].variable,
            candidate_b: shuffledCandidateB[key].variable,
            };
        }
        }
    
        return mergedData
    }

    const [form, setForm] = React.useState<IProfiling>({
        randomize: {},
        choosen_candidate: '',
        answer_candidate_a: 0,
        answer_candidate_b: 0,
        userId: 0
    })

    function handleChange(e: any) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return {
        mergeCandidates,
        form,
        handleChange
    }
}