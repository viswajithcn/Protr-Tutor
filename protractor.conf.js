exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec1.js'],
    capabilities: 
      {
        browserName: 'chrome',
        chromeOptions: { args: ["--disable-dev-shm-usage",
        'disable-dev-shm-usage',
    'no-sandbox' ] 
},


      },
    //   chromeDriver : '/usr/local/bin/chromedriver'  

  };
