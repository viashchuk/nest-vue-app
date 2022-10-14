import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';


@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        TypeOrmModule.forRoot(({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: '',
            database: 'control-food',
            autoLoadEntities: true,
            synchronize: true
        })),
        UsersModule],

    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
