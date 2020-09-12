import { Post } from "../models/post";
import { User } from "../models/user";

export interface IJsonPlaceHolderService {
  getPosts(): Promise<Post[]>;
  getUsers(): Promise<User[]>;
}
