/**
 * replace text patient and practician variable with real data
 * @param text string
 * @param patient object
 * @param practician object
 */
import { environment } from "src/environments/environment";
import { slugify } from "./slugify";
import { documentTypes} from './../../../appData/docTypeVariables';

export function replaceDocVarialbles(text: string, patient: object, practician: object) {

    let variables = documentTypes.variables;

    // varaible patient
    variables.patient['Nom du patient'] = patient['firstName'] + ' ' + patient['maidenName'] + ' ' + patient['lastName'];
    variables.patient['Numero patient'] = patient['patientExternalId'];
    variables.patient['Numero CNAM du Patient'] = patient['cnamNumber'];
    variables.patient['Sexe du patient'] = patient['gender'];
    variables.patient['Civilité du patient'] = patient['civility'];
    variables.patient['Date de naissance du patient'] = patient['birthdate'];
    variables.patient['Profession du patient'] = patient['profession'];
    variables.patient['Situation matrimoniale'] = patient['maritalStatus'];
    variables.patient['Nombre d\'enfants'] = patient['numberOfChildren'];
    variables.patient['Addresse du patient'] = patient['address'];
    variables.patient['Ville'] = patient['city'];
    variables.patient['Pays'] = patient['country'];
    variables.patient['Contact'] = patient['cellPhone1'];
    variables.patient['Email'] = patient['email'];
    variables.patient['Numéro de carte d\'identité'] = patient['idCardNumber'];
    variables.patient['Nom de la mère du patient'] = patient['motherFirst_name'] + ' ' + patient['motherMaidenName'] + ' ' + patient['motherLastName']

    //variable practician
    variables.practician['Nom du praticien'] = practician['firstName'] + ' ' + practician['lastName'];
    variables.practician['Numero d\'ordre du praticien'] = practician["practicianNumber"];
    variables.practician['Contact'] = practician["phoneContact"];
    variables.practician['Email'] = practician["email"];

    for (let index = 0; index < Object.keys(variables.patient).length; index++) {
        const element = '@@@-' + slugify(Object.keys(variables.patient)[index]) + '-';
        text = text.split(element).join(variables.patient[Object.keys(variables.patient)[index]]);
    }

    for (let index = 0; index < Object.keys(variables.practician).length; index++) {
        const element = '@@@-' + slugify(Object.keys(variables.practician)[index]) + '-';
        text = text.replace(element, variables.practician[Object.keys(variables.practician)[index]])
        text= text.split(element).join(variables.practician[Object.keys(variables.practician)[index]]);
    }

    return text;
}