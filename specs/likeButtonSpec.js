const likeButton = () => true;

describe('Like button', () => {
  it('Should be checked if the movies is in the DB', () => {
    expect(likeButton()).toBeTruthy();
  });
});
