import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ContactService } from '../services/contact.service';

@Controller('v1/contact')
@ApiTags('Contact')
export class ContactController {
    constructor(public service: ContactService) {
    }

    @Get()
    async getAll(@Res() res) {
        const result = await this.service.getAll();
        if (result) {
            return res.status(HttpStatus.OK).json(result);
        } else {
            return res.status(HttpStatus.BAD_REQUEST).json('Error');
        }
    }

    @Get('verify-email')
    async verifyEmail(@Query('email') email: string, @Res() res) {
        const result = await this.service.verifyEmail(email);
        return res.status(HttpStatus.OK).json({ exist: result });
    }

    @Get('get-by-email')
    async getByEmail(@Query('email') email: string, @Res() res) {
        const result = await this.service.getByEmail(email);
        if (result) {
            return res.status(HttpStatus.OK).json(result);
        } else {
            return res.status(HttpStatus.NOT_FOUND).json('Not found');
        }
    }


    @Get(':id')
    async getById(@Param('id') id: string, @Res() res) {
        const result = await this.service.getById(id);

        if (result) {
            return res.status(HttpStatus.OK).json(result);
        } else {
            return res.status(HttpStatus.BAD_REQUEST).json('Error');
        }
    }
}
