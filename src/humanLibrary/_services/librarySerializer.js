'use strict';

/**
 * @returns {LibrarySerializer}
 * @ngInject
 */
function librarySerializerServiceFactory($window, Library, Book, Rental) {

  function LibrarySerializer() {

    this.serialize = function(library) {
      return $window.angular.toJson(library);
    };

    this.deserialize = function(libraryJson) {

      var library = $window.angular.fromJson(libraryJson);
      var libraryDeserialized = new Library();

      $window.angular.extend(libraryDeserialized, library);
      libraryDeserialized.startDate = new Date(libraryDeserialized.startDate);

      $window.angular.forEach(libraryDeserialized.books, function(book, bookIndex) {

        var bookModel = new Book();

        $window.angular.extend(bookModel, book);

        $window.angular.forEach(bookModel.rentals, function(rental, rentalIndex) {
          this[rentalIndex] = $window.angular.extend(new Rental(), rental);
        }, bookModel.rentals);

        this[bookIndex] = bookModel;

      }, libraryDeserialized.books);

      return libraryDeserialized;

    };

  }

  return new LibrarySerializer();

}

module.exports = librarySerializerServiceFactory;
