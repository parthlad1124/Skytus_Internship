import React, { useState } from "react";
import BlogCard from "./BlogCard";

function BlogList({ onSelectBlog }) {
 const [blogs] = useState([
  {
    id: 1,
    title: "React Basics",
    description: `ReactJS is a JavaScript library for building user interfaces. 
It allows developers to create reusable UI components, manage state efficiently, 
and handle complex DOM updates with ease. Learning ReactJS lays the foundation 
for building modern web applications with dynamic interactivity.`,
    content: `ReactJS is maintained by Facebook and a community of developers. 
It uses a virtual DOM to improve performance by minimizing direct manipulation of the actual DOM. 
A key concept in React is the component — a self-contained piece of UI that can be reused across 
an application. Components can manage their own state, receive props from parent components, 
and respond to user interactions. React supports JSX syntax, which allows developers to 
write HTML-like code inside JavaScript, making UI creation intuitive and declarative. 
Understanding lifecycle methods, state management, and hooks such as useState and useEffect 
is essential for building scalable React applications. React’s ecosystem also includes 
React Router for navigation and Redux for global state management. Overall, React provides 
a flexible and efficient way to build responsive and modern web applications.`
  },
  {
    id: 2,
    title: "State & Props in React",
    description: `State and props are the core of React’s dynamic rendering system. 
State allows components to keep track of changing data, while props let components 
receive data from their parent components.`,
    content: `State is a built-in object in React components that allows you to store 
dynamic information and re-render the component whenever it changes. 
Props, short for properties, are read-only inputs passed from a parent component 
to a child component. This unidirectional data flow ensures that the UI 
remains predictable and easy to debug. Combining state and props effectively 
enables developers to create interactive and maintainable user interfaces. 
Additionally, lifting state up and using controlled components are common patterns 
for sharing data between components. Hooks like useState, useReducer, and 
useContext simplify state management in functional components. Understanding how 
to use state and props together is fundamental to mastering React and building 
applications that respond dynamically to user actions.`
  },
  {
    id: 3,
    title: "React Hooks",
    description: `React Hooks are functions that let developers “hook into” React state 
and lifecycle features from functional components. They simplify component logic 
and reduce boilerplate code.`,
    content: `Before hooks, managing state and lifecycle methods was only possible 
in class-based components. Hooks allow functional components to have state 
and other React features without writing classes. Common hooks include useState, 
useEffect, useContext, useReducer, and useRef. The useState hook allows you to 
declare state variables in functional components. useEffect handles side-effects 
such as data fetching, subscriptions, or DOM manipulation. useContext provides 
a way to pass data through the component tree without manually passing props. 
Hooks follow strict rules: only call them at the top level of a component and 
never inside loops or conditions. By using hooks effectively, developers can 
write cleaner, more readable code while maintaining all the capabilities 
of class components. Hooks have become the standard for writing modern React applications.`
  }
]);



  return (
   <div className="blog-list">
  <h2>Blog List</h2>
  {blogs.map(blog => (
    <BlogCard key={blog.id} blog={blog} onClick={() => onSelectBlog(blog)} />
  ))}
</div>

  );
}

export default BlogList;
