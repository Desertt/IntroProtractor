//Ornek

describe('Protractor Demo App', function () {
    //#region Defines
    var isim = element(by.xpath('//*[@id="mat-input-0"]'));
    var sifre = element(by.xpath('//*[@id="mat-input-1"]'));
    var loginbutton = element(by.xpath('//*[@id="submitButton"]'));
    var detailSearchbutton = element(by.xpath('//*[@id="mat-expansion-panel-header-0"]/span/mat-panel-title'));
    var sleepTimeOut = 10000;
    var sleepTimeOutLong = 10000;
    var sleepTimeOutLittle = 1000;
    var selectDistrict = element(by.xpath('//*[@id="mat-select-0"]/div/div[1]/span')); 
    var selectDistrictCombobox = element(by.xpath('//*[@id="mat-select-0"]/div/div[2]/div'));
    var selectCounty = element(by.xpath('//*[@id="mat-select-25"]/div/div[1]/span'));
    var selectCountyCombobox = element(by.xpath('//*[@id="mat-option-272"]/span'));
    var selectWorkCategory = element(by.xpath('//*[@id="mat-select-1"]/div/div[1]/span'));
    var selectWorkCategoryCb = element(by.xpath("//span[@class='mat-option-text'][contains(text(),'Tümü')]"));
    var selectType = element(by.xpath('//*[@id="mat-select-2"]/div/div[1]/span'));
    var selectTypeCb = element(by.xpath("//span[@class='mat-option-text'][contains(text(),'Tümü')]"));
    var selectWorkType = element(by.xpath('//*[@id="mat-select-3"]/div/div[1]/span'));
    var selectWorkTypeCb = element(by.xpath("//span[@class='mat-option-text'][contains(text(),'Tümü')]"));
    var selectComplatintSource = element(by.xpath('//*[@id="mat-select-4"]/div/div[1]/span'));
    var selectComplatintSourceCb = element(by.xpath("//span[@class='mat-option-text'][contains(text(),'Tümü')]"));
    var selectRegion = element(by.xpath('//*[@id="mat-select-5"]/div/div[1]/span'));
    var selectRegionCb = element(by.xpath("//span[@class='mat-option-text'][contains(text(),'Tümü')]"));
    var detailSearchButton = element(by.xpath('//*[@id="cdk-accordion-child-0"]/div/div/button/span'));
    
    //#endregion    

    //#region Functions
    beforeEach(function () {
        browser.get('https://belplas.rotaban.org/login');
        browser.waitForAngularEnabled(false);//Angular js Kontrolü
        browser.driver.manage().window().maximize();
        browser.sleep(sleepTimeOutLittle);
    });

    it('Belplas Otomatik Login', function () {
        isim.sendKeys('a');
        sifre.sendKeys('1');
        loginbutton.click();
        detailSearchbutton.click();
        browser.sleep(sleepTimeOutLong);
        selectDistrict.click();
        browser.sleep(sleepTimeOutLittle);
        selectDistrictCombobox.click();
        browser.sleep(sleepTimeOutLittle);
        selectCounty.click();
        browser.sleep(sleepTimeOutLittle);
        selectCountyCombobox.click();
        browser.sleep(sleepTimeOutLittle);
        selectWorkCategory.click();
        browser.sleep(sleepTimeOutLittle);
        selectWorkCategoryCb.click();
        browser.sleep(sleepTimeOutLittle);
        selectType.click();
        browser.sleep(sleepTimeOutLittle);
        selectTypeCb.click();
        browser.sleep(sleepTimeOutLittle);
        selectWorkType.click();
        browser.sleep(sleepTimeOutLittle);
        selectWorkTypeCb.click();
        browser.sleep(sleepTimeOutLittle);
        selectComplatintSource.click();
        browser.sleep(sleepTimeOutLittle);
        selectComplatintSourceCb.click();
        browser.sleep(sleepTimeOutLittle);
        selectRegion.click();
        browser.sleep(sleepTimeOutLittle);
        selectRegionCb.click();
        detailSearchButton.click();
        browser.sleep(sleepTimeOut);
        

    });

    
    //#endregion
    
  
});

