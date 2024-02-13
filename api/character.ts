import api from "./axiosClient"
import { createEffect } from "effector" /*функция для создания эффектов(операции с запросами к API)*/

/*получаем всех персонажей*/
export const getCharacterFx = createEffect( async () => {
    try{
        const response = await api.get("character");
        return response.data.results;
    } catch(error){
        throw error;
    }
})