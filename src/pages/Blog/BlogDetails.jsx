import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(
          `http://120.138.10.167/testing/usminfrabackup/api/blog-details/17`,
        );

        console.log("Blog Details Response:", response.data.data);

        //  setBlog(response?.data?.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetails();
  }, [id]);

  return <></>;
};

export default BlogDetails;
