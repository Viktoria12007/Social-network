import './PostView.css';
import {Post} from "../../api/Post";
import {FC} from "react";

function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString(undefined, {
    timeStyle: 'medium',
  })}`;
}

interface PostView {
    post: Post
}

export const PostView: FC<PostView> = ({ post }) => {
  return (
    <div className="post-view">
      <p className="post-view__text">{post.text}</p>

      <time className="post-view__time">{formatDate(post.createdAt)}</time>
    </div>
  );
};
