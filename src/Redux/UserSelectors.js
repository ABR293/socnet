export const getUsersList = (state) => {
    return state.usersPage.users;
};
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount;
};
export const getCurentPage = (state) => {
    return state.usersPage.curentPage;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getStatus = (state) => {
    return state.usersPage.status;
};
export const getIsFollowing = (state) => {
    return state.usersPage.isFollowing;
};
