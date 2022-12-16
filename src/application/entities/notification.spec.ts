import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('it should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-repicient-id',
    });

    expect(notification).toBeTruthy(); //retorna se foi verdadeira
  });
});
