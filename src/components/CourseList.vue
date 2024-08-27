<template>
    <ul>
        <li v-for="course in courses" :key="course.id" @click="props.onSelect(course)">
            {{ course.name }}
        </li>
    </ul>
</template>

<script>
import { ref } from 'vue';

export default {
    setup(props, { emit }) {

        const courses = ref([
            { id: 1, name: 'Pandas Fundamentals' },
            { id: 2, name: 'Advanced Data Analysis' },
            { id: 3, name: 'Fundamentals of Machine Learning' },
        ]);


        const selectCourse = (course) => {
            emit('select', course);
        };

        return {
            courses,
            selectCourse,
        };
    },
};
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0; 
    margin-left: 0;  
}
li {
    cursor: pointer;
    margin: 5px 0;
}

li:hover {
    color: blue;
}
</style>