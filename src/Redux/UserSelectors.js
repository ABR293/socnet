import {createSelector} from "reselect";

const getUsers = (state) => {
    return state.usersPage.users;
};
export const getUsersList = (state) => {
    console.log('getUsers active');
    return getUsers(state).filter( users => true);
};
export const getUsersListSuper = createSelector(getUsers,
    (users) => {
        console.log('getUsersSuper active');
        return users.filter(u => true);
    })
/*export const getUsersListSuper = createSelector(getUsers,
    (users) => {
    console.log('getUsersSuper active');
    users.filter( u => true);
});*/

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
