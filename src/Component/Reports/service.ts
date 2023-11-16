export interface istoreReport{
    id:string,
    image:string,
    state:string,
    lga:string,
    landmark:string,
    age:string,
    color:string,
    lang:string,
    height:string,
    found:boolean,
    reporter:string,
    sex:string,
    name:string
}
export interface iSuggestionReport{
    id:string
    state:string,
    lga:string,
    landmark:string,
    sugestion:string,
    relation:string,
    name:string
}
let store:istoreReport[] =[]
const suggestion:iSuggestionReport[] = []

export const saveReportToStorage = (detail:istoreReport)=>{
    store.push(detail)
    const storeStringified  = JSON.stringify(store)
    localStorage.setItem("report",storeStringified)
}
export const saveSuggestionToStorage = (detail:iSuggestionReport)=>{
    suggestion.push(detail)
    console.log(suggestion)
    const storeStringified  = JSON.stringify(suggestion)
    localStorage.setItem("suggestion",storeStringified)
}