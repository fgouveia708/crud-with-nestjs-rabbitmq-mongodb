import { Body, Controller, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateContactDto } from '../models/dtos/create-contact.dto';
import { UpdateContactDto } from '../models/dtos/update-contact.dto';
import { ContactService } from '../services/contact.service';

@Controller('v1/contact')
@ApiTags('Contact')
export class ContactController {
    constructor(private service: ContactService) { }

    @Post()
    async create(@Body() body: CreateContactDto, @Res() res) {
        const result = await this.service.create(body);

        if (result) {
            return res.status(HttpStatus.OK).json('Created');
        } else {
            return res.status(HttpStatus.BAD_REQUEST).json('Error');
        }
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: UpdateContactDto, @Res() res) {

        const result = await this.service.update(id, body);

        if (result) {
            return res.status(HttpStatus.OK).json('Updated');
        } else {
            return res.status(HttpStatus.BAD_REQUEST).json('Error');
        }
    }

    @Patch(':id')
    async delete(@Param('id') id: string, @Res() res) {

        const result = await this.service.delete(id);

        if (result) {
            return res.status(HttpStatus.OK).json('Deleted');
        } else {
            return res.status(HttpStatus.BAD_REQUEST).json('Error');
        }
    }
}
