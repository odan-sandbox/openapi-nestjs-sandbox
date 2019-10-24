import { Controller, Get } from "@nestjs/common";

import { ApiModelProperty, ApiResponse } from "@nestjs/swagger";

export class HelloResponseDto {
  @ApiModelProperty({ example: "poyo" })
  readonly message: string;
}

@Controller("hello")
export class HelloController {
  @Get()
  @ApiResponse({
    status: 200,
    type: HelloResponseDto
  })
  index(): HelloResponseDto {
    return { message: "hello" };
  }
}
