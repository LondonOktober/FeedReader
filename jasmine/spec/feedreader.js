$(function() {
  // Test Suite named "RSS Feeds"
  describe('RSS Feeds', function() {
    // Test1 - Ensures allFeeds are defined.
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    // Test2 - Loops through each feed in the allFeeds object and ensures it has a URL defined and not empty.
    it('each url is defined', function() {
      for (let feed of allFeeds) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      }
    });

    // Test3 - Loops through each feed in the allFeeds object and ensures it has a name defined and is not empty.
    it('each feed is defined and has a name', function() {
      for (let feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }
    });
  });

  // Test Suite named "The Menu"
  describe("The Menu", function() {
    // Test1 - Ensures the menu is hidden by default.
    it('is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    // Test2 - Ensures the menu changes visibility when the menu icon is clicked.
    it('toggles visibility when icon is clicked', function() {
      let body = document.querySelector('body');
      let menu = document.querySelector('.menu-icon-link');
      // Menu Visible
      menu.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      // Menu Hidden
      menu.click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  // Test Suite named "Initial Entries"
  describe("Initial Entries", function() {
    // Test1 - Ensures when the loadFeed function is called and completes its work.
    beforeEach(function(done) {
      loadFeed(0, done);
    });
    it('has completed work', function() {
      let feed = document.querySelector('.feed');
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });

  // Test Suite named "New Feed Selection"
  describe("New Feed Selection", function() {
    let feed = document.querySelector('.feed');
    let oldFeed = [];
    // Test1 - Ensures when a new feed is loaded the content changes.
    beforeEach(function(done) {
      loadFeed(0);
      Array.from(feed.children).forEach(function(entry) {
        oldFeed.push(entry.innerText);
      });
      loadFeed(1, done);
    });
    it('content has changed', function() {
      Array.from(feed.children).forEach(function(entry, index) {
        expect(entry.innerText === oldFeed[index]).toBe(false);
      });
    });
  });
});
