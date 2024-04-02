const initialState={
    users:[   
    // {id:1,name:"akram",email:"akramhmami11@gmail.com",age:19},
    // {id:2,name:"ali",email:"aliali11@gmail.com",age:18}
]}
const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case "Add_user":
            return {
                ...state,
                users: [...state.users, action.payload]
            };

        case "Delete_user":
            return {
                ...state,
                users: state.users.filter(u => u.id !== parseInt(action.payload))
            };

        case "Update_user":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === parseInt(action.payload.id)) {
                        return {
                            ...u,
                            name: action.payload.name,
                            email: action.payload.email,
                            age: action.payload.age
                        };
                    } else {
                        return u;
                    }
                })
            };

        default:
            return state;
    }
};

export default Reducer;

// const initialState={
//     users:[   
//     // {id:1,name:"akram",email:"akramhmami11@gmail.com",age:19},
//     // {id:2,name:"ali",email:"aliali11@gmail.com",age:18}
// ]}
// const Reducer=(state=initialState,action)=>{
//     switch(action.type){

//         case"Add_user":
//         return{...state,users:[...state.users,action.payload]};

//         case"Delete_user":
//         return{...state,users:[...state.users.filter((u)=>u.id!==parseInt(action.payload))]};

//         case"Update_user":
//         const uppdate=state.users.find((u)=>u.id===parseInt(action.payload.id))
//         if(uppdate){
//             uppdate.name=action.payload.name
//             uppdate.email=action.payload.email
//             uppdate.age=action.payload.age
//         }return state;
//         default:
//             return state
//     }
// }

// export default Reducer
