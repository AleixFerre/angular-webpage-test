export abstract class Utils {
  public static firstCapital(type: string): string {
    return type.charAt(0).toUpperCase() + type.slice(1);
  }
}
