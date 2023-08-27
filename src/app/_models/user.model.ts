export interface User {
    id : number;
    firstName : string;
    lastName : string;
    username : string;
    email : string;
    phoneNumber : string;
    depot : string;
    role : string;
    roleIds : string;
    authorities : string;
    password : string;
    isActive : boolean;
    controllerAllDepot : boolean;
    isNonLocked : boolean;
    profileImage : string;
    passwordMustBeChange:boolean;
    facility : any;
}