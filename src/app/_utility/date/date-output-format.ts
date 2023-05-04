/**
 * 
 * @param date 
 * @return string
 */
export function dateOutputFormat(date:  Date) : string {
    
    let newDate = new Date(date);
    let day =  ("0"+ newDate.getDate()).slice(-2);
    let month = ("0"+ (newDate.getMonth() + 1) ).slice(-2);
    let year = newDate.getFullYear();
   
    return  day+'-'+ month+'-'+year;
}