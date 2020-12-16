export default function dateFilter(value, format = 'date'){
	var options = {};

	if(format.includes('date')) {
		options.day = 'numeric'
		options.month = 'long'
		options.year = 'numeric'
	}

	if(format.includes('time')) {
		options.hour = 'numeric'
		options.minute = 'numeric'
		options.second = 'numeric'
	}

	return new Intl.DateTimeFormat('ua-UA', options).format(value);
}