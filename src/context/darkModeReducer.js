const DarkModeReducer =(state, action) =>{
    switch(action.type){
        case "TOOGLE" :{
            return{
                darkMode: !state.darkMode,
            }
        }
        default:
            return state;
    }
}

export default DarkModeReducer