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
document.querySelectorAll('.call-to-action').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.pricing-card');
    const plan = card.querySelector('input[type="checkbox"]').dataset.plan;

    const planBase = pricingPlans[plan];
    const selectedAddOns = [];
    let totalUpfront = planBase.upfront;
    let totalMonthly = planBase.monthly;

    Object.entries(addOns[plan]).forEach(([className, cost]) => {
      const checkbox = card.querySelector(`.${className}`);
      if (checkbox && checkbox.checked) {
        totalUpfront += cost.upfront;
        totalMonthly += cost.monthly;
        selectedAddOns.push(`${className.replace('-', ' ')}: +$${cost.upfront}/$${cost.monthly}`);
      }
    });

    // Create modal
    const modal = document.createElement('div');
    modal.classList.add('pricing-modal');
    modal.innerHTML = `
      <div class="pricing-modal-content">
        <h2>Confirm Your Plan</h2>
        <p><strong>Plan:</strong> ${plan.charAt(0).toUpperCase() + plan.slice(1)}</p>
        <p><strong>Add-ons:</strong><br>${selectedAddOns.join('<br>') || 'None'}</p>
        <p><strong>Total:</strong> $${totalUpfront} upfront / $${totalMonthly} monthly</p>
        <button class="confirm-plan">Continue to Checkout</button>
        <button class="cancel-plan">Cancel</button>
      </div>
    `;
    document.body.appendChild(modal);

    // Modal behavior
    modal.querySelector('.cancel-plan').onclick = () => modal.remove();
    modal.querySelector('.confirm-plan').onclick = () => {
      alert("Redirecting to checkout..."); // Placeholder
      modal.remove();
      // Implement actual redirect here
    };
  });
});
.pricing-modal {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center;
  z-index: 1000;
}
.pricing-modal-content {
  background: white; padding: 30px; border-radius: 8px; max-width: 400px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3); text-align: center;
}
.pricing-modal-content button {
  margin: 10px; padding: 10px 20px;
}document.addEventListener('DOMContentLoaded', () => {
  // NEW LOGIC HERE
});
document.querySelectorAll('.call-to-action').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.pricing-card');
    const plan = card.querySelector('input[type="checkbox"]').dataset.plan;

    const planBase = pricingPlans[plan];
    const selectedAddOns = [];
    let totalUpfront = planBase.upfront;
    let totalMonthly = planBase.monthly;

    Object.entries(addOns[plan]).forEach(([className, cost]) => {
      const checkbox = card.querySelector(`.${className}`);
      if (checkbox && checkbox.checked) {
        totalUpfront += cost.upfront;
        totalMonthly += cost.monthly;
        selectedAddOns.push(`${className.replace('-', ' ')}: +$${cost.upfront}/$${cost.monthly}`);
      }
    });

    const modal = document.createElement('div');
    modal.classList.add('pricing-modal');
    modal.innerHTML = `
      <div class="pricing-modal-content">
        <h2>Confirm Your Plan</h2>
        <p><strong>Plan:</strong> ${plan.charAt(0).toUpperCase() + plan.slice(1)}</p>
        <p><strong>Add-ons:</strong><br>${selectedAddOns.join('<br>') || 'None'}</p>
        <p><strong>Total:</strong> $${totalUpfront} upfront / $${totalMonthly} monthly</p>
        <button class="confirm-plan">Continue to Checkout</button>
        <button class="cancel-plan">Cancel</button>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.cancel-plan').onclick = () => modal.remove();
    modal.querySelector('.confirm-plan').onclick = () => {
      window.location.href = "/checkout-page";
    };
  });
});
alert("Script loaded");

document.querySelectorAll('.call-to-action').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.pricing-card');
    const plan = card.querySelector('input[type="checkbox"]').dataset.plan;

    const planBase = pricingPlans[plan];
    const selectedAddOns = [];
    let totalUpfront = planBase.upfront;
    let totalMonthly = planBase.monthly;

    Object.entries(addOns[plan]).forEach(([className, cost]) => {
      const checkbox = card.querySelector(`.${className}`);
      if (checkbox && checkbox.checked) {
        totalUpfront += cost.upfront;
        totalMonthly += cost.monthly;
        selectedAddOns.push(`${className.replace('-', ' ')}: +$${cost.upfront}/$${cost.monthly}`);
      }
    });

    const modal = document.createElement('div');
    modal.classList.add('pricing-modal');
    modal.innerHTML = `
      <div class="pricing-modal-content">
        <h2>Confirm Your Plan</h2>
        <p><strong>Plan:</strong> ${plan.charAt(0).toUpperCase() + plan.slice(1)}</p>
        <p><strong>Add-ons:</strong><br>${selectedAddOns.join('<br>') || 'None'}</p>
        <p><strong>Total:</strong> $${totalUpfront} upfront / $${totalMonthly} monthly</p>
        <button class="confirm-plan">Continue to Checkout</button>
        <button class="cancel-plan">Cancel</button>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.cancel-plan').onclick = () => modal.remove();
    modal.querySelector('.confirm-plan').onclick = () => {
      window.location.href = "/checkout-page";
    };
  });
});
