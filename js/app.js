/* (async function() {
	let mediaStream = await navigator.mediaDevices.getUserMedia({
		video: false,
		audio: true
	});
	document.querySelector("audio").srcObject = mediaStream;
})();
 */

new Vue({
	el: "#vueapp",
	data: {
		audoinputvices: [],
		audioSelectedIndex: 0
	},
	mounted() {
		this.initvueapp();
	},

	methods: {
		async initvueapp() {
			let devices = await navigator.mediaDevices.enumerateDevices();
			let audioinputevices = devices.filter(value => value.kind === "audioinput");
			this.audoinputvices.length = 0;
			this.audoinputvices.push(...audioinputevices);
			this.showSelectedDevices();
		},
		async showSelectedDevices(){
			let deviceInfo = this.audoinputvices[this.audioSelectedIndex];
			let stream = await navigator.mediaDevices.getUserMedia({vedis:false,audio:true});
			this.$refs.audio.srcObject = stream;
		}
	},
	watch:{
		audioSelectedIndex(val,odlVal){
			console.log(val);
		}
	}
});
