import axios from "axios";

export const getBlogList = async () =>{
    const blogData = await axios.get('http://localhost:5000/blogList')
    return{
        type:'GET_BLOG_LIST',
        payload : blogData.data
    }
}

export const getBlogDetail = async(detailId) =>{
    const blogDetail = await axios.get(`http://localhost:5000/blogList/${detailId}`)
    return{
        type:'GET_BLOG_DETAIL',
        payload : blogDetail.data
    }
}

export const getBlogCommentsList = async(detailId) =>{
    const blogCommentData = await axios.get(`http://localhost:5000/blogCommentList`)
    return{
        type:'GET_BLOG_COMMENT_LIST',
        payload : blogCommentData.data
    }
}


export const postBlogComment = async(detailId, fields) =>{
    console.log(`fields : ${JSON.stringify(fields)}`)
    await  axios.post(`http://localhost:5000/blogCommentList`, fields)
    return{
        type:'POST_BLOG_COMMENT',
        payload : fields
    }
}