import { User } from "../models/user";
import { IJsonPlaceHolderService } from "./iJsonPlaceHolderService";

export class JsonPlaceHolderFacade {
  constructor(private _service: IJsonPlaceHolderService) {}

  async getUser(userId: number): Promise<User | null | undefined> {
    let allUsers = await this._service.getUsers();
    const currentUser = allUsers.find((user) => user.id === userId);
    let allPosts = await this._service.getPosts();
    if (currentUser) {
      currentUser.posts = allPosts.filter((post) => post.userId === userId);
      return currentUser;
    } else {
      return null;
    }
  }
}
