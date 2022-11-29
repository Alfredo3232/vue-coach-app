export default {
    async contactCoach(context, payload) {
        const newRequest = {
            coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        };

        const response = await fetch(`https://vue-coach-app-54e87-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(response.formData.message || 'Failed to send request.');
            throw error;
        }

        newRequest.id = responseData.name;

        context.commit('addRequest', newRequest);
    }
};