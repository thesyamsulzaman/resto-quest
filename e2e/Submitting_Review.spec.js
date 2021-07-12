Feature('Submitting Review');

Before(({ I }) => {
  I.amOnPage('/#/restaurants');

  const firstElement = locate('.restaurant-card-body-name').first();
  I.click(firstElement);
});

Scenario('Fill up nothing and submit', ({ I }) => {
  I.click('Send');
  I.see('Please fill up the forms', '#snackbar span');
});

Scenario('Fill up name field only ', ({ I }) => {
  I.fillField('Name', 'Sam Parker');
  I.click('Send');
  I.see('Please fill up the forms', '#snackbar span');
});

Scenario('Fill up review field only ', ({ I }) => {
  I.fillField('Review', 'YNTKTS');
  I.click('Send');
});

Scenario('Fill up both field', ({ I }) => {
  I.fillField('Name', 'Sam Parker');
  I.fillField('Review', 'YNTKTS');
  I.click('Send');
  I.see('Review submitted', '#snackbar span');
  I.dontSee('Review Submitting failed', '#snackbar span');
});
