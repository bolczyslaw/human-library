export const translationEnglishConfig = ['$translateProvider', function($translateProvider) {

  $translateProvider.translations('en', {
    title: 'Human Library Services',
    mainMenu: {
      header: 'Human Library Services',
      admitBook: 'Add Human Book',
      startNewEdition: 'Start new edition',
      newEditionStarted: 'New edition started',
      exportLibrary: 'Archive current Human Library edition to file',
      importLibrary: 'Recover Human Library edition from archive file',
      humanLibraryRecovered: 'Human Library edition recovered',
      showAvailable: 'Show available Human Books in new window'
    },
    available: {
      header: 'Available Human Books',
      humanBooks: {
        helpHeader: 'Find title and pass it to a librarian'
      }
    },
    undoBubble: {
      undo: 'Undo'
    },
    manageBooks: {
      namePlaceholder: 'Name',
      titlePlaceholder: 'Title',
      actions: {
        return: 'Return',
        returned: 'Returned',
        rent: 'Loan',
        rented: 'Loaned',
        removed: 'Removed',
        makeUnavailable: 'Mark as unavailable',
        makeAvailable: 'Mark as available'
      }
    },
    book: {
      numberOfRentals: {
        prefix: 'Loaned',
        suffix: 'times'
      }
    },
    footer: {
      file: 'File bug report, leave suggestion or ask question'
    },
    search: {
      placeholder: 'Start typing to search'
    }
  });

}];
