export const GMHIS_ENDPOINT = {
    // === Evaluation ===
    evacuation: {
        index: '/evacuations',
        create: '/evacuations',
        update: '/evacuations/${evacuationID}',
        retrieve: '/evacuations/${evacuationID}',
    },
    // === Cashier ===
    cashier: {
        index: '/cashiers',
        create: '/cashiers',
        update: '/cashiers/${cashierID}',
        retrieve: '/cashiers/${cashierID}',
    },
    // === Examen Complementary ===
     examenComplementary: {
        index: '/examen-complementaries',
        create: '/examen-complementaries',
        find: '/examen-complementaries/find',
        update: '/examen-complementaries/${examenComplementaryID}',
        retrieve: '/examen-complementaries/${examenComplementaryID}',
    }
}