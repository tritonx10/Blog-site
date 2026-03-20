import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import Articles from './pages/Articles';
import Books from './pages/Books';
import PostDetail from './pages/PostDetail';
import ArticleDetail from './pages/ArticleDetail';
import BookDetail from './pages/BookDetail';
import Admin from './pages/Admin';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-parchment selection:bg-gold/30 selection:text-ink">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostDetail />} />
          
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          
          <Route path="/books" element={<Books />} />
          <Route path="/books/:slug" element={<BookDetail />} />
          
          <Route path="/admin" element={<Admin />} />
          
          {/* Fallback */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center py-32">
              <h1 className="font-heading text-4xl text-ink mb-4">404</h1>
              <p className="font-body text-brown-lighter italic mb-8 text-lg">
                This page has vanished into the ink...
              </p>
              <a href="/" className="btn-gold">Return Home</a>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
