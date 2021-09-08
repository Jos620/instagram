import { defineComponent, defineNuxtMiddleware, reactive, useContext } from '@nuxtjs/composition-api'
import { User } from '~/types'
import { loginWithEmail, loginWithFacebook } from '~/vue/useAuth'

export default defineComponent({
  setup() {
    defineNuxtMiddleware(({ store, redirect }) => {
      if (store.getters.username) redirect('/')
    })

    const user: User = reactive({
      username: '',
      email: '',
      pass: '',
    })

    const { app, store, redirect } = useContext()

    const login = () => loginWithEmail(user, store, app.$cookiz, redirect)
    const loginFacebook = () => loginWithFacebook(store, app.$cookiz, redirect)

    return { user, login, loginFacebook }
  },
})
