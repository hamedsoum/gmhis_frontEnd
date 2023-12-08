export const GMHIS_ENDPOINT = {
    // === Invoice H ===
    invoiceH: {
        index: '/invoice-h',
        create: '/invoice-h',
        update: '/invoice-h/${invoiceHID}',
        retrieve: '/invoice-h/${invoiceHID}',
        find: '/invoice-h/${invoiceHID}/find',
    },
     // === Quotation ===
     quotation: {
        index: '/quotations',
        create: '/quotations',
        update: '/quotations/${quotationID}',
        retrieve: '/quotations/${quotationID}',
        find: '/quotations/find/${quotationID}',
    },
    // === hospitalization===
    hospitalization: {
        index: '/hospitalizations',
        create: '/hospitalizations',
        update: '/hospitalizations/${hospitalizationID}',
        addNurse: '/hospitalizations/${hospitalizationID}/nurse',
        close: '/hospitalizations/${hospitalizationID}/close',
        retrieve: '/hospitalizations/${hospitalizationID}',
        protocoles: '/hospitalizations/${hospitalizationID}/protocole',
        patient: '/hospitalizations/${patientID}/patient'

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