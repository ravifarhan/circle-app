export interface IThread {
  id?: number
  content?: string
  images?: IThreadImage[]
  userId?: number
  threadId?: number
  author?: IUser
  createdAt?: string
}

interface IThreadImage {
  image?: string
}

export interface IUser {
  id: number
  fullname: string
  username: string
  email: string
  // profile: IProfile
}

export interface IProfile {
  bio?: string
  avatar?: string
  cover?: string
  user: IUser
}