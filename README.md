# MyRoommate

This website intends to bring many of the common problems roommates might run into into a single area such as chores, food, and event planning. 

You can register as a user (real email not needed), connect to an apartment, and edit chores and groceries for your apartment. Or you can register as an admin and edit events and apartments.

## Link to the site (only works on FireFox): 
https://warm-inlet-25455.herokuapp.com

## My Contributions

* Apartment View
  * ./apartment/{:apartmentId} 
  * [/src/containers/ApartmentViewContainer.js](https://github.com/henryjacobson/RoommateSite/blob/master/src/containers/ApartmentViewContainer.js)
  * Displays events, chores, tenants, and groceries. Editable only when signed in.
* Chore Editor
  * ./apartments/{:apartmentId}/chores/{:choreId} 
  * [/src/containers/ChoreEditorContainer.js](https://github.com/henryjacobson/RoommateSite/blob/master/src/containers/ChoreEditorContainer.js)
  * Shows individual chore and allow editing name and assignee. Viewable only when signed in.
* Backend data organization in Spring
  * https://github.com/henryjacobson/Team2Database
* General bug fixing
