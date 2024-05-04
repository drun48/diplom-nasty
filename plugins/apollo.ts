export default defineNuxtPlugin((nuxtApp) => {
  const { onLogout } = useApollo()
  try {
    const router = useRouter()
    nuxtApp.hook('apollo:error', async (error) => {
      console.error(error)
      if (error?.graphQLErrors && error?.graphQLErrors[0].message === 'jwt expired') {
        await onLogout()
        await router.push('/login')
      }
      if (error?.graphQLErrors && (error?.graphQLErrors[0].extensions.code === 'UNAUTHENTICATED')) {
        await router.push('/')
      }
    })
  }
  catch (e) {
    console.log(e)
  }
})
