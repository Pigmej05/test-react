const SET_REPOSITORY = 'SET_REPOSITORY ';
const SET_PAGE = "SET_PAGE";


let inicial = {
    entrance: false,
    items:[],
    pageSize: 10,
    totalPage: 0,
    currentPage: 1,
    };

const reduserRepository = (state = inicial, action) => {

    switch (action.type) {

        case  SET_REPOSITORY:
            return {
                ...state,
                items: action.repository.items,
                totalPage:action.repository.total_count,
                entrance: true
            }
        case SET_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        default:
            return state;
    }
}
export const setRepository = (repository) => {
    return {
        type: SET_REPOSITORY , repository
    }
};
export const setPage = (currentPage) => {
    return ({
        type: SET_PAGE, currentPage
    })
};


export default reduserRepository;