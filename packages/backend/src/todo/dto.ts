import { ApiModelProperty } from "@nestjs/swagger";

export class CreateRequestDto {
  @ApiModelProperty()
  readonly title: string;
}

export class CreateResponseDto {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly title: string;
}
