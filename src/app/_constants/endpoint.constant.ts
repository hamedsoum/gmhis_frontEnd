export const GMHIS_ENDPOINT = {

     // === Hospitalization Request ===
     quotation: {
        index: '/quotation',
        create: '/quotation',
        update: '/quotation/${quotationID}',
        retrieve: '/quotation/${quotationID}',
    },

    // === Hospitalization Request ===
    hospitalizationRequest: {
        index: '/hospitalization-request',
        create: '/hospitalization-request',
        update: '/hospitalization-request/${hospitalizationRequestID}',
        retrieve: '/hospitalization-request/${hospitalizationRequestID}',
    },

      // === Death ===
      death: {
        index: '/deaths',
        create: '/deaths',
        update: '/deaths/${deathID}',
        retrieve: '/deaths/${deathID}',
    },

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