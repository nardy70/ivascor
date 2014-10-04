function Ivascor(tot, iva) {
		value = (tot*100)/(100+iva);
		return 'La cifra di ' + tot + ' scorporata del '
		+ iva + '% ' + 'è di: ' + value.toFixed(2)
};

exports.ivascor = Ivascor;
