<template>
    <div>
        <h1>{{partsSelected.title}}</h1>
        <div>
            {{partsSelected.description}}
        </div>
    </div>
</template>

<script>
// import parts from '../data/parts';
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'PartInfo',
  mixins: [getPartsMixin],
  props: {
    partType: {
      type: String,
    },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    partsSelected() {
      const { partType, id } = this;
      console.log(partType, id);
      return this.parts[partType].find(part => part.id === +id);
    },
  },

};
</script>

<style scoped>

</style>
