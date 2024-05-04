import { useState } from "react";
import { useButtonContext } from "../../Store/ContextProvider";
// import Modal from "../UI/Modal";
import classes from "./Form.module.css";
import { createPortal } from "react-dom";


const overLay = document.getElementById("overLay");

const Form = () => {
    const {
        setUrlss,
        setTitless,
        setBlogss,
        setModal,
        setShowItem 
        // modal
    } = useButtonContext();

    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [blog, setBlog] = useState("");

    const urlHandler = (event) => {
        setUrl(event.target.value);
    }
    const titleHandler = (event) => {
        setTitle(event.target.value);
    }
    const blogHandler = (event) => {
        setBlog(event.target.value);
    }

    const saubmitHandler = (event) => {
        event.preventDefault();
        setUrlss(url);
        setTitless(title);
        setBlogss(blog);
        setShowItem(true);
        setModal(false)
        console.log(setUrlss);
        console.log(url);
    }

    return createPortal(
        <>
            <div className={classes.backdrop} onClick={() => setModal(false)}></div>
            <div className={classes.modelOverlay}>
                <form onSubmit={saubmitHandler}>
                    <div className={classes.coverAllLabelInput}>
                        <div className={classes.coverLaveInput}>
                            <label>Image Url:</label><br />
                            <input type="url" value={url} onChange={urlHandler} />
                        </div>
                        <div className={classes.coverLaveInput}>
                            <label>Title:</label><br />
                            <input type="text" value={title} onChange={titleHandler} />
                        </div>
                        <div className={classes.coverLaveInput}>
                            <label>Blog Description:</label><br />
                            <input type="text" value={blog} onChange={blogHandler} />
                        </div>
                    </div>
                    <div className={classes.btns}>
                        <button className={classes.postBlog} type="submit">Post Blog</button>
                        <button className={classes.close} onClick={() => setModal(false)}>Close</button>
                    </div>
                </form>
            </div>
        </>,
        overLay
    )
}

export default Form;