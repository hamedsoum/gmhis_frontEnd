import { permissions } from "../../../appData/permissions";

/**
   * check if user's permissions includes  a specific permission
   * @param menu 
   */
  export function can(user, menu ) {
    
    let menu_permission = permissions.menu_permission;

      if (user['isAdmin'] == 'Y') {
        return true;
      } else {
        return user['permissions'].includes((menu_permission[menu]).toString());
      }
    
  }
  