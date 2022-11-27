<template>
    <section>
        <base-card>
            <header>
                <h2>Requests Received</h2>
            </header>

            <ul></ul>
            <h3>You haven't received any requests yet!</h3>
        </base-card>
    </section>
</template>

<script>
export default {
    computed: {
        receivedRequests() {
            return this.$store.getters['requests/requests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
        }
    }
};
</script>

<style scoped>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>