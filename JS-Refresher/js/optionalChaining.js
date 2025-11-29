
const book2 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  reviews: {
    goodreads: {
      reviewsCount: 450
    },
    libraryanything: {
      reviewsCount: 362
    }
  }
};

const book3 = {
  title: "1984",
  author: "George Orwell",
  reviews: {
    goodreads: {
      reviewsCount: 1250
    }
  }
};

function getTotalReviewCount(book) {
    const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
    const libraryanything = book.reviews?.libraryanything?.reviewsCount ?? 0;
    return goodreads + libraryanything;
  }
  
  console.log(getTotalReviewCount(book2)); // 812
  console.log(getTotalReviewCount(book3)); // Works safely, returns only Goodreads count