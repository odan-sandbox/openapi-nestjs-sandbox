import { Controller, Post, Body } from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";

import { CreateRequestDto, CreateResponseDto } from "./dto";

@Controller("todo")
@ApiUseTags("todo")
export class TodoController {
  @Post("create")
  @ApiResponse({
    status: 200,
    type: CreateResponseDto
  })
  create(@Body() request: CreateRequestDto): CreateResponseDto {
    return {
      id: 0,
      title: request.title
    };
  }
}
