import { useContext, useState } from "react";
import "./editUserModal.css";
import { AuthContext, UserContext } from "../../../index";
export const EditUserModal = ({ user, show, onClose }) => {
  // console.log(user);
  //Contexts
  const { editUserHandler } = useContext(UserContext);
  const { token } = useContext(AuthContext);

  //state variable
  const [updatedUser, setUpdatedUser] = useState(user);
  console.log(updatedUser, "user details from edit modal initial");

  // const token = localStorage.getItem("token");
  const handleUpdateUserOnSubmit = (e, token, updatedUser) => {
    e.preventDefault();
    console.log(updatedUser, "inside handle update user");
    editUserHandler(token, updatedUser);
    onClose();
  };
  const handleChangeUserImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "iamge/*";
    input.onchange = (e) => {
      const image = e.target.files[0];
      const imageName = e.target.files[0].name;
      const imageURL = URL.createObjectURL(image);

      setUpdatedUser((pre) => ({
        ...pre,
        avatar: imageURL,
      }));
    };
    input.click();
  };
  if (!show) {
    return null;
  } else {
    return (
      <>
        <div className="edit-modal-container" onClick={onClose}>
          <div
            className="edit-modal-form-container"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="edit-modal-heading">Edit Profile</p>

            <form
              className="edit-modal-form"
              onSubmit={(e) => handleUpdateUserOnSubmit(e, token, updatedUser)}
            >
              <div className="edit-modal-profile">
                <img src={updatedUser.avatar} alt={updatedUser.username} />
                <div>
                  <p className="edit-modal-username">{updatedUser.username}</p>
                  <p
                    className="edit-modal-change-profile-pic-link"
                    onClick={handleChangeUserImage}
                  >
                    Change profile Photo
                  </p>
                </div>
              </div>
              <div>
                <label className="edit-modal-label">Website</label>
                <input
                  value={updatedUser.website}
                  className="edit-modal-input"
                  onChange={(e) =>
                    setUpdatedUser((pre) => ({
                      ...pre,
                      website: e.target.value,
                    }))
                  }
                ></input>
              </div>
              <div>
                <label className="edit-modal-label">Bio</label>
                <textarea
                  rows="5"
                  value={updatedUser.bio}
                  onChange={(e) =>
                    setUpdatedUser((pre) => ({
                      ...pre,
                      bio: e.target.value,
                    }))
                  }
                  className="edit-modal-input"
                ></textarea>
              </div>
              <button type="submit" className="update-btn">
                Update
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
};
