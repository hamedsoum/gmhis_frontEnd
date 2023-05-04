
export const permissions = {
    
    //define menu permission
    menu_permission: {

        //  Home
        accessHomePage: 100,

        // home Module
        accessHomeModule: 200,

        //patient
        createPatient: 300,
        listPatient: 301,
        updatePatient: 302,
        printPatient: 303,
        editPatient: 304,
        tagPatient: 305,
        searchPatient: 306,

        //User module
        accessUserModule: 400,

        //user
        createUser: 500,
        listUser: 501,
        updateUser: 502,
        enableUser: 503,
        disableUser: 504,
        searchUser: 505,

        // role
        createRole: 600,
        listRole: 601,
        updateRole: 602,
        enableRole: 603,
        disableRole: 604,
        searchRole: 605,

        // permission
        createPermission: 700,
        listPermission: 701,
        updatePermission: 703,
        enablePermission: 704,
        disablePermission: 705,

        //admission
        createAdmission: 800,
        listAdmission: 801,
        updateAdmission: 802,
        searchAdmission: 803,
        deleteAdmission: 804,
        editAdmission: 805,
        printAdmission: 806,

        //admission
        createInvoice: 900,
        listInvoice: 901,
        updateInvoice: 902,
        deleteInvoice: 903,
        collectInvoice: 904,
        editInvoice: 905,
        printInvoice: 906,
        searchInvoice: 907,

        listInwaitingRoom: 1000,
        searchInwaitingRoom: 1001,

        //appointment
        createAppointment: 1100,
        listAppointment: 1101,
        updateAppointment: 1102,
        deleteAppointment: 1103,
        printAppointment: 1106,
        editAppointment: 1105,

        // setting
        accessSetting: 1200,
        accessApplicationSetting: 1201,
        accessGeneralSetting: 1201,

        // act menu
        accessActMenu: 1300,

        // act category
        createActCategory: 1400,
        listActCategory: 1401,
        updateActCategory: 1402,
        enableActCategory: 1403,
        disableActCategory: 1404,
        searchActCategory: 1405,

        // act code
        createActCode: 1500,
        listActCode: 1501,
        updateActCode: 1502,
        enableActCode: 1503,
        disableActCode: 1504,
        searchActCode: 1505,

        // act family
        createActFamily: 1600,
        listActFamily: 1601,
        updateActFamily: 1602,
        enableActFamily: 1603,
        disableActFamily: 1604,
        searchActFamily: 1605,

        // act
        createAct: 1700,
        listAct: 1701,
        updateAct: 1702,
        enableAct: 1703,
        disableAct: 1704,
        searchAct: 1705,

        // antecedent menu
        accessAntecedentMenu: 1800,

        // antecedent family
        createAntecedentFamily: 1900,
        listAntecedentFamily: 1901,
        updateAntecedentFamily: 1902,
        enableAntecedentFamily: 1903,
        disableAntecedentFamily: 1904,
        searchAntecedentFamily: 1905,

        // antecedent
        createAntecedent: 2000,
        listAntecedent: 2001,
        updateAntecedent: 2002,
        enableAntecedent: 2003,
        disableAntecedent: 2004,
        searchAntecedent: 2005,

        // insurance menu
        accessInsuranceMenu: 2100,

        // insurance
        createInsurance: 2200,
        listInsurance: 2201,
        updateInsurance: 2202,
        enableInsurance: 2203,
        disableInsurance: 2204,
        searchInsurance: 2205,

        // insurance subscriber
        createInsuranceSubscriber: 2300,
        listInsuranceSubscriber: 2301,
        updateInsuranceSubscriber: 2302,
        enableInsuranceSubscriber: 2303,
        disableInsuranceSubscriber: 2304,
        searchInsuranceSubscriber: 2305,

        // check up menu
        accesCheckUpManu: 2400,

        // check up
        createCheckUp: 2401,
        listCheckUp: 2402,
        updateCheckUp: 2403,
        enableCheckUp: 2404,
        disableCheckUp: 2405,
        searchCheckUp: 2406,

        //  cash register menu
        // 	accessCashRegisterMenu : 2500,

        // cash register
        createCashRegister: 2600,
        listCashRegister: 2601,
        updateCashRegister: 2602,
        enableCashRegister: 2603,
        disableCashRegister: 2604,
        searchCashRegister: 2605,

        // cashier menu
        accessCashierMenu: 2700,

        // cashier
        createCashier: 2800,
        listCashier: 2801,
        updateCashier: 2802,
        enableCashier: 2803,
        disableCashier: 2804,
        searchCashier: 2805,

        // constant menu
        accessConstantMenu: 2900,

        // constant 
        createConstant: 3000,
        listConstant: 3001,
        updateConstant: 3002,
        enableConstant: 3003,
        disableConstant: 3004,
        searchConstant: 3005,

        // constant group
        createConstantGroup: 3100,
        listConstantGroup: 3101,
        updateConstantGroup: 3102,
        enableConstantGroup: 3103,
        disableConstantGroup: 3104,
        searchConstantGroup: 3105,

        // convention menu 
        accessConventionMenu: 3200,

        // convention
        createConvention: 3300,
        listConvention: 3301,
        updateConvention: 3302,
        enableConvention: 3303,
        disableConvention: 3304,
        searchConvention: 3305,

        // document type menu 
        accessDocumentTypeMenu: 3400,

        // certificat type 
        createCertificateType: 3500,
        listCertificateType: 3501,
        updateCertificateType: 3502,
        enableCertificateType: 3503,
        disableCertificateType: 3504,
        searchCertificateType: 3505,

        // mail type 
        createMailType: 3600,
        listMailType: 3601,
        updateMailType: 3602,
        enableMailType: 3603,
        disableMailType: 3604,
        searchMailType: 3605,

        // precription type 
        createPrescriptionType: 3700,
        listPrescriptionType: 3701,
        updatePrescriptionType: 3702,
        enablePrescriptionType: 3703,
        disablePrescriptionType: 3704,
        searchPrescriptionType: 3705,

        // CRO type 
        listCroType: 3801,
        updateCroType: 3802,
        enableCroType: 3803,
        disableCroType: 3804,
        searchCroType: 3805,

        // CRO family 
        createCroFamily: 3900,
        listCroFamily: 3901,
        updateCroFamily: 3902,
        enableCroFamily: 3903,
        disableCroFamily: 3904,
        searchCroFamily: 3905,

        // facility menu 
        accessFacilityMenu: 4000,

        // facility 
        createFacility: 4100,
        listFacility: 4101,
        updateFacility: 4102,
        enableFacility: 4103,
        disableFacility: 4104,
        searchFacility: 4105,

        // pathology menu 
        accessPathologyMenu: 4200,

        // pathology 
        createPathology: 4300,
        listPathology: 4301,
        updatePathology: 4302,
        enablePathology: 4303,
        disablePathology: 4304,
        searchPathology: 4305,

        // practician menu 

        accessPracticianMenu: 4400,

        // parctician 
        createPractician: 4500,
        listPractician: 4501,
        updatePractician: 4502,
        enablePractician: 4503,
        disablePractician: 4504,
        searchPractician: 4505,

        // waiting room menu 
        accessWaitingRoomMenu: 4600,

        // waiting room 
        createWaitingRoom: 4700,
        listWaitingRoom: 4701,
        updateWaitingRoom: 4702,
        enableWaitingRoom: 4703,
        disableWaitingRoom: 4704,
        searchWaitingRoom: 4705,

        // service menu 
        accessServiceMenu: 4800,

        // service 
        createService: 4900,
        listService: 4901,
        updateService: 4902,
        enableService: 4903,
        disableService: 4904,
        searchService: 4905,

        // speciality menu 
        accessSpecialityMenu: 5000,

        // speciality 
        createSpeciality: 5100,
        listSpeciality: 5101,
        updateSpeciality: 5102,
        enableSpeciality: 5103,
        disableSpeciality: 5104,
        searchSpeciality: 5105,

        // unit of measure menu 
        accessUnitOfMeasureMenu: 5200,

        // unit of measure 
        createUnitOfMeasure: 5300,
        listUnitOfMeasure: 5301,
        updateUnitOfMeasure: 5302,
        enableUnitOfMeasure: 5303,
        disableUnitOfMeasure: 5304,
        searchUnitOfMeasure: 5305,
    }
}