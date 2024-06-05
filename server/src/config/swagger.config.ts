import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import {
  SWAGGER_API_TITLE,
  SWAGGER_API_DESCRIPTION,
  SWAGGER_API_VERSION,
  SWAGGER_SERVER_LOCAL,
  SWAGGER_SERVER_STAGING,
  SWAGGER_SERVER_PRODUCTION,
} from '../utils/constants/swagger.constants';  

export function createSwaggerConfig(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle(SWAGGER_API_TITLE)
    .setDescription(SWAGGER_API_DESCRIPTION)
    .setVersion(SWAGGER_API_VERSION)
    .addServer(SWAGGER_SERVER_LOCAL, 'Local environment')
    .addServer(SWAGGER_SERVER_STAGING, 'Staging')
    .addServer(SWAGGER_SERVER_PRODUCTION, 'Production')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}
