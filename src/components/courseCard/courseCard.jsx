import React from 'react';
import PropTypes from 'prop-types';

export default function CourseCard({ course }) {
  const { title, description, duration, price,  } = course;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full transition-transform hover:scale-105 hover:shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{duration}</span>
          <span className={`text-lg font-semibold`}>
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired
};