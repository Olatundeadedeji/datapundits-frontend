<template>
    <div>
        <h1>User Profile</h1>
        <p>Name: {{ name }}</p>
        <input v-model="name" placeholder="Update your name" />
        <button @click="updateName">Update Name</button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const name = ref('Akpan Bolton');


        const updateName = () => {
            console.log(`User name updated to: ${name.value}`);
        };

        return {
            name,
            updateName
        };
    }
};
</script>

<style scoped>
input {
    margin-right: 10px;
    padding: 5px;
}

button {
    padding: 5px 10px;
}
</style>