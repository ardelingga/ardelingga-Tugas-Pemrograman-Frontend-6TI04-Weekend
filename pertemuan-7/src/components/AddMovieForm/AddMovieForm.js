import { nanoid } from "nanoid";
import { useState } from "react"
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css"

function AddMovieForm(props){
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");

    const {movies, setMovies} = props;

    const movieTypes = ["Action", "Drama", "Horror", "Comedy"];

    // Membuat state:isTitleError, isDateError
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isTypeError, setIsTypeError] = useState(false);
    const [isImageError, setIsImageError] = useState(false);

    function handleTitle(e){
        setTitle(e.target.value);
    }

    function handleDate(e){
        setDate(e.target.value)
    }
    
    function handleType(e){
        setType(e.target.value);
    }

    function handleImage(e){
        setImage(e.target.value)
    }

    function handleSubmit(e){
        // Cegah form agar tidak direfresh
        e.preventDefault();

        if(title === ""){
            setIsTitleError(true)
            return
        }else if(date === ""){
            setIsDateError(true)
        }else if(type === ""){
            setIsTypeError(true)
        }else if(image === ""){
            setIsImageError(true)
        }else{
            setIsTitleError(false)
            setIsDateError(false)
            setIsTypeError(false)
            setIsImageError(false)

            const movie = {
                id: nanoid(),
                title: title,
                year: date,
                type: type,
                poster: image
            }
            
            setMovies([...movies, movie]);
            // console.log(type);

            setTitle("")
            setDate("")
            setType("")
            setImage("")
        }
    }

    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__right}>
                    <div className={styles.form__container}></div>
                </div>
                <div className={styles.form__left}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <form onSubmit={handleSubmit}>
                        <p>Title</p>
                        <input id="title" value={title} onChange={handleTitle} className={styles.form__input} type="text" />
                        {isTitleError && <Alert>Title Wajib Diisi</Alert> }
                        <br /><br />

                        <p>Year</p>
                        <input id="date" value={date} onChange={handleDate} className={styles.form__input} type="number" />
                        {isDateError && <Alert> Date Wajib Diisi </Alert>}
                        <br /><br />
                        
                        <p>Type</p>
                        <select name="type" id="type" onChange={handleType} className={styles.form__input}>
                            <option value="none">Select Item</option>
                            {
                                movieTypes.map((type) => {
                                    return <option key={type} value={type}>{type}</option>
                                })
                            }
                        </select>
                        {isTypeError && <Alert>Type Wajib Diisi</Alert> }
                        <br /><br />

                        <p>Image</p>
                        <input id="image" value={image} onChange={handleImage} className={styles.form__input} type="text" placeholder="Input URL Image"/>
                        {isImageError && <Alert>Image Wajib Diisi</Alert> }
                        <br /><br />

                        <button className={styles.form__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm