
document.addEventListener('DOMContentLoaded', () => {
    const plans = document.querySelectorAll('.pricing-card');

    plans.forEach(card => {
        const checkboxes = card.querySelectorAll('input[type="checkbox"]');
        const upfrontEl = card.querySelector('.price-upfront');
        const monthlyEl = card.querySelector('.price-monthly');

        const baseUpfront = parseFloat(upfrontEl.textContent.replace(/[^\d.]/g, ''));
        const baseMonthly = parseFloat(monthlyEl.textContent.replace(/[^\d.]/g, ''));

        function updatePrice() {
            let totalUpfront = baseUpfront;
            let totalMonthly = baseMonthly;

            checkboxes.forEach(box => {
                if (box.checked) {
                    const tooltip = box.parentElement.querySelector('.tooltip').textContent;
                    const [upfrontText, monthlyText] = tooltip.match(/\d+/g).map(Number);
                    totalUpfront += upfrontText;
                    totalMonthly += monthlyText;
                }
            });

            upfrontEl.textContent = `$${totalUpfront.toLocaleString()} upfront`;
            monthlyEl.textContent = `$${totalMonthly}/month`;
        }

        checkboxes.forEach(box => {
            box.addEventListener('change', updatePrice);
        });

        updatePrice();
    });
});
