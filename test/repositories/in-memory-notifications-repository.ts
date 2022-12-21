import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';

// define metodos para ser usado e armazena na memoria ao invés de acessar o banco de dados
export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  // metodo para procurar uma notificação especifica pelo ID e retornar como um objeto
  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  // metodo para procurar uma notificação que tenha um determinado ID de acordo com o recipientId que é o ID do destinatário da notificação
  // e retornar o array de notificações encontrado
  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  // metodo para salvar uma notificação especifica, porém sem retorno
  // procurar a notificação de mesmo ID e sobrescreve se for encontrada a notificação
  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}
