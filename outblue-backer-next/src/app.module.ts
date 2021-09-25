import { PreferenceDao } from './app/blue-database/dao/preference.dao';
import { PreferenceService } from './app/blue-service/database/preference.service';
import { TaskDao } from './app/blue-database/dao/task.dao';
import { ProjectDao } from 'src/app/blue-database/dao/project.dao';
import { UserDao } from './app/blue-database/dao/user.dao';
import { ProjectService } from './app/blue-service/database/project.service';
import { UserService } from './app/blue-service/database/user.service';
import { ProjectMasterService } from './app/blue-service/master/project-master.service';
import { UserMasterService } from './app/blue-service/master/user-master.service';
import { TaskController } from './app/blue-controller/task.controller';
import { ProjectController } from './app/blue-controller/project.controller';
import { UserController } from './app/blue-controller/user.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './app/blue-controller/jwt/jwt-strategy';
import { JwtGuard } from './app/blue-controller/jwt/jwt-guard';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './app/blue-service/auth.service';
import { CryptService } from './app/blue-service/crypt.service';
import { LoggerInterceptor } from './app/blue-controller/log/logger.interceptor';
import { Project } from './app/blue-database/entity/project.entity';
import { Task } from './app/blue-database/entity/task.entity';
import { User } from './app/blue-database/entity/user.entity';
import { TaskMasterService } from './app/blue-service/master/task-master.service';
import { TaskService } from './app/blue-service/database/task.service';
import { join } from 'path';
import { PreferenceController } from './app/blue-controller/preference.controller';
import { PreferenceMasterService } from './app/blue-service/master/preference-master.service';
import { Preference } from './app/blue-database/entity/preference.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION },
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOSTURL,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PSWD,
      database: process.env.DB_NAME,
      synchronize: false,
      entities: [
        join(__dirname + '/app/blue-database/entity/*.entity.{ts,js}')
      ],
      migrations: [
        join(__dirname + '/app/blue-database/migration/*.{ts,js}')
      ],
      migrationsRun: true,
      migrationsTableName: "BLUE_MIGRATION",
    }),
    // npx typeorm migration:create -n CreateTableBluePreferences -d src/app/blue-database/migration
    TypeOrmModule.forFeature([
      User,
      Preference, 
      Project,
      Task
    ])
  ],
  controllers: [
    UserController,
    PreferenceController,
    ProjectController,
    TaskController,

    AppController
  ],
  providers: [
    /** MASTER SERVICES */
    UserMasterService,
    PreferenceMasterService,
    ProjectMasterService,
    TaskMasterService,

    /** DATABASE SERVICES */
    UserService,
    PreferenceService,
    ProjectService,
    TaskService,

    /** SERVICES */
    AuthService,
    CryptService,

    /** DATA ACCESS OBJECTS */
    UserDao,
    PreferenceDao,
    ProjectDao,
    TaskDao,

    /** JSONWEBTOKEN */
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtGuard
    },

    /** INTERCEPTORS */
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor
    }
  ],
})
export class AppModule {}
