import { Link } from 'react-router-dom';
import './BlogCard.css';

function BlogCard({ blog }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Link to={`/blog/${blog.id}`} className="blog-card">
      <h2 className="blog-card-title">{blog.title}</h2>
      <p className="blog-card-content">{blog.content}</p>
      <span className="read-more">Read more →</span>
      <p className="blog-card-date">{formatDate(blog.created_at)}</p>
    </Link>
  );
}

export default BlogCard;