import { AccessArgs } from 'payload'

export default function admin(args: AccessArgs) {
  const roles = args.req.user?.roles ?? []
  return roles.includes('admin')
}
