import { IUser } from './user'

export interface ITokenPayload {
  refreshToken: string,
  token: string,
  user: IUser,
}
