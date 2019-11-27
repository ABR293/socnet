import {ProfileReducer} from './ProfileReducer';
import React from 'react';


let state = {
    status: '',
    isFetching: false,
    userId :4986,
    id: 4986, name: 'ADMIN!!', avatar: '', PostText: '', posts: [
        {id: 34522, name: 'sdsadas', message: "wfghcsfbzvddafvldmkvale;dkgjeg"},
        {id: 37867, name: 'rewe', message: "wthtbvsdrtarsteale;dkgjeg"},
        {id: 45452, name: 'sdsadas', message: "wfksadaifgyit7iyujvbcbrqergsdfkjsaldmkvale;dkgjeg"},
    ]
};


it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("Hello World");

    // 2. action
    let newState = ProfileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);

});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("Hello World");

    // 2. action
    let newState = ProfileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe("Hello World");
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = ProfileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = ProfileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});


