import Vue from 'vue'
import contentComponent from './components/contentComponent.vue'
import data from './info'
import datepicker from 'vuejs-datepicker'

new Vue({
	el: '#app',
	data: {
		tyc: data.tyc,
		state: {
			disabled: {
				to: data.departure_date,
				from: data.return_date
			}
		}
	},
	components: {
		contentComponent,
		datepicker
	}
})
