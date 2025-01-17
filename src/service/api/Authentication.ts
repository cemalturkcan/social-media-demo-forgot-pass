import { BaseService } from '../../lib/BaseService.ts'

export async function forgotPassword(data: ForgotPasswordRequest) {
  return BaseService({
    method: 'POST',
    url: '/users/forgot-password-step-two',
    data,
  })
}
