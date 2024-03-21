import { IoIosImages } from "react-icons/io";
import { categories } from "@data";
import { BiTrash } from "react-icons/bi";

import "@styles/Form.scss";

const Form = ({ type, work, setWork }) => {
  const handleUploadPhotos = (e) => {
    const newPhotos = e.target.files;
    setWork((prevWork) => {
      return { ...prevWork, photos: [...prevWork.photos, ...newPhotos] };
    });
  };
  const handleRemovePhoto = (indexToRemove) => {
    setWork((prevWork) => {
      return {
        ...prevWork,
        photos: prevWork.photos.filter((_, index) => index !== indexToRemove),
      };
    });
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setWork((prevWork) => {
  //     return {
  //       ...prevWork,
  //       [name]: value,
  //     };
  //   });
  // };

  return (
    <div className="form">
      <h1>{type} Your Work</h1>
      <form>
        <h3>Which if these categories best describe your work</h3>
        <div className="category-list">
          {categories?.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <h3>Add photos of your work</h3>
        {work.photos.length < 1 && (
          <div className="photos">
            <input
              id="image"
              type="file"
              style={{ display: "none" }}
              accpet="image/*"
              onChange={handleUploadPhotos}
              multiple
            />
            <label htmlFor="image" className="alone">
              <div className="icon">
                <IoIosImages />
              </div>
              <p>Upload from your device</p>
            </label>
          </div>
        )}
        {work?.photos.length > 0 && (
          <div>
            {work?.photos?.map((photos, index) => {
              <div className="photo">
                {photos instanceof Object ? (
                  <img src={URL.createObjectURL(photo)} alt="work" />
                ) : (
                  <img src={photo} alt="work" />
                )}
                <button type="button" onClick={handleRemovePhoto(index)}>
                  <BiTrash />
                </button>
              </div>;
            })}
            <input
              id="image"
              type="file"
              style={{ display: "none" }}
              accpet="image/*"
              onChange={handleUploadPhotos}
              multiple
            />
            <label htmlFor="image" className="together">
              <div className="icon">
                <IoIosImages />
              </div>
              <p>Upload from your device</p>
            </label>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
