class NullCustomer extends Customer {
    isNull(): boolean {
      return true;
    }
    getPlan(): Plan {
      return new NullPlan();
    }

  }
  
  let customer = (order.customer != null) ?
    order.customer : new NullCustomer();
  
  plan = customer.getPlan();