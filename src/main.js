import { createApp } from 'vue'
import App from './App.vue'

createApp(App, { userName: 'YQ' }).mount('#app')
//第二个参数可以作为props传给APP组件
/*
interface Data {
  [key: string]: unknown
}

export type CreateAppFunction<HostElement> = (
  rootComponent: PublicAPIComponent,
  rootProps?: Data | null
) => App<HostElement>
*/