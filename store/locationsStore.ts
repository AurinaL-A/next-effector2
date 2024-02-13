import {getLocationsFx} from "@/api/locations"
import { createStore } from "effector";

export const locationsStore = createStore([]);

locationsStore.on(getLocationsFx.doneData,(state,location) => location)