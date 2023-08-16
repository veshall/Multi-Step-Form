import { create } from "zustand";

const usePlanStore = create((set) => ({
  UserInfo: {},
  CurrentPlan: {},
  addons: [],

  setUserInfo: (info) => set({ UserInfo: info }),
  setPlan: (newPlan) => set({ CurrentPlan: newPlan }),
  setAddons: (newAddons) =>
    set((state) => {
      const existingPlan = state.addons.some(
        (plan) => plan.id === newAddons.id
      );

      if (!existingPlan) {
        return { addons: [...state.addons, newAddons] };
      }
      return state;
    }),
  removeAddons: (newAddons) =>
    set((state) => ({
      addons: state.addons.filter((addon) => addon.id !== newAddons.id),
    })),
}));

export default usePlanStore;
