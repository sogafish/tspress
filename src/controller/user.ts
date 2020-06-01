import {
  Body,
  Controller,
  Get,
  Header,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from 'tsoa';
import { UserService } from '../service/user';

@Route('users')
export class UsersController extends Controller {
  @Get()
  @SuccessResponse('200')
  public getUser() {
    const userService = new UserService();

    return userService.getAll();
  }
}
