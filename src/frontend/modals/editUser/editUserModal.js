import { useContext, useState } from "react";
import "./editUserModal.css";
import { UserContext } from "../../../index";
export const EditUserModal = ({
  user: { avatar, username, website, bio },
  show,
  onClose,
}) => {
  const { editUserHandler } = useContext(UserContext);
  const [updatedUser, setUpdatedUser] = useState({
    website: website,
    bio: bio,
  });
  const token = localStorage.getItem("token");
  const handleUpdateUserOnSubmit = (e, token, updatedUser) => {
    e.preventDefault();
    console.log(updatedUser);
    editUserHandler(token, updatedUser);
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
                <img src={avatar} alt={username} />
                <div>
                  <p className="edit-modal-username">{username}</p>
                  <p className="edit-modal-change-profile-pic-link">
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
