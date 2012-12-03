// http://stackoverflow.com/questions/4662641/how-do-i-verify-jquery-ajax-events-with-jasmine
// couldn't get the stackoverflow one to work quite right

// https://github.com/pivotal/jasmine/wiki/Spies
// this works to test webForms.ajax
describe('https://github.com/pivotal/jasmine/wiki/Spies', function() { 
    it('should test async call', function () {
        spyOn(webForms, 'ajax');
        var callback = webForms.testFunction('JASMINE!!!!'),
            callback = jasmine.createSpy();
        
        webForms.ajax(callback)
        expect(callback).not.toHaveBeenCalled();
        
        var someResponseData = 'foo';
        webForms.ajax.mostRecentCall.args[0](someResponseData);
        expect(callback).toHaveBeenCalledWith(someResponseData);
    
    });
});
