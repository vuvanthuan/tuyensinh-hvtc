import type { WebStorage } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const webStorage = createWebStorage as (type: string) => WebStorage;

interface INoopStorage {
  getItem: (_key: string) => Promise<string | null>;
  setItem: (_key: string, value: string) => Promise<string>;
  removeItem: (_key: string) => Promise<void>;
}

interface IWebStorage {
  getItem: WebStorage["getItem"];
  setItem: WebStorage["setItem"];
  removeItem: WebStorage["removeItem"];
}

type TStorage = IWebStorage | INoopStorage;

const createNoopStorage = (): INoopStorage => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

export const storage: TStorage =
  typeof window !== "undefined"
    ? (webStorage("local") as unknown as IWebStorage)
    : createNoopStorage();
