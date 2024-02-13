import api from "./axiosClient"
import { createEffect } from "effector" /*функция для создания эффектов(операции с запросами к API)*/

/*получаем эпизод*/
export const getEpisodeFx = createEffect( async () => {
    try{
        const response = await api.get("episode");
        return response.data.results;
    } catch(error){
        throw error;
    }
})