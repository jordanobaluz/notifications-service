// apenas uma interface que diz qual metodos devem existir no repositorio porém não implementa, para poder trabalhar com inversão de dependencias
// o nestjs lida melhor com classes abstratas devido injeção de dependencias

import { Notification } from '../entities/notification';

// implementa metodos abstratos para ser implementado por uma classe concreta
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}

// é uma classe abstrata para um repositorio de notificações, onde é definido os metodos para uma classe concreta
