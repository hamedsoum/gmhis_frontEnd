export class Utils {

    private constructor(){}

     public static notNull(arg: any, varName:string):void {
        console.log(arg);
        if(arg == null || arg == undefined) {
            throw new Error(`${varName} must not be null`);
        }
    }
}