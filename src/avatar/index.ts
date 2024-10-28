import { withInstall } from '../utils/with-install'
// @ts-expect-error 暂时忽略类型错误，因为 Avatar.vue 的类型定义不完整
import _Avatar from './Avatar.vue'

export const Avatar = withInstall(_Avatar)
export default Avatar

declare module 'vue' {
  export interface GlobalComponents {
    SAvatar: typeof Avatar
  }
}
