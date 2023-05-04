/**
 * convert a date from dd/mm/yyyy format in mm/dd/yyyy format
 * @param string
 * @return Date
 */
export function dateInputFormat( date: string)  {

    let inputDate=  date.split(' ');  
    let dateClains= inputDate[0].split("-");
    let day = dateClains[0];
    let month = dateClains[1];
    let year = dateClains[2];
    
    return new Date(month +"/"+day +"/"+ year );
}