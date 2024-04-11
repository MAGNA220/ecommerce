// Load existing reviews from local storage
window.addEventListener('DOMContentLoaded', function() {
    var savedReviews = localStorage.getItem('reviews');
    if (savedReviews) {
      document.getElementById('reviews').innerHTML = savedReviews;
    }
  });
  
  document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var rating = document.getElementById('rating').value;
    var comment = document.getElementById('comment').value;
  
    var review = document.createElement('div');
    review.classList.add('review');
    review.innerHTML = '<p><strong>Name:</strong> ' + name + '</p>' +
                       '<p><strong>Rating:</strong> ' + generateStarRating(rating) + '</p>' +
                       '<p><strong>Comment:</strong> ' + comment + '</p>';
  
    document.getElementById('reviews').appendChild(review);
    
    // Save reviews to local storage
   localStorage.setItem('reviews', document.getElementById('reviews').innerHTML);
  
    document.getElementById('reviewForm').reset();
  });
  
  function generateStarRating(rating) {
    var stars = '';
    for (var i = 0; i < 5; i++) {
      if (i < rating) {
        stars += '<i class="fas fa-star"></i>';
      } else {
        stars += '<i class="far fa-star"></i>';
      }
    }
    return stars;
  }
  
  
  