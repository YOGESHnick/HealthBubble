import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend 
} from "../contollers/users.js";
import { verifyToken } from "../middleware/auth.js";