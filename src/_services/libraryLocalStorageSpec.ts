import angular from 'angular';
import { humanLibraryModule } from '../';

describe('service libraryLocalStorage', function() {

  let libraryLocalStorage;
  let $windowMock;
  let librarySerializerMock;

  beforeEach(function() {

    $windowMock = {
      angular,
      document: {},
      localStorage: {}
    };

    librarySerializerMock = jasmine.createSpyObj('librarySerializer', ['serialize', 'deserialize']);

    angular.mock.module(humanLibraryModule, {
      $window: $windowMock,
      librarySerializer: librarySerializerMock
    });

    angular.mock.inject((_libraryLocalStorage_) => {
      libraryLocalStorage = _libraryLocalStorage_;
    });

  });

  describe('when storage is unavailable', function() {

    it('and loading should throw Local storage not available expection', function() {
      expect(libraryLocalStorage.load).toThrow(new Error('Local storage not available'));
    });

    it('and saving should throw Local storage not available expection', function() {
      expect(libraryLocalStorage.save).toThrow(new Error('Local storage not available'));
    });

  });

  describe('when storage is available', function() {

    beforeEach(function() {
      $windowMock.Storage = {};
    });

    it('should save library to local storage', function() {
      const library = {};
      const serializedLibrary = '{}';
      librarySerializerMock.serialize.and.returnValue(serializedLibrary);
      libraryLocalStorage.save(library);
      expect(librarySerializerMock.serialize).toHaveBeenCalledWith(library);
      expect($windowMock.localStorage.humanLibrary).toBe(serializedLibrary);
    });

    it('and humanLibrary is in localStorage should load library from local storage', function() {
      const library = {};
      $windowMock.localStorage.humanLibrary = '{}';
      librarySerializerMock.deserialize.and.returnValue(library);
      expect(libraryLocalStorage.load()).toBe(library);
      expect(librarySerializerMock.deserialize).toHaveBeenCalledWith($windowMock.localStorage.humanLibrary);
    });

    it('and humanLibrary is NOT in localStorage load should return undefined', function() {
      expect(libraryLocalStorage.load()).toBeUndefined();
      expect(librarySerializerMock.deserialize).not.toHaveBeenCalled();
    });

  });

});
