export default{
	install(Vue, options){

		Vue.prototype.$message = function(text, type){
			var toasts = document.querySelector('.toastswrap'),
				toast = document.createElement('li');
				toast.innerHTML = `${type}: ${text}`
				toast.classList.add(type);
    			toasts.appendChild(toast);

			setTimeout(function(){
				toasts.removeChild(toasts.firstChild)
			}, 3000)
		}
		
	}
}