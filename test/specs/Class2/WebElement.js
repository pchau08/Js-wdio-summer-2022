/**
 * WebElements
 * 
 *  1. text
 *  2. textBox
 *  3. button
 *  4. radioButton
 *  5. checkBox
 *  6. dropdown
 *  7. link
 *  8. alert
 * 
 * 
 * Interactions:
 *  1. type
 *  2. click
 *  3. if it's selected
 *  4. if it's enabled
 *  5. if it's displayed
 *  
 */

/**
 * Document Object Model (DOM)
 * 
 * Code -> Generates DOM (html document) -> makes the webPage
 * 
 * <html>
 *      <head></head>
 *      <body></body>
 * </html>
 * 
 * 
 * <tag1>       // starting of tag1
 * 
 * </tag1>      // closing of tag1
 * 
 *  eg: html, head, body, script, div, form, input, button
 * 
 * Note: tagName cannot have space
 * 
 * <tag1 attr1="value1" attr2="value2" attr3 attr4="value4" attr5="value5" attr6="value six">
 * 
 * tag -> tag1
 * attributes of tag1 ->  attr1, attr2, attr3, attr4, attr5, attr6
 * Note: attributeName cannot have spaces
 * 
 * value of attr1 = value1
 * value of attr2 = value2
 * value of attr3 = none
 * value of attr4 = value4
 * value of attr5 = value5
 * value of attr6 = value six
 * 
 * 
 * <input type="text" class="inputtext _55r1 _6luy" name="email" id="email" data-testid="royal_email" 
 *      placeholder="Email address or phone number" autofocus="1" aria-label="Email address or phone number">
 * tag -> input
 * attributes of input-tag -> type, class, name
 * 
 * 
 * <tag1 attr1="value1" attr2="value2" attr3 attr4="value4" attr5="value5" attr6="value six">My Value</tag1>
 *  tag1 has Text value = My Value
 * 
 * <a href="/reg/" title="Sign up for Facebook">Sign Up</a>
 *  a-tag has text value = Sign Up
 * 
     * <tag1 attr11="val1" attr12="val2" attr13>
     *     <tag2 attr21="val21" attr22="val22">
     *         text value
     *     </tag2>
     *     <tag3>
     *         text value again
     *     </tag3>
     *
     * </tag1>
 * 
 * text of tag2 -> text value
 * 
 * text of tag3 -> text value again
 * 
 * text of tag1 -> none
 * 
 */

/**
 * Chropath extension
 * 
 * https://chrome.google.com/webstore/detail/chropath/ljngjbnaijcbncmcnjfhigebomdlkcjo
 */



/**
 * Locators: way to reach/find webElement
 * 
 * 1. using id-attribute
 *      id-attribute is always going to be unique in DOM
 *      To check if id-value is unique, In chropath -> //*[@id='idValue']
 *      
 *      const webElement = await $('#idValue');
 *      
 * 2. Using other attribute's value instead id-attribute
 *      To check, if any-attribute has unique value or not, In chropath -> //tagName[@attrName='attrValue']
 *      Note: Attribute's value cannot have spaces
 * 
 *      const webElement = $('tagName[attrName=attrValue]');
 * 
 * 3. Using linkText
 *      To check if linkText is unique of not, In chropath -> //a[text()='Link Text']
 *      
 *      const webElement = await $('=Link Text');
 * 
 * 4. using partial LinkText
 *      To check if partial linkText is unique of not, In chropath -> //a[contains(text(),'partial link text')]
 *      
 *      const webElement = await $('*=partial link text');
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
 */













