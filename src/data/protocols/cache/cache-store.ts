export default interface CacheStore {
  delete: (key: string) => void;
  insert: (key: string) => void;
}
