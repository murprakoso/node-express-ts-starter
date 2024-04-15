export const appRunningMessage = (version: string) => {
  return `🚀 Server "${
    process.env.APP_NAME
  }" is running on ${process.env.APP_URL?.replace(
    '${APP_PORT}',
    process.env.APP_PORT ?? '3000'
  )} (version: ${version}) 🎉`
}
