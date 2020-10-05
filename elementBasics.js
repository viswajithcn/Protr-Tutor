//fisrt parameter - Test Suite Name(Protractor baby steps)
//Second parameter- function() - > will have all the it blocks 
describe('Protractor Element Demo', function() {
    it('Locators', function() {
//write raw protractor code
browser.get('http://juliemr.github.io/protractor-demo/');
element(by.model("first")).sendKeys("3");
element(by.model("second")).sendKeys("5");
element(by.id("gobutton")).click();
element(by.css("h2[class='ng-binding']")).getText().then(
    (value)=>{
        expect(value).toBe('8');
    }
);

expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('8');
    }) 
    it('Close Browser',function() {
//Second test case        

    })
})