const UserModel = require('../models/user.modal');
const cacheUtil = require('../utils/cache.utils');
// import UserModel from "../models/user.modal"
// import cacheUtil from "../utils/cache.utils"

exports.createUser = (user) => {
    return UserModel.create(user);
}

exports.findUserByEmail = (email) => {
    return UserModel.findOne({
        where: {
            email: email
        }
    })
}

exports.findUserById = (id) => {
    return UserModel.findByPk(id);
}

exports.logoutUser = (token, exp) => {
    const now = new Date();
    const expire = new Date(exp * 1000);
    const milliseconds = expire.getTime() - now.getTime();
    /* ----------------------------- BlackList Token ---------------------------- */
    return cacheUtil.set(token, token, milliseconds);
}