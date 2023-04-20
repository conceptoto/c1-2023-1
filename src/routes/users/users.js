import getUsersFromDataset from "../../repository/usersRepository";
import { getUsersByNameAsc } from "../../repository/usersRepository";

export default function getUsersByNameAsc(ctx){
    ctx.body = getUsersByNameAsc(ctx.params.name)
    if(ctx.body == -1){
        ctx.status = 404
        ctx.body = {message: 'no se encuentra usuario activo por este nombre'}
        return ctx
    }
    ctx.status = 200
    return ctx
}