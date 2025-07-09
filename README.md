# Web Development Project 4 - *Random Cat Explorer*

Submitted by: **Baire Diaz**

This web app: **The Random Cat Explorer web app is an interactive platform that allows users to discover random cat breeds with detailed attributes and images. Users can explore cats by clicking the "Discover" button, view their breed, weight, origin, and lifespan, and interact with the displayed attributes. The app features a ban list functionality, enabling users to exclude specific attributes from future results. Additionally, it includes a history section to track previously seen cats, providing a seamless and engaging user experience. Designed with a responsive layout, the app ensures consistent UI/UX across all components.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image should be consistent across API calls (i.e. if you are using a cat API, and display the color, breed, and age in response to an initial API call, subsequent button clicks should also result in the color, breed, and age being displayed)
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time 
  - Displayed attributes should match the displayed image (i.e., if showing a picture of a Siamese cat and the attribute breed, the displayed breed should be 'Siamese' not 'Ragdoll' or another breed that doesn't match)
  - There is at least one image per API call
- [x] **API call response results should appear random to the user**
  - Clicking on the API call button should generate a seemingly random new result each time
  - Note: Repeat results are permitted but the API used should have a reasonably large amount of data and repeats should not be frequent
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban **list**
  - At least one attribute for each API result should be clickable
  - Clicking on a clickable attribute not on the ban list, should imnmediately add it to the ban list 
  - Clicking on an attribute in the ban list should immediately remove it from the ban list 
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the API call button should not result in any image/attributes with attribute values in the ban list being displayed (ex. Using a cat API, if the ban list includes the value 'Siberian' for the breed attribute, clicking on the Discover button should never result in a Siberian cat being displayed)
  - Note: More attribute values on the ban list may result in a higher frequency of repeat results
  -  [x] _To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes_


The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list
- [x] Users can see a stored history of their previously displayed  results from this session
  - A dedicated section of the application displays all the previous images/attributes seen before
  - Each time the API call button is clicked, the history updates with the newest API result

The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!
1. Responsive Layout:
- Used flexbox to create a responsive layout with sidebars and a centered main content area.

2. Consistent Image Sizes:
- Ensured all cat images are displayed with fixed dimensions (300px x 300px) using object-fit: cover to prevent layout shifts.

3. Clickable Attributes:
-Made attributes (breed, weight, origin, lifespan) clickable to add/remove them from the ban list.

4. Ban List Functionality:
- Implemented logic to exclude banned attributes from future API results.
- Added a section to display the ban list with interactive removal functionality.

5. History Section:
-Added a history section to display previously seen cats with their attributes and images.

6. Loading State:
- Added a spinner to indicate loading while fetching new cat data.

7. Error Handling:
- Displayed styled error messages when API calls fail or no matching results are found.

8. Improved Textbox Design:
- Styled the clickable attributes as gold-colored textboxes with hover effects for better interactivity.

9. Aligned Right Sidebar:
- Adjusted the width and padding of the right sidebar to align it closer to the edge of the page.

10. Consistent UI/UX:
- Ensured all components (sidebars, main content, textboxes, buttons) are visually cohesive and aligned properly.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="https://cdn.loom.com/sessions/thumbnails/a033b2f969274bac965567858e321244-fb00cd5ae4d8fb1d-full-play.gif" title='Video Walkthrough' width='' alt='Video Walkthrough' />


GIF created with Loom

## Notes

Describe any challenges encountered while building the app.
Challenges Encountered While Building the App:

1. Dynamic API Integration:
- Parsing and understanding the structure of The Cat API's JSON response required careful handling to ensure consistent attributes (e.g., breed, weight, origin, lifespan) were displayed correctly.

2. Ban List Logic:
- Implementing the logic to exclude banned attributes from future API results was challenging, especially ensuring that the app handled edge cases like multiple banned attributes or limited API data.

3. Responsive Layout:
- Aligning the sidebars and main content using flexbox while maintaining proportional dimensions and responsiveness across different screen sizes required iterative adjustments.

4. Image Consistency:
- Ensuring all images displayed with fixed dimensions (300px x 300px) without distortion involved using object-fit: cover and testing various image sizes.

5. Error Handling:
- Displaying meaningful error messages for scenarios like API failures or no matching results required additional logic and styling.

6. Interactive Features:
- Making attributes clickable and ensuring smooth addition/removal from the ban list required careful state management and event handling.

7. History Section:
- Implementing the history section to store and display previously seen cats while maintaining performance and avoiding excessive re-renders was a challenge.


## License

    Copyright [2025] [Baire Diaz]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
