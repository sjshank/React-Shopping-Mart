export const filterOutProducts = (state, action) => {
    const _filterCriteria = action.filterCriteria;
    let _products = [];
    const _garmentProducts = JSON.parse(localStorage.getItem('garmentProducts'));
    if (_filterCriteria.filterType === 'deliveryType') {
        if (_filterCriteria.filterValue !== '') {
            const _isFreeShipping = _filterCriteria.filterValue === 'freeShipping' ? true : false;
            _products = _garmentProducts.filter(product => {
                if (_isFreeShipping) {
                    return product && product[_filterCriteria.fieldName] && (product[_filterCriteria.fieldName] === true);
                } else {
                    return product && !product[_filterCriteria.fieldName] && (product[_filterCriteria.fieldName] === false);
                }
            })
        } else {
            _products = [..._garmentProducts];
        }
    } else if (_filterCriteria.filterType === 'orderBy') {
        const _unSortedProducts = [...state.products];
        if (_filterCriteria.filterValue !== '') {
            _unSortedProducts.sort((a, b) => {
                if (_filterCriteria.filterValue === 'desc') {
                    return b[_filterCriteria.fieldName] - a[_filterCriteria.fieldName];
                } else if (_filterCriteria.filterValue === 'asc') {
                    return a[_filterCriteria.fieldName] - b[_filterCriteria.fieldName];
                }
            });
            _products = [..._unSortedProducts];
        } else {
            _products = [..._garmentProducts];
        }
    }
    else {
        _products = [..._garmentProducts];
    }
    return [..._products];
};

