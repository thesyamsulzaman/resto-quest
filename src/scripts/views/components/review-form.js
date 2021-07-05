/* eslint-disable class-methods-use-this */
class ReviewForm extends HTMLElement {
  connectedCallback() {
    this.addEventListener('submit', (event) =>
      this._SubmitEvent(event)
    );
    this.render();
  }

  set submitEvent(event) {
    this._SubmitEvent = event;
    this.render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
  }

  get name() {
    return this.querySelector('#name').value;
  }

  get review() {
    return this.querySelector('#review').value;
  }

  set name(newValue) {
    this.querySelector('#name').value = newValue;
  }

  set review(newValue) {
    this.querySelector('#review').value = newValue;
  }

  get getRestaurant() {
    return this._restaurant;
  }

  render() {
    this.innerHTML = `     
      <form method="POST">
        <div class="form-group">
          <label for="name" class="form-label">Name</label>
          <input type="text" id="name" name="name" class="form-control" />
        </div>
        <div class="form-group">
          <label for="review" class="form-label">Review</label>
          <textarea class="form-control" id="review" name="review"></textarea>
        </div>
        <div class="form-group">
          <input type="submit" value="Send" class="submit-button" />
        </div>
      </form>      
    `;
  }
}

window.customElements.define('review-form', ReviewForm);
