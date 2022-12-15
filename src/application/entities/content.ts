//separou um atributo especifico da entidade principal de notificação, para poder fazer operações nele de forma isolada
export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string) {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);
    if (!isContentLengthValid) {
      throw new Error('Content Length error.');
    }
    this.content = content;
  }
}
