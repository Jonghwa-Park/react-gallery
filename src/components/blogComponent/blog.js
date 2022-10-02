//<editor-fold desc="Description">
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBlogList} from "../../redux/action/blogAction";
import {Link} from "react-router-dom";

const Blog = () => {

    const blodData = useSelector((state) => state.blogReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        getBlogList().then(function (result) {
            dispatch(result)
        })
    }, [dispatch])

    const blogList = blodData.data ?? []
    return (
        <div>
            <div className="page-content">
                <div className="container">
                    <div className="pp-section pp-container-readable">
                        {
                            blogList && blogList.map((item) =>{
                                return(
                                    <article key ={item.id}className="pp-post">
                                        <Link to={`/blog/detail/${item.id}`}><img className="img-fluid" src={item.imgSrc} alt={item.title}/></Link>
                                        <header className="pp-post-header">
                                            <div className="pp-post-title"><Link to={`/blog/detail/${item.id}`} className="h4">{item.title}</Link></div>
                                            <div className="pp-post-meta">
                                                <ul>
                                                    <li><i className="fa fa-calendar-check-o" aria-hidden="true"></i><span>{item.mdfyDt}</span>
                                                    </li>
                                                    <li><i className="fa fa-tags" aria-hidden="true"></i>
                                                        <span>
                                                        {
                                                            item.content_types && item.content_types.map((type, i, row)=>{
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
                                                        href="#">Comments</a></li>
                                                </ul>
                                            </div>
                                        </header>
                                        <div className="pp-post-content">
                                            {item.content}
                                        </div>
                                        <div className="pp-post-read-more">
                                            <Link to={`/blog/detail/${item.id}`}>Read More</Link>
                                        </div>
                                    </article>

                                )
                            })
                        }
                        <div className="pp-pagination">
                            <ul>
                                <li><a href="#">← Previous</a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">Next →</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
//</editor-fold>