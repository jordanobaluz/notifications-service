import { Content } from './content';

describe('Notification content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy(); //retorna se foi verdadeira
  });

  it('it should not be able to create a notification content with less than five characters', () => {
    expect(() => new Content('aaa')).toThrow(); //retorna se retorna o erro especificado
  });

  it('it should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow(); //teste se tem mais de 240 characters e se for verdadeiro passa o teste
  });
});
