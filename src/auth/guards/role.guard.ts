import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) { }
  canActivate(context: ExecutionContext): boolean {
    const roles: string[] = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const { user } = request;
    const hasRole = roles.includes(user.rol);
    if (user && user.rol && hasRole) {
      return true;
    } else {
      throw new UnauthorizedException('Credenciales invalidas');
      //return false;
    }
  }
}
