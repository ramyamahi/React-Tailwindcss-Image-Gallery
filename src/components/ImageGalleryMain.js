import React, {useState, useEffect} from "react";
import ImageGallery from "./ImageGallery";

const CLIENT_ID = process.env.REACT_APP_UNSPLASH_CLIENT_ID 
const url = `https://api.unsplash.com/photos/?client_id=${CLIENT_ID}`;

function ImageGalleryMain() {
    const [ loading, setLoading ] = useState(false);
    const [ images, setImages ] = useState([]);

    const ImageList = async () => {
        
        setLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            setImages(data)
            setLoading(false)
        } catch (error) {
            setLoading(true);
        }
    }

    useEffect(() => {
        ImageList()
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    } 
    if(images.length === 0 ) {
        return <h1>No images</h1>
    } 
    return <ImageGallery images={images} />    
}

export default ImageGalleryMain;