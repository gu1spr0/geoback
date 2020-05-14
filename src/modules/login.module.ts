import { loginProvider } from './../providers/login.provider';
import { LoginService } from './../services/login/login.service';
import { LoginController } from './../controllers/login/login.controller';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [LoginController],
    providers: [LoginService, ...loginProvider],
})
export class LoginModule { }
