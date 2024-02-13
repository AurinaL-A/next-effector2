import api from "./axiosClient"
import { createEffect } from "effector" /*функция для создания эффектов(операции с запросами к API)*/

/*получаем локацию*/
export const getLocationsFx = createEffect( async () => {
    try{
        const response = await api.get("location");
        return response.data.results;
    } catch(error){
        throw error;
    }
})