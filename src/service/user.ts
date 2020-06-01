import { connection } from '../db';
import { User } from '../entities/User'

export class UserService {
  public async getAll() {
    const connect= await connection();
    const userRepository = connect.getRepository(User);
    const allUser = await userRepository.find();
    await connect.close();

    return {
      data: allUser,
    };
  }
}
