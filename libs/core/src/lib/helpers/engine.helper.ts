abstract class EngineHelper {
  public static isDevEnv(): boolean {
    return process.env['NODE_ENV '] === 'development'
  }

  public static throwInDev(message: string): void {
    if (EngineHelper.isDevEnv()) {
      throw new Error(message)
    }
    // send error
  }
}

export default EngineHelper
