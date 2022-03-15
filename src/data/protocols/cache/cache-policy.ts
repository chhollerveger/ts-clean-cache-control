export class CachePolicy {
  private static maxAgeInDays = 3;

  static validate(timestamp: Date, date: Date): boolean {
    const maxAge = new Date(timestamp);
    maxAge.setDate(maxAge.getDate() + this.maxAgeInDays);
    return maxAge > date;
  }
}