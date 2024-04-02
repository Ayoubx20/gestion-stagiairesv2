export const AjouterPersAction=(pers)=>{ 
    return{type:"Add_user",payload:pers} 
   } 
   export const UpdatePersAction=(pers)=>{ 
    return{type:"Update_user",payload:pers} 
   } 
   export const DeleltePersAction=(id)=>{ 
    return{type:"Delete_user",payload:id} 
   } 
   // ./confi/action.js

// Define action types
export const UPDATE_USER_LIST = 'UPDATE_USER_LIST';

export const updateUserListAction = (users) => {
  return {
    type: 'UPDATE_USER_LIST',
    payload: users,
  };
};
// Action to delete a user
export const deleteUserAction = (userId) => {
  return {
    type: 'DELETE_USER',
    payload: userId,
  };
};
