import { useEffect, useState } from "react";
import { useButtonContext } from "../../Store/ContextProvider";


const ShowItem = () => {
    const { urlss, titless, blogss, showItem, setShowItem, setModal } = useButtonContext();
    const [showItemObj, setShowItemObj] = useState([]);
    const formObj = {
         urls: urlss,
         titles: titless,
         blogs : blogss
        }
    useEffect(() => {
        if(urlss && titless && blogss ){
            setShowItemObj((prev) => [...prev, formObj]);
        }
    }, [urlss, titless, blogss ]);
    const editBtn = () =>{
        setModal(true);
        // setUrl(urlss);
        setShowItem(false);
    }
    const deleteBtn =() => {
        setShowItem(false);
    }
    return (
        <>
        <p>TodoList</p>
        {showItem && <p>bjb</p>}
        {showItemObj.map((user, index) => (
            <div key={index}>
                <p>{index+1}</p>
                <p>{user.urls}</p>
                <p>{user.titles}</p>
                <p>{user.blogs}</p>
                <button onClick={editBtn}>Edit</button>
                <button onClick={deleteBtn}>delete</button>
            </div>
        ))}
        </>

    )
}

export default ShowItem;