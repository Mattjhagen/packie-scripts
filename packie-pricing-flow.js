document.addEventListener('DOMContentLoaded', () => {
  const pricingPlans = {
    starter: { upfront: 3499, monthly: 35 },
    professional: { upfront: 7499, monthly: 129 },
    enterprise: { upfront: 12499, monthly: 350 }
  };

  const addOns = {
    'starter': {
      'google-suite-checkbox': { upfront: 7, monthly: 14 },
      'seo-checkbox': { upfront: 25, monthly: 25 }
    },
    'professional': {
      'google-suite-checkbox': { upfront: 15, monthly: 22 },
      'seo-checkbox': { upfront: 50, monthly: 35 }
    },
    'enterprise': {
      'google-suite-checkbox': { upfront: 35, monthly: 35 },
      'seo-checkbox': { upfront: 75, monthly: 50 }
    }
  };

  document.querySelectorAll('.pricing-card').forEach(card => {
    const plan = card.querySelector('input[type="checkbox"]').dataset.plan;
    const priceUpfront = card.querySelector('.price-upfront');
    const priceMonthly = card.querySelector('.price-monthly');

    const updateTotals = () => {
      let totalUpfront = pricingPlans[plan].upfront;
      let totalMonthly = pricingPlans[plan].monthly;

      Object.entries(addOns[plan]).forEach(([className, cost]) => {
        const checkbox = card.querySelector(`.${className}`);
        if (checkbox && checkbox.checked) {
          totalUpfront += cost.upfront;
          totalMonthly += cost.monthly;
        }
      });

      priceUpfront.textContent = `$${totalUpfront} upfront`;
      priceMonthly.textContent = `$${totalMonthly}/month`;
    };

    card.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', updateTotals);
    });
  });
});
