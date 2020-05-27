import { createParamDecorator } from "@nestjs/common";
import { UsuarioDto } from './dto/usuario.dto';

export const GetUser = createParamDecorator((data, req): UsuarioDto => {
    return req.user;
});
