import axios from "axios";
import { IJsonPlaceHolderService } from "./iJsonPlaceHolderService";
import { Post } from "../models/post";
import { User } from "../models/user";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export class JsonPlaceHolderService implements IJsonPlaceHolderService {
  private _baseUrl = "https://jsonplaceholder.typicode.com";
  private _endpoints = {
    posts: `${this._baseUrl}/posts`,
    users: `${this._baseUrl}/users`,
  };
  private _getEntity<T>(url: string): Promise<T[]> {
    return axios.get(url).then((response) => response.data);
  }
  async getPosts(): Promise<Post[]> {
    return this._getEntity(this._endpoints.posts);
  }

  async getUsers(): Promise<User[]> {
    return this._getEntity(this._endpoints.users);
  }
}
