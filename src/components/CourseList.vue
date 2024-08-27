<template>
    <div>
        <h1>Course List</h1>
        <ul>
            <li v-for="course in courses" :key="course.id" @click="selectCourse(course)">
                {{ course.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {

        const courses = ref([
            { id: 1, name: 'Pandas Fundamentals' },
            { id: 2, name: 'Advanced Data Analysis' },
            { id: 3, name: 'Fundamentals of Machine Learning' },
        ]);


        const selectCourse = (course) => {
            console.log(`Selected course: ${course.name}`);
        };

        return {
            courses,
            selectCourse
        };
    }
};
</script>

<style scoped>
li {
    cursor: pointer;
    margin: 5px 0;
}


li:hover {
    color: blue;
}
</style>