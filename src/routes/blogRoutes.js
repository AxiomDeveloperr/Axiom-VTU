import { Routes, Route } from 'react-router-dom';
import PostListing from '../pages/blog/PostListing';
import PostDetails from '../pages/blog/PostDetails';

const blogRoutes = (
  <Routes>
    <Route path="/blogs" element={<PostListing />} />
    <Route path="/blogs/:id" element={<PostDetails />} />
  </Routes>
);

export default blogRoutes;
