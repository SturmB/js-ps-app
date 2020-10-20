import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    processedImages: 0,
    tags: [
      { name: "lynx", active: true },
      { name: "lion", active: true },
      { name: "tiger", active: false },
      { name: "siamese", active: true },
    ],
    actions: [
      { actionSet: "ActionSet1", actions: ["Action1", "Action2", "Action3"] },
      { actionSet: "ActionSet2", actions: ["Action4", "Action5", "Action6"] },
      { actionSet: "ActionSet3", actions: ["Action7", "Action8", "Action9"] },
    ],
  },
  getters: {
    processedImages(state) {
      return state.processedImages;
    },
    tags(state) {
      return state.tags;
    },
    actions(state) {
      return state.actions;
    },
  },
  mutations: {
    incrementProcessedImages(state) {
      state.processedImages++;
    },
    saveProcessedImages(state, payload) {
      if (payload) {
        // bootstrapping the app
        state.processedImages = payload;
        localStorage.processedImages = payload;
      } else {
        // when incrementing
        localStorage.processedImages = state.processedImages;
      }
    },
    saveTags(state, payload) {
      state.tags = payload;
      localStorage.tags = JSON.stringify(payload);
    },
    saveActions(state, payload) {
      state.actions = payload;
    }
  },
  actions: {
    storeProcessedImages(context, payload) {
      context.commit("saveProcessedImages", payload);
    },
    storeTags(context, payload) {
      context.commit("saveTags", payload);
    },
    storeActions(context, payload) {
      context.commit("saveActions", payload);
    }
  },
  modules: {},
});
