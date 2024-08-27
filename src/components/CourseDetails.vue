<template> 
    <div> 
      <h1>Course Details</h1> 
      <p v-if="course">Course Name: {{ course.name }}</p> 
      <p v-else>Select a course to see details</p> 
    </div> 
  </template> 
   
  <script> 
  import { ref, watch } from 'vue'; 
   
  export default { 
    props: { 
      selectedCourse: { 
        type: Object, 
        required: false 
      } 
    }, 
    setup(props) { 
      const course = ref(null); 
   
     
      watch(() => props.selectedCourse, (newCourse) => { 
        course.value = newCourse; 
      }); 
   
      return { 
        course 
      }; 
    } 
  }; 
  </script> 
   
  <style scoped> 
  p { 
    font-size: 16px; 
    color: gray; 
  } 
  </style> 
  