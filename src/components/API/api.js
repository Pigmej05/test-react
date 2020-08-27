import axios from "axios";
import {setRepository} from "../../redux/app_reducer";


export const getRepository = (name = "stars",page, perPage=10) => {
    if (name === "") {
        name = "stars"
    }
    return async (dispatch) => {
        await axios.get(`https://api.github.com/search/repositories?q=${name}&sort=stars&page=${page}&per_page=${perPage}`).then(response => {
            dispatch(setRepository(response.data))
        });
    }
}
