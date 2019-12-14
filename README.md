# project-frontend-hackers
project-frontend-hackers created by GitHub Classroom

# Project Title
Easy Quotes Insurance


# link for the website
https://harrabab.github.io/harrabab/index.html

### Html Files

* index.html
* auto_insurance_form.html
* home_insurance_form.html

### Css Files

* home_style.css (home.html)
* auto_home_insurance_form_style.css (auto_insurance_form.html, home_insurance_form.html)

### Javascript Files

* home_script.js (home.html)
* script_auto_insurance.js (auto_insurance_form.html) 
* script_home_insurance.js (home_insurance_form.html)

### Functionality

Home page is the first page of the Easy quote (insurance quote site), from this page we can navigate to Home insurance page, Auto insurance page, Blog, Faq. 

* This page is developed with mobile first approach it has a specific design for small, medium and large devices. In home page Slider is used to display images when you decrease the screen size less than 992px.
* This page is bilingual you have option to view page in English and French.
* Whatever language we select from the dropdown will be stored in the local storage and that language will automaticaly be selected when we open auto_insurance_form.html, home_insurance_form.html.


Home Insurance Form Page is the page where submit home insurance form in this we have to fill our personal information and validate the information. After validating  fill the property information and validate and at last submit the information to get the quote.

* This page is developed with mobile first approach it has a specific design for small, medium and large devices.
* This page is bilingual you have option to view page in English and French.
* Validation
    *  First name and Last name should not have special characters and should have more than 4 character.
    *  Age of the person should be greater than 18.
    *  Property Type is populated by an array.
    *  Ownership Type is populated by an array.
    *  Total no. claims made in last three year is poplated using array. 
    *  Date when the property was built should be there.  
    *  You need to select Property Type,  Ownership Type, Total no. claims 
    *  You have to answer is your basement finished or not
    *  Firstly you need to validate your personal information only then you can validate your property information.
    *  After you validate both pesonal and property information you can get the quote button enable
    *  Progress bar increase to 50% when you validate your personal information and 100% when you validate your personal and property          information.
    
 * Google api to auto populate address.
 
Auto Insurance Form Page is the page where submit auto insurance form in this we have to fill our personal information and validate the information. After validating  fill the property information and validate and at last submit the information to get the quote.

* This page is developed with mobile first approach it has a specific design for small, medium and large devices.
* This page is bilingual you have option to view page in English and French.
* Validation
    *  First name and Last name should not have special characters and should have more than 4 character.
    *  Age of the person should be greater than 18.
    *  Issuing province is populated by an array.
    *  Licence class is populated by an array.
    *  When did you lease or buy it should be selected.
    *  Purchase condition is populated by an array.
    *  Annual distance is populated by an array.
    *  Do you use this vehicle to carry paying passengers or for deliveries need to select one option.
    *  Do you use this vehicle for any other business purposes need to select one option.
    *  Do you install winter tires from november until April? select one option.
* Google api to auto populate address.


Tejal's contribution

### Html Files

* auto_insurance_landing.html
* claim_page.html
* insurance_select.html

### Css Files

* insurance_selectstyles.css ( auto_insurance_landing.html , insurance_select.html )
* claimstyles.css ( claim_page.html )

### Javascript Files

* landing_select.js ( auto_insurance_landing.html , insurance_select.html )
* claim_script.js ( claim_page.html )

### Functionality

*  Auto Insurance Landing page contains information about auto insurance and types of insurance we are providing.
* Blog section displays topics related to auto insurance and useful links section provides direct access to auto insurance page.
* Content section showing brief information about 3 types of insurance with flip functionality.This page also displays counter as well         with number of happy and satisfied customers who have already bought insurance. In the background Gradient functionality is used.
* System is responsive for all 3 types of screen. Big , medium and small.


Claim contains information about claims.
There are 2 types of claim
* Home Claim
* Auto claim

Content section showing information regarding frequently asked questions about home and auto claims.This page also displays Form with validation of information user have entered.
This form is visible as pop-up section when user clicks on button
Home claim form contains following validations
* Validation
    *  All Fields are mandatory. Asterix to display all fields are required
    *  Email field with proper format of email address need to be there
    *  As this website is only for Canadian users so Phone number should be in format of Canadian phone number. 
    *  If user enters invalid format of phone number , error message will display proper format of phone number
    
    
 
Insurance select page contains Form.Which Redirects to auto insurance page.
This form contains following fields
*  Address Field  with google Places API
*  Postal code Field
*  Type of insurance
As this website is for Canada , this API will fetch only addresses of Canada. 
When user enters first 3-4 letter of his/her address, API will display list of related address.
Once user selects address from list, System will automatically fetch postal code from selected address and display postal code in postal code field.
If user unable to find address through API suggestion , user can manually enter address and postal code to related fields.


  


## Author

* **Harrabab Singh**
*  **Tejal Gajjar**

