import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getBlogCommentsList, getBlogDetail, postBlogComment} from "../../redux/action/blogAction";
import { AiOutlineComment } from "react-icons/ai";
import moment from 'moment';

const BlogDetail = () => {
    const detail = useParams().detailId

    const blogData = useSelector((state) => state.blogReducer)
    const blogCommments = useSelector((state) => state.blogReducer)

    const dispatch = useDispatch()

    useEffect(()=>{
        getBlogDetail(detail).then(function(result){
            dispatch(result)
        })

        getBlogCommentsList(detail).then(function(result){
            dispatch(result)
        })

    }, [dispatch, detail])

    const blogDetail = blogData.detail ?? {}
    const blogCommentList = blogCommments.comments

    const initFields = {
        "firstName" : '',
        "lastName" : '',
        "_replyto" : '',
        "message" : '',
        "mdfyDt" : '',
        "originBlogId" : ''
    }

    const [fields, setFields] = useState(initFields)

    const handleChange = (event) =>{
        const {name, value} = event.target
        const newObj = {}
        newObj[name] = value
        newObj["mdfyDt"] = moment().format('YYYY-MM-DD HH:mm:ss');
        newObj["originBlogId"] = detail
        setFields({...fields, ...newObj})
    }



    const handleSubmit = async(event)  => {
        event.preventDefault()
        const newObj = {}
        setFields({...fields, ...newObj})
        postBlogComment(detail, fields).then(function(result){
            dispatch(result)
        })
    }

    return (
        <div>
            <div className="page-content">
                <div className="container">
                    <div className="pp-section pp-container-readable">
                        <div className="pp-post"><a className="h3" href="blog-post.html">{blogDetail.title}</a>
                            <div className="pp-post-meta mt-2">
                                <ul>
                                    <li><i className="fa fa-calendar-check-o" aria-hidden="true"></i><span>{blogDetail.mdfyDt}</span>
                                    </li>
                                    <li><i className="fa fa-tags" aria-hidden="true"></i>
                                        <span>
                                        {
                                            blogDetail && blogDetail.content_types?.map((type, i, row)=>{
                                                if(i+1 === row.length){
                                                    return(
                                                        <a key={i} href="#"><span>{type}</span></a>
                                                    )
                                                }else{
                                                    return(
                                                        <a key={i}  href="#"><span>{type}</span>, </a>
                                                    )
                                                }
                                            })
                                        }
                                        </span>
                                    </li>
                                    <li><i className="fa fa-comments" aria-hidden="true"></i><a
                                        href="#pp-comment">Comments</a></li>
                                    {blogDetail && blogDetail.adminYn === 'Y'? <li><i className="fa fa-user-circle" aria-hidden="true"></i><a href="#">Admin</a></li> : <div></div>}
                                </ul>
                            </div>
                            <img className="img-fluid mt-3" src={blogDetail.imgSrc} alt="Blog Image"/>
                        </div>
                        <div className="pp-blog-details">
                            {blogDetail.content}
                            <div className="pp-tags">
                                <div className="h6">Tags</div>
                                {blogDetail && blogDetail.tags?.map((tag) =>{
                                    return(
                                        <a className="badge badge-primary" href="#">{tag}</a>
                                    )
                                })}
                            </div>
                            <div className="pp-comments" id="pp-comment">
                                <div className="h2">Comments</div>
                                {blogCommentList&& blogCommentList?.filter((item) => item.originBlogId === detail).map((item) =>{
                                    return(
                                        <>
                                            <div className="media"><AiOutlineComment size="24"/>
                                                <div className="media-body" style={{marginLeft:'10px'}}>
                                                    <div className="h5 mt-0">{item.lastName +' '+ item.firstName}</div>
                                                    <p className="text-muted">{item.mdfyDt}</p>
                                                    <p>{item.message}</p>
                                                </div>
                                                <a href="#pp-drop-comment"><i className="fa fa-reply" aria-hidden="true"></i><span>Reply</span></a>
                                            </div>
                                        </>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                        <div className="pp-section"></div>
                        <div className="row" id="pp-drop-comment">
                            <div className="col">
                                <div className="h4 mb-3">Drop a Comment</div>
                                <form onSubmit={handleSubmit} method="POST">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 mb-3">
                                            <input className="mr-3 form-control" type="text" name="firstName"
                                                   placeholder="*First Name"
                                                   value={fields['firstName']}
                                                   onChange={handleChange}/>
                                        </div>
                                        <div className="col-md-6 col-sm-12 mb-3">
                                            <input className="form-control" type="text" name="lastName"
                                                   placeholder="*Last Name"
                                                   value={fields['lastName']}
                                                   onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input className="form-control" type="email" name="_replyto"
                                                   placeholder="*E-mail"
                                                   value={fields['_replyto']}
                                                   onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <textarea className="form-control" name="message"
                                                      placeholder="*Your Message"
                                                      value={fields['message']}
                                                      onChange={handleChange}>
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn btn-primary" type="submit">Post Comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;