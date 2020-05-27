import { AuthService } from './auth.service';
import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { SigninDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('/signin')
    @UsePipes(ValidationPipe)
    async signin(@Body() signinDto: SigninDto) {
        return this.authService.signin(signinDto);
    }
}
