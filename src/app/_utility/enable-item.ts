/**
 * enable object from the DOM whithout refresh the page  after  enabling from the database
 * @param array array of objects
 * @param rowId row to enable
 */
export function enableItem( array : any, rowId : number){
    for (let i = 0; i < array.length; ++i) {
      
        if (array[i].id === rowId) {
            array[i].active = 'Y'; 
        }
    }
}