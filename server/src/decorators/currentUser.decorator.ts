import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/client';

const User = createParamDecorator(
  (data: keyof User, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    console.log("re", request.user)
    if (!data) {
      return request.user;
    }
    return request.user[data];
  },
);
export default User;
