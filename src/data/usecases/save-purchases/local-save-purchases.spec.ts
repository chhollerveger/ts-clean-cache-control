import { CacheStoreSpy, mockPurchases } from "@/data/tests";
import LocalSavePurchases from "./local-save-purchases";

type SutTypes = {
  sut: LocalSavePurchases;
  cacheStore: CacheStoreSpy;
}

const makeSut = (): SutTypes => {
  const cacheStore = new CacheStoreSpy();
  const sut = new LocalSavePurchases(cacheStore);
  return {
    sut,
    cacheStore
  }
}

describe('LocalSavePurchases', () => {
  test('Should not delete cache on init', () => {
    const { cacheStore } = makeSut();
    expect(cacheStore.deleteCallsCount).toBe(0);
  });

  test('Should delete old cache on save', async () => {
    const { cacheStore, sut } = makeSut();
    await sut.save(mockPurchases());
    expect(cacheStore.deleteCallsCount).toBe(1);
    expect(cacheStore.deleteKey).toBe('purchases');
  });

  test('Should not insert new Cache if delete fails', () => {
    const { cacheStore, sut } = makeSut();
    cacheStore.simulateDeleteError();
    const promise = sut.save(mockPurchases());
    expect(cacheStore.insertCallsCount).toBe(0);
    expect(promise).rejects.toThrow();
  });

  test('Should insert new Cache if delete succeeds', async () => {
    const { cacheStore, sut } = makeSut();
    const purchases = mockPurchases();
    await sut.save(purchases);
    expect(cacheStore.deleteCallsCount).toBe(1);
    expect(cacheStore.insertCallsCount).toBe(1);
    expect(cacheStore.insertKey).toBe('purchases');
    expect(cacheStore.insertValues).toEqual(purchases);
  });

  test('Should throw if insert throws', () => {
    const { cacheStore, sut } = makeSut();
    cacheStore.simulateInsertError();
    const promise = sut.save(mockPurchases());
    expect(promise).rejects.toThrow();
  });
})