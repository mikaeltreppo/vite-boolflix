
import { reactive } from 'vue';
export const store = reactive(
    {
        seriesList: [],
        filmList: [],
        search: '',
        loading: true
    });
  