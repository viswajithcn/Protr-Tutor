//fisrt parameter - Test Suite Name(Protractor baby steps)
//Second parameter- function() - > will have all the it blocks 
describe('Protractor Element Demo', function() {
    it('Locators', function() {
//write raw protractor code
browser.get('http://juliemr.github.io/protractor-demo/');
element(by.model("first")).sendKeys("3");
element(by.model("second")).sendKeys("5");
element(by.id("gobutton")).click();
element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(
    (value)=>{console.log(value);}
);
element(by.model("first")).sendKeys("3");
element(by.model("second")).sendKeys("5");
element(by.model('operator')).element(by.css("option:nth-child(4)")).click();
element(by.id("gobutton")).click();
expect(element(by.repeater('result in memory')).element(by.css("td:nth-child(3)"))
    .getText()).toBe((3*5).toString());
    

    }) 
    
})