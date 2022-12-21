// factory pattern
// uma função que abstrai a criação de um objeto

import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

// partial permite que todas as propriedades sejam opcional
type Override = Partial<NotificationProps>;
export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade'),
    recipientId: 'recipient-id-2',
    ...override,
  });
}
