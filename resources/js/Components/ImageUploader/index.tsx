import { elliptext } from "@/utils";
import React from "react";
import { FaTimes } from "react-icons/fa";
import ImageUploading from "react-images-uploading";

const ImageUploader = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 2;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg"]}
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        {imageList.length <= 1 ? (
                            <div
                                // style={isDragging ? { color: "red" } : null}
                                className="cursor-pointer hover:opacity-60 border-gray-300 rounded-md border-dashed border p-4 flex items-center justify-center min-h-[150px] w-full lg:max-w-[70%]"
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                <div className="flex flex-col gap-y-2 items-center justify-center">
                                    <span>Click or Drop here</span>
                                    <span>or</span>
                                    <span className="p-2 border border-primary-default rounded-md">
                                        Browse Images
                                    </span>
                                </div>
                            </div>
                        ) : null}
                        {imageList?.length ? (
                            <div>
                                <div className="flex flex-col items-center gap-y-2 rounded-md mt-2">
                                    {imageList.map((image, index) => (
                                        <div
                                            key={index}
                                            className="image-item w-full rounded-md group relative flex-row flex justify-between items-center border-gray-200 border p-2"
                                        >
                                            <div className="flex-row items-center flex">
                                                <img
                                                    src={image.data_url}
                                                    alt=""
                                                    className="w-20 object-cover h-12 cursor-pointer hover:opacity-40 rounded-md"
                                                />
                                                <span className="ml-2">
                                                    {elliptext(
                                                        image.file?.name
                                                    )}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    onImageRemove(index)
                                                }
                                                className=" hover:opacity-80  bg-red-500 text-white p-1 rounded-full"
                                            >
                                                <FaTimes />
                                            </button>
                                            {/* <div className="image-item__btn-wrapper">
                                                <button
                                                    onClick={() =>
                                                        onImageUpdate(index)
                                                    }
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        onImageRemove(index)
                                                    }
                                                >
                                                    Remove
                                                </button>
                                            </div> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
};

export default ImageUploader;
