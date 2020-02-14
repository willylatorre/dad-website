

import DefaultLayout from '~/layouts/Default.vue'
import GHeader from '~/components/GHeader.vue'
import '~/assets/styles/global.scss'

export default function(Vue, { router, head, isClient }) {
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)
	Vue.component('GHeader', GHeader)
}
