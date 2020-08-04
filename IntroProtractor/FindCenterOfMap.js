//Haritanın merkez noktasını bulacağım.
describe('Protractor Demo App', function () {
    //#region Defines

    var userName = element(by.xpath("//input[@id='username']"));
    var password = element(by.xpath('/html/body/div/div[2]/div/form/div[3]/div/input'));
    var loginButton = element(by.xpath('//*[@id="submitButton"]'));
    // var checkRememberMeTrue = element(by.xpath("//label[@class='form-check-label']"));
    var searchMain = element(by.xpath('//*[@id="W01"]'));
    var selectAdressSearch = element(by.xpath('//*[@id="W0101"]'));
    var selectHierarchicalAdressSearch = element(by.xpath('//*[@id="W010101"]/span'));
    var selectProvince = element(by.xpath('//*[@id="il"]/option[2]'));
    var goToProvince = element(by.xpath('//*[@id="Submit1"]'));
    var selectDistrict = element(by.xpath('//*[@id="ilce"]'));
    var selectDistrictCb = element(by.xpath("//option[contains(text(),'UBAT')]"));
    var goToDistrict = element(by.xpath("//div[contains(@class,'scroll scroll4')]//div[2]//div[3]//input[1]"));
    var selectCounty = element(by.xpath('//*[@id="mahalle"]'));
    var selectCountyCb = element(by.xpath("//select[@id='mahalle']//option[5]"));
    var goToCounty = element(by.xpath("//div[3]//div[3]//input[1]")); 

    var selectRoad = element(by.xpath('//*[@id="yol"]'));
    var selectRoadCb = element(by.xpath("//option[contains(text(),'5003. Sk.')]"));
    var goToRoad = element(by.xpath("//div[@id='modals']//div[4]//div[3]//input[1]"));

    var selectBuildingEntrance = element(by.xpath('//*[@id="binagiris"]'));
    var selectBuildingEntranceCb = element(by.xpath("//select[@id='binagiris']//option[4]"));
    var goToBuildingEntrance = element(by.xpath('//*[@id="Submit1"]'));


    var sleepTimeOut = 10000;
    var sleepTimeOutLong = 100000;
    var sleepTimeOutLittle = 1000;
    //var selectDistrict = element(by.xpath('//*[@id="mat-select-0"]/div/div[1]/span'));
    //var selectDistrictCombobox = element(by.xpath('//*[@id="mat-select-0"]/div/div[2]/div'));
    //var selectCounty = element(by.xpath('//*[@id="mat-select-25"]/div/div[1]/span'));
    //var selectCountyCombobox = element(by.xpath('//*[@id="mat-option-272"]/span'));
    //var selectWorkCategory = element(by.xpath('//*[@id="mat-select-1"]/div/div[1]/span'));
    //var selectWorkCategoryCb = element(by.xpath("//span[@class='mat-option-text'][contains(text(),'Tümü')]"));
    //var selectType = element(by.xpath('//*[@id="mat-select-2"]/div/div[1]/span'));
    //var selectTypeCb = element(by.xpath("//span[@class='mat-option-text'][contains(text(),'Tümü')]"));
    //var selectWorkType = element(by.xpath('//*[@id="mat-select-3"]/div/div[1]/span'));
    //var selectWorkTypeCb = element(by.xpath("//span[@class='mat-option-text'][contains(text(),'Tümü')]"));
    //var selectComplatintSource = element(by.xpath('//*[@id="mat-select-4"]/div/div[1]/span'));
    //var selectComplatintSourceCb = element(by.xpath("//span[@class='mat-option-text'][contains(text(),'Tümü')]"));
    //var selectRegion = element(by.xpath('//*[@id="mat-select-5"]/div/div[1]/span'));
    //var selectRegionCb = element(by.xpath("//span[@class='mat-option-text'][contains(text(),'Tümü')]"));
    //var detailSearchButton = element(by.xpath('//*[@id="cdk-accordion-child-0"]/div/div/button/span'));

    //#endregion    

    //#region Functions 
    beforeEach(function () {
        browser.get('http://10.46.1.128/PowerNetMaestro//Account/Login');
        browser.waitForAngularEnabled(false);//Angular js Kontrolü
        browser.driver.manage().window().maximize();
        browser.sleep(sleepTimeOutLittle); 
    });

    it('Find Center Of Map', function () {
        userName.sendKeys('edabis.test');
        browser.sleep(sleepTimeOutLittle);
        password.sendKeys('t');
        browser.sleep(sleepTimeOutLittle);
        loginButton.click();
        browser.sleep(sleepTimeOutLittle);
        searchMain.click();
        browser.sleep(sleepTimeOutLittle);
        selectAdressSearch.click();
        browser.sleep(sleepTimeOutLittle);
        selectHierarchicalAdressSearch.click();
        browser.sleep(sleepTimeOutLittle);
        goToProvince.click();
        browser.sleep(sleepTimeOutLittle);
        selectProvince.click();
        browser.sleep(sleepTimeOutLittle);
        selectDistrict.click();
        browser.sleep(sleepTimeOutLittle);
        selectDistrictCb.click();
        browser.sleep(sleepTimeOutLittle);
        goToDistrict.click();
        browser.sleep(sleepTimeOutLittle);
        selectCounty.click();
        browser.sleep(sleepTimeOutLittle);
        selectCountyCb.click();
        browser.sleep(sleepTimeOutLittle);
        goToCounty.click();

        browser.sleep(sleepTimeOutLittle);
        selectRoad.click();
        browser.sleep(sleepTimeOutLittle);
        selectRoadCb.click();
        browser.sleep(sleepTimeOutLittle);
        goToRoad.click();

        browser.sleep(sleepTimeOutLittle);
        selectBuildingEntrance.click();
        browser.sleep(sleepTimeOutLittle);
        selectBuildingEntranceCb.click();
        browser.sleep(sleepTimeOutLittle);
        goToBuildingEntrance.click();
        //checkRememberMeTrue.click();yarın bakılacak

        //detailSearchbutton.click();
        //browser.sleep(sleepTimeOutLong);
        //selectDistrict.click();
        //browser.sleep(sleepTimeOutLittle);
        //selectDistrictCombobox.click();
        //browser.sleep(sleepTimeOutLittle);
        //selectCounty.click();
        //browser.sleep(sleepTimeOutLittle);
        //selectCountyCombobox.click();
        //browser.sleep(sleepTimeOutLittle);
        //selectWorkCategory.click();
        //browser.sleep(sleepTimeOutLittle);
        //selectWorkCategoryCb.click();
        //browser.sleep(sleepTimeOutLittle);
        //selectType.click();
        //browser.sleep(sleepTimeOutLittle);
        //selectTypeCb.click();
        //browser.sleep(sleepTimeOutLittle);
        //selectWorkType.click();
        //browser.sleep(sleepTimeOutLittle);
        //selectWorkTypeCb.click();
        //browser.sleep(sleepTimeOutLittle);
        //selectComplatintSource.click();
        //browser.sleep(sleepTimeOutLittle);
        //selectComplatintSourceCb.click();
        //browser.sleep(sleepTimeOutLittle);
        //selectRegion.click();
        //browser.sleep(sleepTimeOutLittle);
        //selectRegionCb.click();
        //detailSearchButton.click();
        browser.sleep(sleepTimeOut);


    });


    //#endregion


});

