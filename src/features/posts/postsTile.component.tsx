import { useNavigate } from "react-router-dom";

import { Card } from "src/common/card/card.component";
import { Post } from "./markdown";

type PostsTileProps = {
  id: string;
  post: Post;
};

const PostsTile = ({ id, post }: PostsTileProps) => {
  const navigate = useNavigate();

  const {
    data: { title, description, date },
  } = post;

  return (
    <Card
      onClick={() => navigate(`/posts/${id}`)}
      primary={title}
      secondary={<time>{new Date(date).toDateString()}</time>}
      tertiary={description}
    />
  );
};

export default PostsTile;
