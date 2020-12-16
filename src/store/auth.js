import firebase from 'firebase/app'

export default{
	actions: {
		async login({dispatch, commit}, {email, password}){
			try{
				await firebase.auth().signInWithEmailAndPassword(email, password)
			} catch (e) {
				commit('setError', e)
				throw e
			}
		},
		async register({dispatch, commit}, {email, password, name, phone}){
			try{
				await firebase.auth().createUserWithEmailAndPassword(email, password)
				const uid = await dispatch('getUid')
				await firebase.database().ref(`/users/${uid}/info`).set({
					bill: 1000,
					name: name,
					phone: phone,
					email: email
				})
			} catch (e) {
				commit('setError', e)
				throw e
			}
		},
		getUid(){ //id юзера який зайшов в систему
			const user = firebase.auth().currentUser
			return user ? user.uid : null
		},
		async logout({commit}){ //вихід
			await firebase.auth().signOut()
			commit('clearInfo')
		}
	}
}
