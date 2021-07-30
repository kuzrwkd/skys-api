export namespace ExceptionTool {
  /**
   * ValidationError
   * @param message - string
   */
  export class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
    }
  }
}
