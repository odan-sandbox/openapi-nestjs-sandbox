import { Module } from "@nestjs/common";
import { HelloController } from "./hello/hello.controller";
import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [TodoModule],
  controllers: [HelloController],
  providers: []
})
export class AppModule {}
