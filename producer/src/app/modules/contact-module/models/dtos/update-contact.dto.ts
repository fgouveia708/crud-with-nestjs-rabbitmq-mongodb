import { ApiProperty } from "@nestjs/swagger";


export class UpdateContactDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;
}


