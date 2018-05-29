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

/**
 * PRESERVING QUERY PARAMETERS NAVIGATION EXAMPLE 
 * http://localhost:4200/orders?type=priority&shipping=1day
 * 
 * Suppose we are at the above URL and we wish to preserve these
 * query parameters when navigating to products.
 * 
 * http://localhost:4200/products?type=priority&shipping=1day
 * 
 */

goProducts() {
    this.router.navigate(['/products'], { queryParamsHandling: 'preserve' });
}

  /**
 * MERGING QUERY PARAMETERS NAVIGATION EXAMPLE 
 * http://localhost:4200/orders?type=priority&shipping=1day
 * 
 * Suppose we are at the above URL and we wish to merge these
 * query parameters with an elecronics filter parameter navigating to products.
 * 
 * http://localhost:4200/products?type=priority&shipping=1day&filter=electronics
 * 
 */

goProducts() {
    this.router.navigate(['/products'], { queryParams: { filter: 'electronics'}, queryParamsHandling: 'merge' });    
}