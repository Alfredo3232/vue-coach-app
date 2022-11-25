<template>
    <section>FILTER</section>

    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as Coach</router-link>
        </div>

        <ul v-if="hasCoaches">
            <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :first-name="coach.firstName"
                :last-name="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas">
            </coach-item>
        </ul>
        <h3 v-else>No coaches found.</h3>
    </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
    components: {
        'coach-item': CoachItem
    },
    computed: {
        filteredCoaches() {
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
};
</script>