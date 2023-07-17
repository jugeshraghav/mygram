//react-hooks imports
import { useContext, useState } from "react";

//style imports
import "./editUserModal.css";

//context imports
import { AuthContext, UserContext } from "../../../index";
import { AiOutlineClose, AiOutlineUpload, AiFillEdit } from "react-icons/ai";
import { Avatars } from "../../assets/Avatars";

export const EditUserModal = ({ user, show, onClose }) => {
  //handlers and variables from Contexts
  const { editUserHandler } = useContext(UserContext);
  const { token } = useContext(AuthContext);

  //state variable
  const [updatedUser, setUpdatedUser] = useState(user);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showSelectContainer, setShowSelectContainer] = useState(false);

  //handlers
  const handleUpdateUserOnSubmit = (e, token, updatedUser) => {
    e.preventDefault();
    editUserHandler(token, updatedUser);
    onClose();
  };
  const handleChangeUserImage = () => {
    setShowAvatarModal(false);
    setShowSelectContainer(false);
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const image = e.target.files[0];
      const imageURL = URL.createObjectURL(image);

      setUpdatedUser((pre) => ({
        ...pre,
        avatar: imageURL,
      }));
    };
    input.click();
  };
  const handleSetAvatar = (e, avatar) => {
    e.stopPropagation();
    setShowAvatarModal(false);
    setShowSelectContainer(false);
    setUpdatedUser((pre) => ({ ...pre, avatar: avatar }));
  };

  /*******EDIT USER MODAL************/
  if (!show) {
    return null;
  } else {
    return (
      <>
        <div
          className="edit-modal-container"
          onClick={() => {
            onClose();
            setShowAvatarModal(false);
            setShowSelectContainer(false);
          }}
        >
          <div
            className="edit-modal-form-container"
            onClick={(e) => {
              e.stopPropagation();
              setShowAvatarModal(false);
              setShowSelectContainer(false);
            }}
          >
            <p className="edit-modal-heading">Edit Profile</p>

            <form
              className="edit-modal-form"
              onSubmit={(e) => handleUpdateUserOnSubmit(e, token, updatedUser)}
              onClick={(e) => {
                e.stopPropagation();
                setShowSelectContainer(false);
                setShowAvatarModal(false);
              }}
            >
              <div className="edit-modal-profile">
                <img
                  src={updatedUser.avatar}
                  alt={updatedUser.username}
                  className="edit-modal-user-image"
                />
                <div>
                  <p className="edit-modal-username">{updatedUser.username}</p>
                  <p
                    onClick={(e) => {
                      setShowSelectContainer(!showSelectContainer);
                      e.stopPropagation();
                    }}
                    className="edit-modal-change-profile-pic"
                  >
                    <span className="edit-modal-change-profile-pic-link">
                      Change profile Photo
                    </span>
                    {showSelectContainer && (
                      <div className="image-avatar-select-options-container">
                        <p
                          onClick={(e) => {
                            handleChangeUserImage();
                            e.stopPropagation();
                          }}
                          className="select-image-slector"
                        >
                          <span>
                            <AiOutlineUpload />
                          </span>
                          <span> Upload Image</span>
                        </p>
                        <p
                          onClick={(e) => {
                            setShowAvatarModal(true);
                            e.stopPropagation();
                            setShowSelectContainer(false);
                          }}
                          className="select-avatar-selector"
                        >
                          <span>
                            <AiFillEdit />
                          </span>
                          <span> Select Avatar</span>
                        </p>
                      </div>
                    )}
                    {showAvatarModal && (
                      <div className="avatar-modal">
                        <div className="avatar-modal-header">
                          <p>Choose Avatar</p>
                          <p
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowAvatarModal(false);
                            }}
                          >
                            <AiOutlineClose className="avatar-modal-close-icon" />
                          </p>
                        </div>

                        <div className="avatar-container">
                          {Avatars?.map((avatar, index) => (
                            <div key={index} className="avatar">
                              <img
                                src={avatar}
                                alt="avatar"
                                className="avatar-img"
                                onClick={(e) => handleSetAvatar(e, avatar)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
