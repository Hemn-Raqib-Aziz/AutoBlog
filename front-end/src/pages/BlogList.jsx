import { useEffect, useState } from 'react';
import api from '../api/client';
import BlogCard from '../components/BlogCard';
import Loading from '../components/Loading';
import './BlogList.css';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/all')
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API Error:', err);
        setError('Failed to load articles. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  
  if (error) {
    return (
      <div className="container">
        <div className="error-state">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="container">
        <div className="empty-state">
          <h2>No articles yet</h2>
          <p>Check back soon for new content!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>Latest Articles</h1>
        <p>Discover our collection of automatically generated blog posts</p>
      </div>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogList;