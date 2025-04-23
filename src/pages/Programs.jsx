import React from 'react'
import CourseCard from '../components/courseCard/courseCard'
import { courses } from '../components/courseCard/courseList'

export default function Programs() {
  return (
    <section className="container mx-auto py-8 px-4">
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Наши курсы</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </section>
  )
}
