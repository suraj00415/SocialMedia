import {getUser,getUserFriends,addRemoveFriend} from "../controllers/users.js"
import {verifytoken} from "../middleware/auth.js"
import express from "express"

const router =express.Router();

// Read
router.get("/:id",verifytoken,getUser)
router.get("/:id/friend",verifytoken,getUserFriends)

// Update
router.patch("/:id/:friendId",verifytoken,addRemoveFriend)

export default router;