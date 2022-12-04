export const initialstate={
    currentvalue:"0",
    operator:null,
    previousvalue:null,
};
export const handleNumber=(value,state)=>{
    if(state.currentvalue==="0"){
        return{
            currentvalue:`${value}`,
            previousvalue:`${state.previousvalue}`,
            operator:`${state.operator}`
        };
    }
    return{
        currentvalue:`${state.currentvalue}${value}`,

    };

};
export const handleEqual=(state)=>{
    
    console.log(state.operator,"from handle equal")
    const operator=state.operator;
    const previous=parseFloat(state.previousvalue);
    const current=parseFloat(state.currentvalue);
    console.log(previous,current,"previous and current ")
    switch(operator){
        case"+":
        return{
            currentvalue:`${previous+current}`,
            // ...resetState,
        };
        case"-":
        return{
            currentvalue:`${previous-current}`,
            // ...resetState,
        };
        case"*":
        return{
            currentvalue:`${previous*current}`,
            // ...resetState,
        };
        case"/":
        return{
            currentvalue:`${previous/current}`,
            // ...resetState,
        };
        default:
            return state;
    }
}
const Calc=(type,value,state)=>{
    // console.log(state,"from the calc")
    switch(type){
            case "number":
                return handleNumber(value,state);
            case "clear":
                return initialstate;
            case "posneg":
                return{
                    currentvalue:`${parseFloat(state.currentvalue)*-1}`

                };
            case "percentage":
                return{
                    currentvalue:`${parseFloat(state.currentvalue)*0.01}`
                };
            case "operator":
                return{
                    operator:value,
                    previousvalue:state.currentvalue,
                    currentvalue:"0",
                    
                }
            case "equal":
                return handleEqual(state)
            default:
                return state;
    }
}
export default Calc;