<template>
  <div>
    <span id="header">
      <img id="logo" :src="require('@/assets/logo/dogument_icon.png')" />
      <h1>Dogument</h1>
    </span>
    <div id="petlist_msg" v-if="pets.length == 0">There are no pets listed</div>
    <div id="petlist_list" v-else>
      <pet-list-card
        v-for="pet in pets"
        :key="pet.id"
        :id="pet.id"
        :name="pet.name"
        :dob="pet.dateOfBirth"
      />
    </div>
  </div>
</template>

<script>
import PetListCard from "@/components/PetListCard.vue";

export default {
  name: "PetListView",
  components: {
    PetListCard,
  },
  data: function () {
    return {
      pets: [],
    };
  },
};
</script>

<style scoped>
#header {
  text-align: left;
  display: inline;
}

#logo {
  width: 72px;
  height: 72px;
}

#header h1 {
  display: inline;
  vertical-align: bottom;
}
</style>
