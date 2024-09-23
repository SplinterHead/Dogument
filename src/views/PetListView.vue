<template>
  <div>
    <div id="header">
      <img id="logo" :src="require('@/assets/logo/dogument_icon.png')" />
      <h1>Dogument</h1>
    </div>
    <div id="petlist-msg" v-if="pets.length == 0">
      There are no pets listed
      <br />
      <b-button @click="$bvModal.show('new-pet-modal')">Add new pet</b-button>
    </div>
    <div id="petlist-list" v-else>
      <pet-list-card
        v-for="pet in pets"
        :key="pet.id"
        :id="pet.id"
        :name="pet.name"
        :dob="pet.date_of_birth"
      />
    </div>
    <new-pet-modal />
  </div>
</template>

<script>
import axios from "axios";
import NewPetModal from "@/components/NewPetModal.vue";
import PetListCard from "@/components/PetListCard.vue";

export default {
  name: "PetListView",
  components: {
    NewPetModal,
    PetListCard,
  },
  data: function () {
    return {
      pets: [],
    };
  },
  methods: {
    async getPets() {
      await axios.get("http://localhost:3000/pets").then((res) => {
        console.log(res.data);
        this.pets = res.data;
      });
    },
  },
  mounted() {
    this.getPets();
  },
};
</script>

<style scoped>
#header {
  text-align: left;
  padding-bottom: 24px;
}

#logo {
  width: 72px;
  height: 72px;
}

#header h1 {
  display: inline;
  vertical-align: bottom;
}

#petlist-msg {
  text-align: center;
}
</style>
