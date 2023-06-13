import "./editUserModal.css";
export const EditUserModal = ({ user: { avatar, username, website, bio } }) => {
  return (
    <>
      <div className="edit-modal-container">
        <div className="edit-modal-form-container">
          <p className="edit-modal-heading">Edit Profile</p>

          <form className="edit-modal-form">
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
              <input value={website} className="edit-modal-input"></input>
            </div>
            <div>
              <label className="edit-modal-label">Bio</label>
              <textarea
                rows="5"
                columns="10"
                value={bio}
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
};
