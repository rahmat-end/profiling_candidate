// interface CandidateData {
    //     [key: string]: {
    //         variable: string
    //     }
    // }

    // interface MergedData {
    //     randomize: {
    //         [key: string]: {
    //         variable: string
    //         candidate_a: string
    //         candidate_b: string
    //         }
    //     }
    // }

    // // Function to shuffle object properties
    // const shuffleObjectProperties = (obj: any, randomOrder: number[]) => {
    //     const shuffledKeys = randomOrder.map((index) => Object.keys(obj)[index]);
    //     const shuffledObject: any = {};
    
    //     shuffledKeys.forEach((key, index) => {
    //     shuffledObject[key] = obj[shuffledKeys[index]];
    //     });
    
    //     return shuffledObject;
    // };

    // // Function to generate random order and store it in local storage
    // const generateAndStoreRandomOrder = (candidateA: CandidateData) => {
    //     const randomOrder: number[] = Array.from({ length: Object.keys(candidateA).length }, (_, i) => i);
    //     randomOrder.sort(() => Math.random() - 0.5);
    //     localStorage.setItem('randomOrder', JSON.stringify(randomOrder));
    // };

    // // Function to remove random order from local storage
    // const removeRandomOrderFromLocalStorage = () => {
    //     localStorage.removeItem('randomOrder');
    // };
  
    // function mergeCandidates(candidateA: CandidateData, candidateB: CandidateData): MergedData {
    //     // Check if the page is being reloaded
    //     const isReloading = window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD;

    //     // If reloading, remove random order from local storage
    //     if (isReloading) {
    //         removeRandomOrderFromLocalStorage();
    //     }

    //     // Generate a random order for object properties and store it in local storage if not present
    //     let randomOrder: number[] = JSON.parse(localStorage.getItem('randomOrder') || '[]');

    //     if (randomOrder.length === 0) {
    //         // Generate a new random order
    //         generateAndStoreRandomOrder(candidateA);
    //         // Retrieve the generated random order
    //         randomOrder = JSON.parse(localStorage.getItem('randomOrder') || '[]');
    //     }
    
    //     const mergedData: MergedData = {
    //         randomize: {},
    //     };
    
    //     // Shuffle properties of candidateA and candidateB using the stored random order
    //     const shuffledCandidateA = shuffleObjectProperties(candidateA, randomOrder);
    //     const shuffledCandidateB = shuffleObjectProperties(candidateB, randomOrder);
    
    //     for (const key in shuffledCandidateA) {
    //     if (shuffledCandidateA.hasOwnProperty(key) && shuffledCandidateB.hasOwnProperty(key)) {
    //         let variable: string;
    
    //         switch (key) {
    //         case 'dimensions1_medsos':
    //             variable = 'Dimensi 1 Media sosial (Konten)';
    //             break;
    //         case 'dimensions2_medsos':
    //             variable = 'Dimensi 2 Media sosial (Interaksi)';
    //             break;
    //         case 'dimensions1_campaign':
    //             variable = 'Dimensi 1 Conventional campaign (Konten)';
    //             break;
    //         case 'dimensions2_campaign':
    //             variable = 'Dimensi 2 Conventional campaign Blusukan';
    //             break;
    //         case 'ageism':
    //             variable = 'Ageism';
    //             break;
    //         case 'incumbency':
    //             variable = 'Incumbency';
    //             break;
    //         case 'education':
    //             variable = 'Educational Attainment';
    //             break;
    //         case 'party':
    //             variable = 'Party';
    //             break;
    //         default:
    //             variable = `Unknown Dimension (${key})`;
    //             break;
    //         }
    
    //         mergedData.randomize[key] = {
    //         variable,
    //         candidate_a: shuffledCandidateA[key].variable,
    //         candidate_b: shuffledCandidateB[key].variable,
    //         };
    //     }
    //     }
    
    //     return mergedData;
    // }