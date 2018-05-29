/** http://localhost:4200/orders?order=priority */

goOrders() {
    this.router.navigate(['/orders'], { queryParams: { order: 'priority' } });
}