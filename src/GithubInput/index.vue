<template>
    <div>
        <p>github input</p>

        <form @submit.prevent="onSubmit">
            <input type="text" v-model="username" placeholder="Enter a github username here">
            <button type="submit">Go!</button>
        </form>
    </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
