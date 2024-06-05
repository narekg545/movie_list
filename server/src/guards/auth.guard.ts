import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { ERROR_MESSAGES } from '../utils/constants/string.constant';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly excludedRoutes = ['/auth/login', '/users/sign-up'];
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization }: any = request.headers;
    const currentRoute = request.route.path;
    if (this.isExcludedRoute(currentRoute)) {
      return true;
    }

    try {
      const authToken = authorization?.replace(/bearer/gim, '').trim();
      if (!authToken) {
        throw new UnauthorizedException();
      }

      const user = await this.authService.validateToken(authToken);
      request.user = user;
      return true;
    } catch (error) {
      throw new ForbiddenException(ERROR_MESSAGES.SESSION_EXPIRED);
    }
  }

  private isExcludedRoute(route: string): boolean {
    return this.excludedRoutes.some((excluded) => route.startsWith(excluded));
  }
}
