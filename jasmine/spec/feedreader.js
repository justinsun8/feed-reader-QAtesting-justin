/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('shows urls are defined', function () {
             for (var i=0; i < allFeeds.length; i++) {
                 expect(allFeeds[i].url).toBeDefined();
                 expect(allFeeds[i].url.length).not.toBe(0);
             }
         });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('shows names are defined', function () {
              for(i in allFeeds) {
                 expect(allFeeds[i].name).toBeDefined();
                 expect(allFeeds[i].name.length).not.toBe(0);
             }
         })

    });


    //New Test Suite called 'The Menu'
describe('The Menu', function () {


        /* A test that ensures the menu element is
         * hidden by default. Checks the menu-hidden class for true.
         */

         it('menu element hidden', function () {
             expect($('body').hasClass('menu-hidden')).toBe(true);
         })

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. upon first click, the
          * class 'menu-hidden' should appear. When closing, the class 'menu-hidden'
          * should disappear.
          */
         it('menu changes visibility', function() {
             $('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).toEqual(false);
             $('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).toEqual(true);
         })

});

    /* A new test suite named "Initial Entries" */
describe('Initial Entries', function() {

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        //Asynchronous request
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('ensures loadFeed complete, at least single entry element', function () {
            var entryNumber = $('.feed .entry').length;
            expect(entryNumber).toBeGreaterThan(0);
        });

    /* TODO: Write a new test suite named "New Feed Selection" */

describe("New Feed Selection", function() {
    var initialHtml;

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         //Asynchronous request
        beforeEach(function (done) {
            loadFeed(0, function () {
                initialHtml = $('.feed').html();

                loadFeed(1, function() {
                    done();
                })
            })
        })


        it('will load new feed', function (done) {
            var newHtml = $('.feed').html();
            expect(newHtml).not.toBe(initialHtml);
            done();
        });

         
        


    });
    });
}());
