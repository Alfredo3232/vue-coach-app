<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="firstname">First Name:</label>
            <input type="text" id="firstname" v-model.trim="firstName" />
        </div>

        <div class="form-control">
            <label for="lastname">Last Name:</label>
            <input type="text" id="lastname" v-model.trim="lastName" />
        </div>

        <div class="form-control">
            <label for="description">Description:</label>
            <textarea id="description" rows="5" v-model.trim="description"></textarea>
        </div>

        <div class="form-control">
            <label for="rate">Hourly Rate:</label>
            <input type="number" id="rate" v-model.number="rate" />
        </div>

        <div class="form-control">
            <h3>Areas of Expertise</h3>
            <div>
                <label for="frontend">Frontend Development</label>
                <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
            </div>

            <div>
                <label for="backend">Backend Development</label>
                <input type="checkbox" id="backend" value="backend" v-model="areas" />
            </div>

            <div>
                <label for="career">Career Advisory</label>
                <input type="checkbox" id="career" value="career" v-model="areas" />
            </div>
        </div>
        <base-button>Register</base-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            description: '',
            rate: null,
            areas: []
        };
    },
    methods: {
        submitForm() {
            const formData = {
                first: this.firstName,
                last: this.lastName,
                desc: this.description,
                rate: this.rate,
                areas: this.areas
            };

            console.log(formData);
        }
    }
}
</script>