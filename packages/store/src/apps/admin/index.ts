// Export Store and Persistor
export { store as adminStore, persistor as adminPersistor } from "./store";

// Export Application Hooks (Presentation Layer)
export { useSample as useAdminSample } from "./sample/presentation/use-sample";

// Note: Domain Entities and Infrastructure (Redux) are internal details
// Components should ONLY use the exported presentation hooks.
