import { useButtonContext } from "../../Store/ContextProvider";
import Form from "../Form/Form";
import classes from "./Header.module.css";

const Header = () => {
    const { modal, setModal } = useButtonContext()
    const blogBtnClick = () => {
        // setFormVisible(true);
        setModal(true);
    };
    return (
        <>
            <div className={classes.Header}>
                <h1>Blog website</h1>
                <button onClick={blogBtnClick}>Add New Blog</button>
                {modal && <Form />}
            </div>
        </>
    )
}

export default Header;