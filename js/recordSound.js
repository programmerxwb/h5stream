new Vue({
	el: "#vueapp",
	data:{
		currentWebmDate:null
	},
	mounted() {
		this._initApp();
	},
	methods: {
		async _initApp() {
			this._stream = await navigator.mediaDevices.getUserMedia({
				audio: true,
				video: true
			});
			this.$refs.preview.srcObject = this._stream;
			this._recorder = new MediaRecorder(this._stream, {
				mimeType: "video/webm;codes=h264"
			});
			this._recorder.ondataavailable = this.reorder_dataAvailableandler.bind(this);
		},
		reorder_dataAvailableandler(e) {
			console.log(e)
			this.currentWebmDate = e.data;
		},
		btnRecordClicked() {
			this._recorder.start();
		},
		btnPauseClicked() {
			this._recorder.pause();
		},
		btnResumeClicked() {
			this._recorder.resume();
		},
		btnStopClicked() {
			this._recorder.stop();
		},
		btnPlayClicked() {
			this.$refs.player.src = URL.createObjectURL(this.currentWebmDate);
		}
	}
});
