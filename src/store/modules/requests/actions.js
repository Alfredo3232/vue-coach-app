export default {
    contactCoach(context, payload) {
        const newRequest = {
            coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        };

        fetch(`https://vue-coach-app-54e87-default-rtdb.firebaseio.com/requests/${}.json`);

        context.commit('addRequest', newRequest);
    }
};