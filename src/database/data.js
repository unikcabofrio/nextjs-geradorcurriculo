const dbArray = [{}]


export function Select(keyFilter){
    return dbArray.map(element=>{
        if(keyFilter){
            return element[keyFilter]
        }
        return element
    })
}

export function Insert(value,key){
    dbArray[0][key] = value
}

export function Remove(key){
    delete dbArray[0][key]
}