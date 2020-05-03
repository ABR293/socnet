import {createSelector} from "reselect";
import { AppStateType } from "./Store";

const getUsers = (state:AppStateType) => {
    return state.usersPage.users;
};
export const getUsersList = (state:AppStateType) => {
    return getUsers(state).filter( users => true);
};
export const getUsersListSuper = createSelector(getUsers,
    (users) => {
        return users.filter(u => true);
    });
export const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageSize;
};
export const getTotalUserCount = (state:AppStateType) => {
    return state.usersPage.totalUserCount;
};
export const getCurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state:AppStateType) => {
    return state.usersPage.isFetching;
};
export const getStatus = (state:AppStateType) => {
    return state.usersPage.status;
};
export const getIsFollowing = (state:AppStateType) => {
    return state.usersPage.isFollowing;
};
