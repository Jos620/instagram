import { MutationTree } from 'vuex'
import { User } from '~/types'

export interface State {
  user: User
}

export interface Getters {
  username: (s: State) => string
}

export enum Mutations {
  SET_USERNAME = 'SET_USERNAME',
  SET_USER_COOKIE = 'SET_USER_COOKIE',
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
  [Mutations.SET_USERNAME](s: State, p: string): void
}
