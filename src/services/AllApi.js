import { Await } from "react-router-dom";
import Watchhistory from "../pages/Watchhistory";
import { commonApi } from "./commonApi";
import { serverURL } from "./serverURL";


// upload video

export const uploadVideo = async (reqBody) => {
    return await commonApi('POST', `${serverURL}/videos`, reqBody)
}

// get all videos 

export const getAllVideos = async () => {
    return await commonApi('GET', `${serverURL}/videos`, '')
}

// delete video from the all videos 

export const deleteVideo = async (id) => {
    return await commonApi('DELETE', `${serverURL}/videos/${id}`, {})
}

// watch history 

export const addWatchHistory = async (reqBody) => {
    return await commonApi('POST', `${serverURL}/history`, reqBody)
}

// get all history

export const getHistory = async () => {
    return await commonApi('GET', `${serverURL}/history`, {})
}

// delete history from Watchhistory by id

export const deleteHistory = async (id) => {
    return await commonApi('DELETE', `${serverURL}/history/${id}`, {})
}

// add category 

export const addCategory = async (reqBody) => {
    return await commonApi('POST', `${serverURL}/category`, reqBody)
}

// get all category 

export const getAllCategory = async () => {
    return await commonApi('GET', `${serverURL}/category`, "")
}

// delete Category

export const deleteCategory = async (id) => {
    return await commonApi('DELETE', `${serverURL}/category/${id}`, {})
}

// get video details by id

export const getAllVideosById = async (id) => {
    return await commonApi('GET', `${serverURL}/videos/${id}`, '')
}

// update category with video details

export const updateCategory = async(data,id)=>{
    return await commonApi('PUT', `${serverURL}/category/${id}`, data)
}