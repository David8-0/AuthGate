import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException, HttpException, HttpStatus } from '@nestjs/common';
import { tenantModel } from '../dtos/tenant.model';
import { TenantsService } from 'src/infrastructure/services/tenants.service';

@Controller('tenants')
export class TenantController {
  constructor(private readonly tenantsService: TenantsService) {}

  // @Post('signup')
  // async signUp(@Body() createTenantDto: tenantModel): Promise<tenantModel> {
  //   const { email } = createTenantDto;

  //   const existingTenant = await this.tenantsService.findByEmail(email);
  //   if (existingTenant) {
  //     throw new ConflictException('Email already in use. Please go to login.');
  //   }

  //   // if (password !== confirmPassword) {
  //   //   throw new ConflictException('Passwords do not match');
  //   // }

  //   const newTenant = new tenantModel();
  //   Object.assign(newTenant, createTenantDto);
  //   return this.tenantsService.create(newTenant);
  // }

  @Get()
  async findAll(): Promise<tenantModel[]> {
    return this.tenantsService.findAll();
  }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateTenantDto: UpdateTenantDto) {
//     return this.tenantService.update(+id, updateTenantDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.tenantService.remove(+id);
//   }
}