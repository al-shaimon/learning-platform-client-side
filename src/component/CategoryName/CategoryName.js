import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Categoryname.css'
const CategoryName = ({ named }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/detailPage/${named.id}`);
  };
  return (
    <div>
      <p
        className="m-3 text-xl styles text-white p-1 rounded-md mx-auto bg-indigo-600"
        onClick={handleNavigate}
      >
        <Link>{named.name}</Link>
      </p>
    </div>
  );
};

export default CategoryName;
