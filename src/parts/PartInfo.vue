<template>
    <div>
        <h1>{{parts.title}}</h1>
        <div>
            {{parts.description}}
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
    parts() {
      const { partType, id } = this;

      return this.parts[partType].find(part => part.id === +id);
    },
  },

};
</script>

<style scoped>

</style>
