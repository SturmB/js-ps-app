<template>
  <v-form>
    <v-container>
      <input-files @input-change="updateInputFiles"></input-files>
    </v-container>
  </v-form>
</template>

<script>
import InputFiles from "@/components/InputFiles";
export default {
  components: {
    InputFiles,
  },
  data() {
    return {
      files: [],
    };
  },
  methods: {
    updateInputFiles(filesArray) {
      this.files = filesArray;
    },
  },
};
</script>

<style></style>
