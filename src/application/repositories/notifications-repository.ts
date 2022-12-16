// apenas uma interface que diz qual metodos devem existir no repositorio porém não implementa, para poder trabalhar com inversão de dependencias
// o nestjs lida melhor com classes abstratas devido injeção de dependencias

import { Notification } from '../entities/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
