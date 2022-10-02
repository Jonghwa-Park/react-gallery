import Main from "./components/mainComponent/main";
import Header from "./components/headerCompoent/header";
import Footer from "./components/footerComponent/footer";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Detail from "./components/detailComponent/detail";
import About from "./components/aboutComponent/about";
import Contact from "./components/contactComponent/contact";
import Blog from "./components/blogComponent/blog";
import BlogDetail from "./components/blogComponent/blogDetail";

function App() {
    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/index' element={<Main/>}/>
                    <Route path='/detail/:detailId' element={<Detail/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/blog/detail/:detailId' element={<BlogDetail/>}/>

                </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
