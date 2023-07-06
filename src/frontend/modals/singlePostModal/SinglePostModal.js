//react hooks imports
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";

//style imports
import "./singlePostModal.css";

//context imports
import { PostContext } from "../../contexts/post-context";
import { UserContext } from "../../contexts/user-context";

//component imports
import { CommentInput } from "../../components/commentInput/CommentInput";

//icon imports
import { FaArrowLeft } from "react-icons/fa";
import { default_img } from "../../constants/constants";

export const SinglePostModal = ({ show, onClose }) => {
  const { postId } = useParams();
  const { allPosts } = useContext(PostContext);
  const { allUsers } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  //utilities
  const postToBeDisplayed = allPosts?.find((post) => post?._id === postId);
  const currentUser = allUsers?.find(
    ({ username }) => username === postToBeDisplayed?.username
  );

  const singlePostModalHandler = () => {
    onClose();
    navigate(location?.state?.from?.pathname);
  };
  return (
    <>
      {show && (
        <div
          className="single-post-modal-container"
          onClick={singlePostModalHandler}
        >
          <div
            className="single-post-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="single-post-modal-img-container">
              <img
                src={postToBeDisplayed?.image}
                alt={postToBeDisplayed?.mediaAlt}
              />
            </div>

            <div className="single-post-modal-content">
              <div className="single-post-content-header">
                <FaArrowLeft
                  className="single-post-modal-icon"
                  onClick={singlePostModalHandler}
                />
                <p className="single-post-content-username">Comments</p>
              </div>
              <div className="single-post-modal-user">
                <img
                  src={currentUser?.avatar || default_img}
                  alt={currentUser?.username}
                  className="single-post-modal-user-image"
                />
                <p className="single-post-content-username">
                  {currentUser?.username}
                </p>
              </div>
              <div className="single-post-modal-user-caption">
                <img
                  src={currentUser?.avatar || default_img}
                  alt={currentUser?.username}
                  className="single-post-modal-user-image"
                />
                <div className="single-post-modal-user-caption-content">
                  {" "}
                  <p className="single-post-content-username">
                    {currentUser?.username}
                  </p>
                  <p className="single-post-content-text">
                    {postToBeDisplayed?.content}
                  </p>
                </div>
              </div>
              <div className="single-post-modal-comment-container">
                {postToBeDisplayed?.comments?.length > 0 ? (
                  postToBeDisplayed?.comments?.map(
                    ({ _id, username, avatarURL, text }) => (
                      <div className="single-post-comment" key={_id}>
                        <img src={avatarURL} alt={username} />
                        <div className="single-post-comment-content">
                          <p className="single-post-content-username">
                            {username}
                          </p>
                          <p className="single-post-content-text">{text}</p>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <p className="single-post-comment-content-text">
                    No comments yet
                  </p>
                )}
              </div>
              <div className="single-post-modal-comment-input-container">
                {" "}
                <CommentInput />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
