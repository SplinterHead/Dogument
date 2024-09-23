<template>
  <b-modal id="new-pet-modal" title="Add Pet" @ok="addPet">
    <b-form>
      <b-form-group id="name-input-group" label="Name:" label-for="pet-name">
        <b-form-input
          id="pet-name"
          v-model="form.petName"
          type="text"
          required
        />
      </b-form-group>
      <b-form-group
        id="dob-input-group"
        label="Date of Birth:"
        label-for="pet-dob"
      >
        <b-form-input
          id="pet-dob"
          v-model="form.dateOfBirth"
          type="date"
          required
        />
      </b-form-group>
      <b-form-group
        id="gender-input-group"
        label="Gender:"
        label-for="pet-gender"
      >
        <b-form-select
          id="pet-gender"
          v-model="form.gender"
          type="select"
          :options="[{ text: 'Choose...', value: null }, 'Male', 'Female']"
          required
        />
      </b-form-group>
      <b-form-group
        id="microchip-input-group"
        label="Microchip Number:"
        label-for="pet-microchip"
      >
        <b-form-input
          id="pet-microchip"
          v-model="form.microchipNumber"
          type="number"
        />
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import axios from "axios";

export default {
  name: "NewPetModal",
  data: function () {
    return {
      form: {
        petName: "",
        dateOfBirth: new Date(),
        gender: null,
        microchipNumber: 0,
      },
    };
  },
  methods: {
    addPet: function () {
      let payload = {
        name: this.form.petName,
        date_of_birth: this.form.dateOfBirth,
        is_male: this.form.gender == "Male",
        microchip_number: this.form.microchipNumber,
      };
      console.log(payload);
      axios.post("http://localhost:3000/pets", payload);
    },
  },
};
</script>
