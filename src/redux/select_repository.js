export const getEntrance = (state)=>{
    return (
        state.repository.entrance
    )
};

export const getItems = (state)=>{
    return (
        state.repository.items
    )
};

export const getTotalPage = (state)=>{
    return (
        state.repository.totalPage
    )
};
export const getPageSize = (state)=>{
    return (
        state.repository.pageSize
    )
};
export const getCurrentPage = (state)=>{
    return (
        state.repository.currentPage
    )
};