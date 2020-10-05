//fisrt parameter - Test Suite Name(Protractor baby steps)
//Second parameter- function() - > will have all the it blocks 
describe('Protractor baby steps', function() {
    it('Open Website', function() {
//write raw protractor code
browser.get('https://angularjs.org');
browser.get('http://juliemr.github.io/protractor-demo/').then(
    () => {
        console.log("I am the next step to execute");
        browser.sleep(6000).then(
            ()=>{
                console.log("I am the last step to execute");
                
            }
        );
        
    },
    (error)=> {
        console.log(error);
    }
)
    }) 
    it('Close Browser',function() {
//Second test case        

    })
})