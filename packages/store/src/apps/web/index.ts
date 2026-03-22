// Export Store and Persistor
export { store as webStore, persistor as webPersistor } from "./store";

// Export Application Hooks (Presentation Layer)
export { useSample as useWebSample } from "./sample/presentation/use-sample";

// Note: Domain Entities and Infrastructure (Redux) are internal details
// Components should ONLY use the exported presentation hooks.
