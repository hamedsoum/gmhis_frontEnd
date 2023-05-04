/**
 * delete a row from the DOM whithout refresh the page  after  deleting from the database
 * @param array array of objects
 * @param rowId row to delete
 */
export function deleteRow( array : any, rowId : number){
    for (let i = 0; i < array.length; ++i) {
      
        if (array[i].id === rowId) {
            array.splice(i,1);
        }
    }
}