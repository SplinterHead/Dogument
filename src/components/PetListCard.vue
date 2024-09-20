<template>
  <b-card no-body class="pet-card overflow-hidden text-left">
    <b-row no-gutters>
      <b-card-img
        class="pet-photo"
        :src="require('@/assets/default-profile2.jpg')"
      />
      <b-card-body :title="name">
        <i>{{ dob }}</i>
      </b-card-body>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: "PetListCard",
  props: {
    id: Number,
    name: String,
    dob: Number,
  },
};
</script>

<style scoped>
.pet-card {
  border-radius: 8px;
}

.pet-photo {
  width: 192px;
  height: 192px;
}
</style>
