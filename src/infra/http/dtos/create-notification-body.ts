import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}

// irá permitir fazer a validação das variaveis
// strickpropertyinitialization: false desabilita que todas as classes precisam ser inicializadas
