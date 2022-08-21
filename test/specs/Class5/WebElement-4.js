/**
 * Locators: way to reach/find webElement
 * 
 * 10. xpath
 *      Types:
 *      1. Absolute xpath
 *          a) starts with single slash (/)
 *          b) tells the route to reach to a particular webElement from html-tag (or root-tag)
 *          c) not reliable, any change in the webPage can break the absolute xpath
 *          eg:
 *              /html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]
 *              /html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/input[1]
 * 
 *      2. Relative xpath
 *          a) starts with double slash (//)
 *          b) reliable bcz we use the tagName, attributes or text-value in any combination to create locator.
 * 
 *      --> Direct xpath (simple xpath)
 *      --> Indirect xpath (advanced xpath)
 * 
 */

/**
 * 
 *  Direct xpath (simple xpath)
 * 
 * 1. using attribute's value
 **     //tagName[@attrName="attr Value"]
 *      Find the tag(tagName) in dom which has attribute(attrName) with value(attr value)
 * 
 *      const webElement =  await $('//tagName[@attrName="attr Value"]')
 * 
 * 2. using text value
 * *    //tagName[text()="text value"]
 *      Find the tag(tagName) in the dom which has text equals to 'text value'
 * 
 *      const webElement =  await $('//tagName[text()="text value"]')
 * 
 * 3. using partial attribute's value
 **     //tagName[contains(@attrName, "partial attr value")]
 *      Find the tag(tagName) in the dom where attribute (attrName) contains "partial attr value"
 **     eg: //input[contains(@aria-label, "il add")]
 *  
 *      const webElement =  await $('//tagName[contains(@attrName, "partial attr value")]')
 * 
 * 4. using partial text value
 **      //tagName[contains(text(), "partial text value")]     
 *       Find the tag(tagName) in the dom where text contains "partial text value"
 **     eg: //a[contains(text(), "word")]
 * 
 *      const webElement =  await $('//tagName[contains(text(), "partial text value")]')
 * 
 * 5. using starting portion of attribute's value
 **     //tagName[starts-with(@attrName, "partial attr value")]
 *      Find the tag(tagName) in the dom where attribute (attrName) starts with "partial attr value"
 **     eg: //span[starts-with(@class , "feels")]
 *  
 *      const webElement =  await $('//tagName[starts-with(@attrName, "starting attr value")]')
 * 
 * 6. using starting portion of text value
 **      //tagName[contains(text(), "partial text value")]     
 *       Find the tag(tagName) in the dom where text contains "partial text value"
 **     eg: //span[starts-with(text() , "Fee")]
 * 
 *      const webElement =  await $('//tagName[starts-with(text(), "starting text value")]')
 * 
 * 7. using not-operator
 **     //tagName[not(@attrName='value')]
 *      Find the tag(tagName) in the dom where attribute(attrName) is NOT equals to "value"
 * 
 **     //tagName[@attrName]
 *      Find the tag(tagName) in the dom which has attribute(attrName)
 *      eg: //button[@disabled]
 * 
 **     //tagName[not(@attrName)]
 *      Find the tag(tagName) in the dom which does not have attribute(attrName)
 *      eg: //button[not(@disabled)]
 * 
 **     //tagName[not(contains(text(), "value"))] 
 *      Find the tag(tagName) in the dom where text does NOT contains "value"
 * 
 * 8. and/or operator
 * *    //tagName[@attrName="attValue" and text()="text value"]
 *      Find the tag(tagName) in dom, where attribute(attrName) has value = "attValue" AND text equals to "text value"
 * 
 * *    //tagName[contains(text(),"xt Val") or contains(text(), "XT VAL")]
 *      Find the tag(tagName) in dom, where text contains "xt Val" OR text contains "XT VAL"
 * 
 * *    //tagName[starts-with(@attrName, "attr v") and not(@attrName1)]
 *      Find the tag(tagName) in dom, where attribute(attrName) value starts with "attr v" and does NOT has attrName1-attribute
 * 
 * *    //*[starts-with(@attrName, "attr v") and not(@attrName1)]
 *      Find any tag in dom, where attribute(attrName) value starts with "attr v" and does NOT has attrName1-attribute
 * 
 *      //*[@attrName="attr value"]
 *      Find any tag in dom, where attribute(attrName) has value equals to "attr value"
 * 
 * 
 * Advanced xpath
 *  1. using parent/grandparent etc
 * *    //div[@id="header"]//div[contains(@class,'selectric-units')]
 * *    //a[@data-day="0"]//span[@class="open"]
 * 
 * 2. using xpath-axes
 *  1. following-sibling
 * *    //tag[condition(s)]/following-sibling::tag2[condition(s)]    
 * eg:
 **      //label[text()="Female"]/following-sibling::input
 **      //h2[text()="August 2022"]/following-sibling::table//button[@data-day="16"]
 * 
 *  2. preceding-sibling
 * *    //tag[condition(s)]/preceding-sibling::tag2[condition(s)]
 * 
 *  3. following
 * *    //tag[condition(s)]/following::tag2[condition(s)]
 * eg: //a[contains(text(), 'Create a')]/following::a[text()='Log In']
 * 
 *  4. preceding
 * *    //tag[condition(s)]/preceding::tag2[condition(s)]     
 * 
 * 
 * 
 * Generic xpath discussion:
 * 
 * *    //tag[condition(s)]
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
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
 * <tag1 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *     <tag2 id="abcd" data-text-id="unique data" attr3="value3" attr4="value4">
 *         <tag3>Not Unique Text
 *              <subTag attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 1</subTag>
 *         </tag3>
 *         <tag11 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 2</tag11>
 *         <tag21 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 3</tag21>
 *         <tag31 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 31</tag31>
 *     </tag2>
 *     <tag4 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *         <a attr1="value1" attr2="value2">Unique Text 4</tag>
 *     </tag4>
 *     <tag6 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *          <tag7 attr1="value1" attr2="value2" attr3="value3" attr4="value4"></tag>
 *     </tag6>
 * </tag1>
 * 
 * 
 * children of tag1 --> tag2, tag4, tag6 (3)
 * siblings of tag4 --> tag2 and tag6
 * 
 * siblings of tag11(tag2) --> tag3(tag2), tag21(tag2), tag31
 * 
 * parent of subTag --> tag3
 * 
 * following-sibling (siblings appearing in the dom after the tag)
 * following-siblings of tag11(tag2) --> tag21, tag31
 * following-siblings of tag3 --> tag11, tag21, tag31
 * following-siblings of a --> 0
 * 
 * preceding-sibling (siblings appearing in the dom before the tag)
 * preceding-sibling of tag11 --> tag3
 * preceding-sibling of tag3 --> 0
 * preceding-sibling of subTag --> 0
 * 
 * following (any tag on the dom appearing after the tag)
 * following of tag11 --> tag21, tag31, tag4, a, tag6, tag7
 * following of tag3 --> subTag, tag11, tag21, tag21, tag4, a, tag6, tag7
 * 
 * preceding (any tag on the dom appearing before the tag)
 * preceding of a --> tag4, tag31, tag21, tag11, tag3, subTag, tag2, tag1
 * 
 * <tag1 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *     <tag2 id="abcd" data-text-id="unique data" attr3="value3" attr4="value4">
 *         <tag3>Not Unique Text
 *              <subTag attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 1</subTag>
 *         </tag3>
 *         <tag11 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 2</tag11>
 *         <tag21 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 3</tag21>
 *         <tag31 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 31</tag31>
 *     </tag2>
 *     <tag4 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *         <a attr1="value1" attr2="value2">Unique Text 4</tag>
 *     </tag4>
 *     <tag6 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *          <tag7 attr1="value1" attr2="value2" attr3="value3" attr4="value4"></tag>
 *     </tag6>
 * </tag1>
 */




/**
 * Steps to interact with webElement:
 * 1. Find the unique locator strategy to find webElement
 * 2. Based on the strategy, use respective code to find WebElement
 * 3. once webElement is found, interact with webElement.
 * 
 * 
 * To find WebElement:
 * function -> $
 * 
 * To find WebElements:
 * function -> $$   (findElements)
 * 
 * returns Array [we1, we2, we3, we4]
 * 
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













