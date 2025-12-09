import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/client';
import Loading from '../components/Loading';
import './BlogDetail.css';

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get(`/${id}`)
      .then((res) => {
        if (res.data) {
          setBlog(res.data);
        } else {
          setError('Article not found');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('API Error:', err);
        setError('Failed to load article. Please try again later.');
        setLoading(false);
      });
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) return <Loading />;
  
  if (error || !blog) {
    return (
      <div className="detail-container">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Articles
        </button>
        <div className="error-state">
          <h2>Oops! Something went wrong</h2>
          <p>{error || 'Article not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to Articles
      </button>
      <article className="detail-card">
        <h1 className="detail-title">{blog.title}</h1>
        <div className="detail-meta">
          Published on {formatDate(blog.created_at)}
        </div>
        <div className="detail-content">
          {blog.content.split('\n').map((paragraph, index) => (
            paragraph && <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}

export default BlogDetail;