import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  let likeStyle = { color: "red" };

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <p onClick={handleClick} style={{ cursor: "pointer" }}>
        <i
          className={liked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
          style={liked ? likeStyle : null}
        />
      </p>
    </div>
  );
}
