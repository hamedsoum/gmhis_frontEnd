// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080',
  baseUrl2: 'http://localhost:8080',
  documentFooter: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  logo: 'assets/img/medical-logo-design.jpeg',
  devise : 'Fcfa',
  
  patients : [{
    id: 1,
    address: "koumassi grand marché",
    civility: "Mr",
    cnamNumber: "7854123695874",
    contact1: "123456789",
    correspondant: "kone tresor",
    correspondantCellPhone: "123456789",
    country: 1,
    city: 1,
    birthDate: "22-10-1992",
    email: "kone29@gmail.com",
    emergencyContact1: "123456789",
    emergencyContact2: "123456789",
    familySituation: "d",
    firstName: "kone",
    maidenName: "Kamara",
    contact2: "123456789",
    idCardNumber: "C 12 34 56 789",
    idCardType: "i",
    lastName: "djeneba",
    motherFirstName: "maman kone ",
    motherLastName: 'djeneba',
    motherProfession: "commerçante",
    numberOfChildren: 0,
    profession: "agent immobilier",
    gender: "F",
    patientExternalId: 'PT-012-45678'
  }],

  admissions : [ {
    'time': { hour: 10, minute: 15, second: 58 },
    'patientExternalId': 'PT-012-12345',
    'name': 'Dabre '+ " " + 'Adjaratou',
    'admissionDate':'2020-12-17',
    'patientId': 1,
    'serviceId': 1,
    'actId': 1,
    'doctorId': 2,
    'id': 1
  }],
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
