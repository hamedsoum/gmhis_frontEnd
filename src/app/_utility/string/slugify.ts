/**
 * slugify a text
 * @param string text
 */
export function slugify( text : string){

    return text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'');
}