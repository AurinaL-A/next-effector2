import { getEpisodeFx } from "@/api/episode"; 
import { createStore } from "effector";

export const episodeStore = createStore([]);

episodeStore.on(getEpisodeFx.doneData,(state,episode) => episode)