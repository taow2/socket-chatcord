const users = [];

// Join user to chat, so add user to array
function userJoin(id, username, room) {
    const user = { id, username, room };

    users.push(user);

    return user;
}

// Get current user by the given id
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

// User leaves chat, so remove user from array
function userLeave(id) {

    // index will return -1 if the id is not found
    const index = users.findIndex(user => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Get room users
function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
}