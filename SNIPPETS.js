/**
 * SINGLE QUERY PARAMETERS NAVIGATION EXAMPLE 
 * http://localhost:4200/orders?type=priority 
 */

goOrders() {
    this.router.navigate(['/orders'], { queryParams: { type: 'priority' } });
}

/**
 * MULTI QUERY PARAMETER NAVIGATION EXAMPLE 
 * http://localhost:4200/orders?type=priority&shipping=1day
 * 
 * Note the quotes around the 'size-range' parameter.  If they
 * were not there the - would be interpreted as a minus sign operator.
 */

goOrders() {
    this.router.navigate(['/orders'], { queryParams: { type: 'priority', shipping: '1day' }, 'size-range': 'small-large' });
}
