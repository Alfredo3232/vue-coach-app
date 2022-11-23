import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'John',
                    lastName: 'Wick',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "'You Wanted Me Back. I'm Back!' - John Wick",
                    hourlyRate: 3000
                },
                {
                    id: 'c2',
                    firstName: 'Jenny',
                    lastName: 'Jenny',
                    areas: ['frontend', 'career'],
                    description:
                        ':)',
                    hourlyRate: 300
                }
            ]
        };
    },
    mutations,
    actions,
    getters
};