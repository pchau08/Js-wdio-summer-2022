/**
 * Locators: way to reach/find webElement
 * 
 * 1. using id-attribute
 *      id-attribute is always going to be unique in DOM
 *      To check if id-value is unique, In chropath -> //*[@id='idValue']
 *      
 *      const webElement = await $('#idValue');
 * 
 * 2. Using linkText
 *      To check if linkText is unique of not, In chropath -> //a[text()='Link Text']
 *      
 *      const webElement = await $('=Link Text');
 * 
 * 3. using partial LinkText
 *      To check if partial linkText is unique of not, In chropath -> //a[contains(text(),'partial link text')]
 *      
 *      const webElement = await $('*=partial link text');
 * 
 * 4. Using other attribute's value instead id-attribute
 *      To check, if any-attribute has unique value or not, In chropath -> //tagName[@attrName='attrValue']
 *      Note: Attribute's value cannot have spaces
 * 
 *      const webElement = $('tagName[attrName=attrValue]'); 
 * 
 * 5. Using other attribute's partial value instead id-attribute
 *      To check, if any-attribute has unique value or not, In chropath -> //tagName[contains(@attrName, 'partialAttrValue')]
 *      Note: Attribute's partial value cannot have spaces
 * 
 *      const webElement = $('tagName[attrName*=partial_attrValue]'); 
 * 
 * 6. Using text value
 *      To check, if text of a webElement is unique, In chropath -> //tagName[text()='text value']
 * 
 *      const webElement = $('tagName=text value');
 * 
 * 7. Using partial text value
 *      To check, if text of a webElement is unique, In chropath -> //tagName[contains(text(),'partial text value')]
 * 
 *      const webElement = $('tagName*=partial text value');
 * 
 * 8. Using tagName
 *      To check if tagName with webElement is unique, In chropath -> //tagName
 * 
 *      const webElement = $('<tagName>');
 * 
 * 9. Using class attribute
 *      To check if class attribute's value is unique, In chropath -> //*[@class='classAttrValue']
 *      Note: Class attribute's value cannot have spaces
 *  
 *      const webElement = $('.classAttributeValue')
 * 
 * 
 */

/**
 * Links:
 *      always have a-tag
 *      text of link is known linkText
 *      value of href-attribute defines where user will land after click the link.
 *      
 * 
 * <a href="https://messenger.com/" title="Take a look at Messenger." xpath="1">Messenger</a>
 * 
 * attributes of a-tag: href, title
 * text of a-tag: Messenger
 * 
 */

/**
 * Steps to interact with webElement:
 * 1. Find the unique locator strategy to find webElement
 * 2. Based on the strategy, use respect code to find WebElement
 * 3. once webElement is found, interact with webElement.
 * 
 * 
 * To find WebElement:
 * function -> $
 * 
 */
/**
 * 
 * Interactions:
 *  1. type
 *      function: setValue()
 *      input: String input which is the text we want to type
 * 
 *  2. click
 *      function: click()
 * 
 *  3. if it's selected
 *      function: isSelected()
 *      if the WebElement is selected
 *          returns true
 *      else
 *          returns false
 * 
 *  4. if it's enabled
 *      function : isEnabled()
 *      if the WebElement is enabled
 *          returns true
 *      else
 *          returns false
 * 
 *  5. if it's displayed
 *      function : isDisplayed()
 *      if the WebElement is displayed
 *          returns true
 *      else
 *          returns false
 *  
 * 6. To get the text of a webElement
 *      function: getText()
 *      return type: String
 * 
 * 7. To get the value of an attribute of a webElement
 *      function: getAttribute()
 *      input: attributeName
 *      return type: String
 * 
 * 
 */













