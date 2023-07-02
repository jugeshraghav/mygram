import { useState } from "react";

import { SinglePostModal } from "../../modals/singlePostModal/SinglePostModal";

export const SinglePost = () => {
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
