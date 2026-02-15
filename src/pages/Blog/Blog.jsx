import { useEffect, useState } from "react";
import "./Blog.css";
import axios from "axios";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchBlogs = async (pageNumber = 1, append = false) => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://120.138.10.167/testing/usminfrabackup/api/blog?page=${pageNumber}`,
      );

      const blogData = response?.data?.data?.blogs || [];
      const pagination = response?.data?.data?.pagination;

      setLastPage(pagination?.last_page || 1);
      setHasMore(pagination?.has_more);

      if (append) {
        setBlogs((prev) => [...prev, ...blogData]);
      } else {
        setBlogs(blogData);
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    fetchBlogs(nextPage, true);
    setPage(nextPage);
  };

  const handleLoadAll = async () => {
    try {
      setLoading(true);

      let allBlogs = [...blogs];

      for (let p = page + 1; p <= lastPage; p++) {
        const response = await axios.get(
          `https://120.138.10.167/testing/usminfrabackup/api/blog?page=${p}`,
        );

        allBlogs = [...allBlogs, ...(response?.data?.data?.blogs || [])];
      }

      setBlogs(allBlogs);
      setHasMore(false);
    } catch (error) {
      console.error("Load All Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear().toString().slice(-2);
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      {/* Overlay Spinner (for all loading cases) */}
      {loading && (
        <div className="overlay-loader">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {/* Hero Banner */}
      <Container fluid className="blog-container">
        <section className="blog-hero-banner">
          <div
            className="banner-bg"
            style={{
              backgroundImage:
                "url(https://usminfra.com/assets/img/blogheader.jpg)",
            }}
          />
        </section>
      </Container>

      {/* Blog List */}
      <Container className="py-5">
        <Row>
          {blogs.map((blog, index) => (
            <Col lg={4} md={6} className="mb-4" key={blog.id || index}>
              <BlogCard
                image={`https://usminfra.com/${blog.image}`}
                date={formatDate(blog.date)}
                title={blog.blog_title}
                description={
                  blog.short_description ||
                  blog.description?.substring(0, 120) + "..."
                }
                link={`/blog-details/${blog.id}`}
              />
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          {hasMore ? (
            <>
              <Button
                variant="warning"
                className="me-3"
                onClick={handleLoadMore}
                disabled={loading}
              >
                Load More
              </Button>

              <Button variant="dark" onClick={handleLoadAll} disabled={loading}>
                Load All
              </Button>
            </>
          ) : (
            <p className="end-message mt-3">— End of Results —</p>
          )}
        </div>
      </Container>
    </>
  );
};

export default Blog;
