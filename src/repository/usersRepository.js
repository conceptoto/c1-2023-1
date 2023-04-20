import dataset from '../dataset/users_info.json'

export default function getUsersFromDataset () {
    return dataset
}

export function getUsersByNameAsc (name) {

    //filtro por nombre
    let users = getUsersFromDataset()
    let filteredbyname = users.filter((user) => user.name.toLowerCase().includes(name))
    //si no hay usuarios por ese nombre termino con codigo -1
    if(filtered.length == 0){
        return -1
    }
    //si hay filtro por estado
    let filteredbystatus = filteredbyname.filter((user) => user.isActive.toLowerCase() == true)
    //retorno ordenado por edad
    return filteredbystatus.sort((user_1, user_2) => (user_1.age <= user_2.age) ? 1 : (user_1.age > user_2.age) ? -1:0);
}