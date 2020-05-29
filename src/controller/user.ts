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
import { IUser } from '../model/user';
import { UserService } from '../service/user';

@Route('users')
export class UsersController extends Controller {
  @Get('{userId}')
  @SuccessResponse('200')
  public getUser(
    @Path() userId: number,
    @Query() name?: string,
  ): IUser {
    const userService = new UserService();
    return userService.get(userId, name);
  }
}
