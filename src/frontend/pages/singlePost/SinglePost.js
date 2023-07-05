//react-hooks imports
import { useState } from "react";

//modal imports
import { SinglePostModal } from "../../modals/singlePostModal/SinglePostModal";

export const SinglePost = () => {
  //state variables
  const [showSinglePostModal, setShowSinglePostModal] = useState(true);
  return (
    <>
      <SinglePostModal
        show={showSinglePostModal}
        onClose={() => setShowSinglePostModal(false)}
      />
    </>
  );
};
