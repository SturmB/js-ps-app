<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-select
        label="ActionSets"
        v-model="currentActionSet"
        :items="actionSets"
        @change="actionSetChange"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        label="Actions"
        ref="actions"
        v-model="currentAction"
        :items="actions"
        @change="
          $emit('actions-change', {
            actionSet: currentActionSet,
            action: currentAction,
          })
        "
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["actionsData"],
  data() {
    return {
      currentActionSet: undefined,
      currentAction: undefined,
    };
  },
  computed: {
    actionSets() {
      return this.actionsData.map(({ actionSet }) => actionSet);
    },
    actions() {
      return this.actionsData.find(
        (obj) => obj.actionSet === this.currentActionSet
      ).actions;
    },
  },
  methods: {
    actionSetChange() {
      this.currentAction = this.actions[0];
      // console.log(this.$refs);
      this.$refs.actions.$listeners.change();
    },
  },
  created() {
    this.currentActionSet = this.actionSets[0];
    this.currentAction = this.actions[0];
  },
  watch: {
    actionSets() {
      this.currentActionSet = this.actionSets[0];
      this.currentAction = this.actions[0];
      this.$refs.actions.$listeners.change();
    },
  },
};
</script>

<style></style>
