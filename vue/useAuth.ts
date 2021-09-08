import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@firebase/auth'
import { Store } from 'vuex/types'
import { NuxtCookies } from 'cookie-universal-nuxt'
import { Mutations } from '~/store/types'
import { User } from '~/types'
import { auth } from './useApp'

export const loginWithEmail = async (
  { email, pass, username }: User,
  store: Store<any>,
  cookieProvider: NuxtCookies,
  redirect: Function
) => {
  // Validate email and password ---------------------------------------------|
  if (!email || !pass) return alert('Email or password not defined')

  try {
    // Try to sign in with Firebase ------------------------------------------|
    const query = await signInWithEmailAndPassword(auth, email, pass)

    // Update Vuex and cookie ------------------------------------------------|
    store.commit(Mutations.SET_USERNAME, query.user.displayName)
    cookieProvider.set('username', query.user.displayName)

    // Send user to home -----------------------------------------------------|
    redirect('/')
  } catch (err: any) {
    // Verify the type of the error ------------------------------------------|
    if (err.code !== 'auth/user-not-found') return alert(err.message)
    // Validate username -----------------------------------------------------|
    if (!username) return alert('Username not defined')

    // Create the user with Firebase -----------------------------------------|
    const query = await createUserWithEmailAndPassword(auth, email, pass)
    updateProfile(query.user, {
      displayName: username,
    })

    alert(`User ${username} successfully created, try to log in now`)
  }
}

export const loginWithFacebook = async (store: Store<any>, cookieProvider: NuxtCookies, redirect: Function) => {
  alert('Facebook login is currently unavailable')
}
