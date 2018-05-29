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
 */

goOrders() {
    this.router.navigate(['/orders'], { queryParams: { type: 'priority', shipping: '1day' } });
}
