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
        newRequest.coachId = payload.coachId;

        context.commit('addRequest', newRequest);
    },
    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;

        const response = await fetch(`https://vue-coach-app-54e87-default-rtdb.firebaseio.com/requests/${coachId}.json`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.formData.message || 'Failed to fetch request.');
            throw error;
        }

        const requests = [];

        for (const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            };
            requests.push(request)
        }

        context.commit('setRequests', requests)
    }
};