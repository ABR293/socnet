import {createSelector} from "reselect";
import { AppStateType } from "./Store";

const getUsers = (state:AppStateType):Array<any> => {
    return state.usersPage.users;
};
export const getUsersList = (state:AppStateType):Array<any> => {
    return getUsers(state).filter( users => true);
};
export const getUsersListSuper = createSelector(getUsers,
    (users) => {
        return users.filter(u => true);
    });
export const getPageSize = (state:AppStateType):number => {
    return state.usersPage.pageSize;
};
export const getTotalUserCount = (state:AppStateType):number => {
    return state.usersPage.totalUserCount;
};
export const getCurrentPage = (state:AppStateType):number => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state:AppStateType):boolean => {
    return state.usersPage.isFetching;
};
export const getStatus = (state:AppStateType):string => {
    return state.usersPage.status;
};
export const getIsFollowing = (state:AppStateType):Array<any> => {
    return state.usersPage.isFollowing;
};
