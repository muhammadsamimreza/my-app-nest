const getToLocalStorage = () =>{
    const saveData = localStorage.getItem("installed")
    if(saveData){
        const getData = JSON.parse(saveData)
        return getData ;
    }else return []
}

const addLocalStorage = (id) =>{
    const preData = getToLocalStorage()
    if(preData.includes(id)){
        alert("Already Exists")
        return;
    }else{
        const alldata = [...preData, id]
        const strData = JSON.stringify(alldata)
        localStorage.setItem("installed", strData)
    }
}

const removedLocalStorage = (id) =>{
        const previousData = getToLocalStorage()
        const filter = previousData.filter(data=> data !== id)
        const strFilter = JSON.stringify(filter)
        localStorage.setItem("installed", strFilter)

}
export {addLocalStorage, getToLocalStorage, removedLocalStorage}