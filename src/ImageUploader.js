import React from "react";
import ImageUploading from "react-images-uploading";
import { ReactComponent as CancelIcon } from "./media/x.svg";
import { ReactComponent as GalleryAddIcon } from "./media/download.svg";

const ImageUploader = ({ images, onChange }) => {
  return (
    <div>
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={1}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper position-relative mt-2">
            <div
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
              className="upload-box rounded-2 d-flex flex-column align-items-center justify-content-center border"
            >
              <GalleryAddIcon className="mb-2" style={{ height: 30 }} />
              <p className="text-store-primary">Add a photo</p>
            </div>

            {imageList.map((image, index) => (
              <div
                key={index}
                className="image-item position-absolute top-0 start-0 end-0 bottom-0"
              >
                <img src={image.data_url} className="rounded-2" alt="" />
                <span
                  onClick={() => onImageRemove(index)}
                  className="remove-upload position-absolute top-0 right-0 translate-middle"
                >
                  <CancelIcon className="position-absolute top-50 start-50 translate-middle" />
                </span>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUploader;
