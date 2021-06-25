import React from "react";

const ImageGallery = ({images}) => {
    return (
        <React.Fragment>
            <h1 className="text-indigo-600 text-xl text-center my-8 font-headline">Image Gallery</h1>
            <div className="grid grid-cols-3 gap-x-1 gap-y-2 justify-center m-auto w-7/12">
                {images.map((image) => {
                    return (
                        <React.Fragment key={image.id}>
                            <img src={image.urls.raw} className="object-cover rounded w-60 h-48" alt={image.alt_description}/>
                        </React.Fragment>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default ImageGallery;