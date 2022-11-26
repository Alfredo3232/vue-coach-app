<template>
    <section>
        <h2>Register as a coach now!</h2>
        <coach-form></coach-form>
    </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    components: {
        'coach-form': CoachForm
    }
};
</script>