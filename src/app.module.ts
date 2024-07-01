import { CacheModule } from "@nestjs/cache-manager";
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { PublicModule } from "./public/public.module";
import { AuthenticationMiddleware } from "./utils.common/utils.middleware.common/utils.bearer-token.common";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ZnsModule } from "./zns/zns.module";


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.CONFIG_MONGO_USERNAME_ZNS_CUSTOMER
      }:${encodeURIComponent(process.env.CONFIG_MONGO_PASSWORD_ZNS_CUSTOMER)}@${process.env.CONFIG_MONGO_HOST_ZNS_CUSTOMER
      }:${process.env.CONFIG_MONGO_PORT_ZNS_CUSTOMER}/${process.env.CONFIG_MONGO_DB_NAME_ZNS_CUSTOMER}`
    ),
    CacheModule.register({ ttl: 5, max: 1000 }),
    HttpModule,
    MongooseModule,
    PublicModule,
    ZnsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes({ path: "*", method: RequestMethod.ALL });
  }
}
