// Export Store and Persistor
export { store as landingStore, persistor as landingPersistor } from "./store";

// Export Application Hooks (Presentation Layer)
export { useSample as useLandingSample } from "./sample/presentation/use-sample";

// Note: Domain Entities and Infrastructure (Redux) are internal details
// Components should ONLY use the exported presentation hooks.
