import { User } from "../type";

interface IUserRepository {
    addUser(user: User): void;
    getUser(userId: number): User;
    updateUser(updatedUser: User): void;
    deleteUser(userId: number): void;
}

export default IUserRepository;