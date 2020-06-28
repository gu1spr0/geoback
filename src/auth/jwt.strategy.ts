import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { jwtConstants } from './constants';
import { IJwtPayload } from './jwt-payload.interface';
import { UsuarioService } from '../services/usuario/usuario.service';
import { WsException } from '@nestjs/websockets';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usuarioService: UsuarioService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: IJwtPayload) {
        const { username } = payload;
        const user = await this.usuarioService.findAuth(username);
        if (!user) {
            throw new UnauthorizedException();
        }
        return payload;
        // return { id: payload.sub, username: payload.nombre };
    }
}
